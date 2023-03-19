export const CutString = (str:string, count:number):string => {
    if (str.length <= count)
        return str;
    else
        return `${str.slice(0, count)}...`;
}