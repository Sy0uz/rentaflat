import { FC } from 'react'

interface PriceDescriptionProps {
    deposit: number | null;
    commision: number | null;
    prepayment: number | null;
    className?: string;
}

const FlatPriceDescription:FC<PriceDescriptionProps> = ({deposit, commision, prepayment, className}) => {

    const result: string[] = [];

    deposit ? result.push(`Залог ${deposit.toLocaleString()}`) : result.push(`Без залога`)
    commision ? result.push(`комиссия ${commision}%`) : result.push(`без комиссии`)

    if (prepayment) {
        let str: string = `предоплата за ${prepayment} `
        prepayment === 1 
            ? str += 'месяц'
            : prepayment <= 4
                ? str += 'месяца'
                : str += 'месяцев'
        result.push(str);
    }

    return (
        <div className={className}>{result.join(', ')}</div>
    )
}

export default FlatPriceDescription