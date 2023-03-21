import axios from "axios";
import { IAgency } from "../types/IAgency";
import { IFlat } from "../types/IFlat";

export class PostService {
    static async getAllFlats():Promise<IFlat[]> {
        const response = await axios.get<IFlat[]>('/flats.json');
        return response.data;
    }

    static async getFilteredFlats(query:string = '', rooms:number[] = [], priceGap: {from:number, to:number} = {from:0, to:0}):Promise<IFlat[]> {
        const response = await axios.get<IFlat[]>('/flats.json');
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

    static async getFlat(id:string):Promise<IFlat | null> {
        const response = await axios.get<IFlat[]>('/flats.json');
        const result = response.data.find((flat) => String(flat.id) === id);
        return result ? result : null;
    }

    static async getAgencies():Promise<IAgency[]> {
        const response = await axios.get<IAgency[]>('/agencies.json');
        return response.data;
    }

    static async getAgency(id: string):Promise<IAgency | null> {
        const response = await axios.get<IAgency[]>('/agencies.json');
        const result = response.data.find(a => String(a.id) === id);
        return result ? result : null;
    }
}