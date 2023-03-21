export interface IAgency {
    id:number;
    title: string;
    image: string;
    flatIdInOwn: number[]; //id квартир
    specialization: string | null;
    year: number;
}