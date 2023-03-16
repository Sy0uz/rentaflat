export const DateStringToString = (date:string):string => {
    const event = new Date(date);

    const options:Intl.DateTimeFormatOptions = {
        day: "numeric",
        month:  "short",
        hour: "numeric",
        minute: "numeric",
    }

    return event.toLocaleString("ru", options)
}