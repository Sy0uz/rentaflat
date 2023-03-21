export const AdAmountString = (amount:number):string => {
    if (amount % 10 === 1)
        return `Найдено ${amount} объявление`;
    else if ((amount % 10) < 5 && (amount % 10) > 0)
        return `Найдено ${amount} объявления`;
    else 
        return `Найдено ${amount} объявлений`;
}