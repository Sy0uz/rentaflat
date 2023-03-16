import { IAddress } from "../types/IFlat"

export const FlatAddressCreator = (address: IAddress):string => {
    const addressArr:string[] = [address.city, `р-н ${address.district}`, address.street, address.house];
    return addressArr.join(', ');
}