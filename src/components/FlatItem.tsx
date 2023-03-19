import { FC } from 'react'
import { Link } from 'react-router-dom';
import { IFlat } from '../types/IFlat'
import Title from '../UI/Title/Title';
import { CutString } from '../utils/CutString';
import { DateStringToString } from '../utils/DateToString';
import { FlatAddressCreator } from '../utils/FlatAddressCreator';
import { FlatPaymentCreator } from '../utils/FlatPaymentsCreator';
import { FlatTitleCreator } from '../utils/FlatTitleCreator';
import s from './../style/FlatItem.module.css'
import FlatImagePreview from './Flat/FlatImagePreview';
import FlatPrice from './Flat/Sidebar/FlatPrice';

interface FlatItemProps {
    flat: IFlat;
}

const FlatItem:FC<FlatItemProps> = ({flat}) => {
    return (
        <Link to={`/flat/${flat.id}`} className={s.wrapper}>
            <FlatImagePreview images={flat.images}/>
            <div className={s.info}>
                <Title size='middle'>{flat.title || FlatTitleCreator(flat.roomAmount, flat.square.general)}</Title>

                <div>{flat.title && FlatTitleCreator(flat.roomAmount, flat.square.general)}</div>

                <div className={s.address}>{FlatAddressCreator(flat.address)}</div>

                <Title size='small' className={s.price}>{flat.price.toLocaleString()} ₽/мес</Title>
                <div className={s.communal}>{FlatPaymentCreator(flat.price, flat.communalPayments)}</div>

                <div className={s.desc}>
                    {CutString(flat.description, 300)}
                </div>
            </div>
            <div className={s.time}>{DateStringToString(flat.creationDate)}</div>
        </Link>
    )
}

export default FlatItem