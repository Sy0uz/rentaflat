export const LocaleNumStringValidator = (str:string):number | null => {
    let res = str.split(' ').join('');
    if (res.match(/[0-9]$/))
        return Number(res);
    else 
        return null;
}
