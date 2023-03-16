export enum Features {
    FRIDGE = "FRIDGE",
    FURNITURE_KITCHEN = "FURNITURE_KITCHEN",
    INTERNET = "INTERNET",
    WASHING_MACHINE = "WASHING_MACHINE",
    CONDITIONER = "CONDITIONER",
    BATH = "BATH",
    FURNITURE_ROOMS = "FURNITURE_ROOMS",
    TV = "TV",
    SHOWER = "SHOWER",
    DISHWASHER = "DISHWASHER",
}

export enum Tenants {
    CHILDREN = "CHILDREN",
    ANIMALS = "ANIMALS",
}

export interface IAddress {
    city: string;
    street: string;
    district: string;
    house: string;
};

export interface IAgencyShort {
    id:number;
    title: string;
    image: string;
}

export interface ISquare {
    general: number;
    living: number;
    kitchen: number;
    rooms?: number[];    
}

export interface IFloor {
    current: number;
    total: number;
}

export interface IPayments {
    isInclude: boolean;
    isCounters: boolean;
    isCountersInclude?: boolean;
    price?: number;
}

export interface IFlat {
    id: number;
    title: string | null;
    images: string[];
    square: ISquare;
    phone: number;
    owner: {
        agency?: IAgencyShort;
        realtor?: string;
        proprietor?: string;
    };
    price: number;
    prepaymentCount: number | null; //количество месяцев
    communalPayments: IPayments;
    deposit: number | null;
    commission: number | null; //проценты
    roomAmount: number;
    address: IAddress;
    description: string;
    floor: IFloor;
    year?: number;
    tenants: Tenants[];
    features: Features[];
    original?: string;
    creationDate: string;
}