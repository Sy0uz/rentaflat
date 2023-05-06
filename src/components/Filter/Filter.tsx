import { Button } from 'antd'
import { FC } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import s from './../../style/Filter.module.css'
import PlaceF from './PlaceF'
import PriceF from './PriceF'
import RoomF from './RoomF'

const Filter: FC = () => {

    const { query, rooms, price } = useTypedSelector(state => state.filterReducer);
    const { isLoading } = useTypedSelector(state => state.flatsReducer);

    const { fetchFlats, setRooms, setPriceGap, setFilterQuery } = useActions();

    const findFlats = () => {
        fetchFlats(query, rooms, price);
    }

    return (
        <div className={s.wrapper}>
            <div className={s.filters}>
                <RoomF rooms={rooms} displayedRooms={[1, 2, 3, 4]} setRooms={setRooms} />
                <PriceF price={price} setPriceGap={setPriceGap} />
                <PlaceF query={query} setFilterQuery={setFilterQuery} />
            </div>

            <Button
                type='primary'
                className={s.submit}
                onClick={findFlats}
                loading={isLoading}
            >
                Найти
            </Button>
        </div>
    )
}

export default Filter;