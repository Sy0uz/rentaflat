import { FC } from 'react'
import { IPayments } from '../../../types/IFlat';
import Title from '../../../UI/Title/Title';
import { FlatPaymentCreator } from '../../../utils/FlatPaymentsCreator';
import s from './../../../style/FlatPrice.module.css'

interface PriceProps {
    price: number;
    communalPayments: IPayments;
}

const FlatPrice: FC<PriceProps> = ({ price, communalPayments }) => {
    return (
        <div>
            <Title>
                {price.toLocaleString()} ₽/мес.
            </Title>
            
            <div className={s.payments}>
                {FlatPaymentCreator(price, communalPayments)}
            </div>
        </div>
    )
}

export default FlatPrice