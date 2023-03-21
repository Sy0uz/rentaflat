import { FC } from 'react'
import { IFlat } from '../../types/IFlat'
import Title from '../../UI/Title/Title';
import FlatsList from '../FlatsList';
import s from './../../style/FindedFlats.module.css';
import { AdAmountString } from '../../utils/AdAmountString';
import MyDivider from '../../UI/MyDivider/MyDivider';

interface FindedFlatsProps {
    flats: IFlat[];
}

const FindedFlats:FC<FindedFlatsProps> = ({flats}) => {
    return (
        <div className={s.wrapper}>
            <Title className={s.title} size='small'>{AdAmountString(flats.length)}</Title>
            <MyDivider className={s.divider} marginY={16}/>
            <FlatsList flats={flats}/>
        </div>
    )
}

export default FindedFlats