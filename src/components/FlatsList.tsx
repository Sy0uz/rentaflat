import { FC } from 'react'
import { IFlat } from '../types/IFlat'
import FlatItem from './FlatItem';
import s from './../style/FlatsList.module.css'

interface FlatsListProps {
    flats: IFlat[];
}

const FlatsList:FC<FlatsListProps> = ({flats}) => {
    return (
        <div className={s.wrapper}>
            {
                flats.map((flat) => <FlatItem flat={flat}/>)
            }
        </div>
    )
}

export default FlatsList