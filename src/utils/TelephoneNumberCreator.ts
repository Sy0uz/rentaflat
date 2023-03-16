export const TelephoneNumberCreator = (phone:number):string => {
    let phoneStr = phone.toString();
    let result = '+';

    for (let i = 0; i < phoneStr.length; i++) {
        if (i === 1)
            result += ' ';
        if (i === 4)
            result += ' ';
        if (i === 7)
            result += '-';
        if (i === 9)
            result += '-'
        result += phoneStr[i];
    }

    return result;
}