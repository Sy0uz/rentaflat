import axios from "axios";
import { IAgency } from "../types/IAgency";
import { IFlat } from "../types/IFlat";
import { IUser } from "../types/IUser";

export class PostService {

    static async authUser(username: string, password: string): Promise<IUser | null> {
        const response = await axios.get<IUser[]>('https://64428a7a33997d3ef9131c27.mockapi.io/api/users', {
            params: {
                username: username,
                password: password
            }
        });


        if (!response.data.length) return null;
        const userAuth = response.data[0];

        localStorage.setItem('auth', JSON.stringify({ username: userAuth.username, password: userAuth.password }));
        return userAuth;
    }

    static async checkUserAuth(): Promise<IUser | null> {
        const storage = localStorage.getItem('auth');
        if (!storage) return null;
        const userAuth: IUser = JSON.parse(storage);

        const response = await axios.get<IUser[]>('https://64428a7a33997d3ef9131c27.mockapi.io/api/users', {
            params: {
                username: userAuth.username,
                password: userAuth.password
            }
        });

        if (!response.data.length) return null;

        return response.data[0];
    }

    static async signUpUser(username: string, password: string): Promise<boolean> {

        const userAlreadyExist = await axios.get<IUser[]>('https://64428a7a33997d3ef9131c27.mockapi.io/api/users', {
            params: {
                username
            }
        });
        if (userAlreadyExist.data.length) return false;

        await axios.post('https://64428a7a33997d3ef9131c27.mockapi.io/api/users', { username, password });

        return true;
    }

    static async logoutUser() {
        localStorage.removeItem('auth');
    }

    static async getAllFlats(): Promise<IFlat[]> {
        const response = await axios.get<IFlat[]>('https://641ae58f1f5d999a4455bde9.mockapi.io/api/flats');
        return response.data;
    }

    static async getFilteredFlats(query: string = '', rooms: number[] = [], priceGap: { from: number, to: number } = { from: 0, to: 0 }): Promise<IFlat[]> {
        const response = await axios.get<IFlat[]>('https://641ae58f1f5d999a4455bde9.mockapi.io/api/flats');
        let result = response.data;

        result = result.filter(flat => {
            if (query)
                if (flat.address.district.toLowerCase() !== query.toLowerCase() && flat.address.street.toLowerCase() !== query.toLowerCase())
                    return false;

            if (priceGap.from > 0)
                if (flat.price < priceGap.from)
                    return false;

            if (priceGap.to > 0)
                if (flat.price > priceGap.to)
                    return false;

            if (rooms.length) {
                let flag = false;
                for (const room of rooms) {
                    if (room === flat.roomAmount)
                        flag = true;
                }
                if (!flag) return false;
            }

            return true;
        })

        return result;
    }

    static async getFlat(id: string): Promise<IFlat | null> {
        const response = await axios.get<IFlat>(`https://641ae58f1f5d999a4455bde9.mockapi.io/api/flats/${id}`);
        return response.data;
    }

    static async getAgencies(): Promise<IAgency[]> {
        const response = await axios.get<IAgency[]>('https://641ae58f1f5d999a4455bde9.mockapi.io/api/agencies');
        return response.data;
    }

    static async getAgency(id: string): Promise<IAgency | null> {
        const response = await axios.get<IAgency>(`https://641ae58f1f5d999a4455bde9.mockapi.io/api/agencies/${id}`);
        return response.data;
    }
}