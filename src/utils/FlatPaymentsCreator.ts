import { IPayments } from "../types/IFlat";

export const FlatPaymentCreator = (price:number, communalPayments: IPayments):string => {
    if (communalPayments.isInclude)
        if (communalPayments.isCounters)
            if (communalPayments.isCountersInclude)
                return 'Комм. платежи включены (счётчики включены)'
            else
                return 'Комм. платежи включены (счётчики не включены)'
        else 
            return 'Комм. платежи включены (без счетчиков)'
    
    let result:string = `${price.toLocaleString()} ₽`;

    communalPayments.price ? result += ` + ${communalPayments.price.toLocaleString()} ₽ комм. платежи (без счётчиков)` : result = 'Комм. платежи не включены';

    return result;
}