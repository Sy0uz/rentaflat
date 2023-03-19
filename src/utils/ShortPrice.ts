export const ShortPrice = (price:number):string => {
    if (price < 1000)
        return price.toString();
    if (price < 1_000_000)
        return `${(price/1000).toFixed(1)} тыс`
    if (price < 1_000_000_000)
        return `${(price/1_000_000).toFixed(1)} млн`
    else
        return `${(price/1_000_000_000).toFixed(1)} млрд`
}