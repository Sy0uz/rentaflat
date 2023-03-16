import axios from "axios";
import { IAgency } from "../types/IAgency";
import { IFlat } from "../types/IFlat";

export class PostService {
    static async getAllFlats():Promise<IFlat[]> {
        const response = await axios.get<IFlat[]>('/flats.json');
        return response.data;
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
}