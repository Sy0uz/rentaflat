import { FC } from 'react'
import { IFlat } from '../types/IFlat'
import FlatItem from './FlatItem';

interface FlatsListProps {
    flats: IFlat[];
}

const FlatsList:FC<FlatsListProps> = ({flats}) => {
    return (
        <div>
            {
                flats.map((flat) => <FlatItem key={flat.id} flat={flat}/>)
            }
        </div>
    )
}

export default FlatsList