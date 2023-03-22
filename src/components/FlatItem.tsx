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

interface FlatItemProps {
    flat: IFlat;
    size?: 'default' | 'small';
}

const FlatItem:FC<FlatItemProps> = ({flat, size = 'default'}) => {
    if (size === 'small')
        return (
            <Link to={`/flat/${flat.id}`} className={s.smallWrapper}>
                <div className={s.smallImg} style={{backgroundImage: `url(${flat.images[0]})`}}/>
                <div className={s.smallDesc}>
                    <Title size='minimal'>{flat.price.toLocaleString()} ₽/мес</Title>
                    <div>{FlatTitleCreator(flat.roomAmount, flat.square.general)}</div>
                    <div className={s.address}>{FlatAddressCreator(flat.address)}</div>
                </div>
            </Link>
        )
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