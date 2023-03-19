import { Input } from 'antd';
import { FC } from 'react'
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import s from './../../style/PlaceF.module.css'

interface PlaceFProps {

}

const PlaceF:FC<PlaceFProps> = () => {

    const {query} = useTypedSelector(state => state.filterReducer);
    const {setFilterQuery} = useActions();

    const handler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFilterQuery(e.target.value);
    }

    return (
        <div className={s.wrapper}>
            <Input
                value={query}
                onChange={handler}
                className={s.input} 
                bordered={false}
                size='large'
                placeholder='Район или улица...'
            />
        </div>
    )
}

export default PlaceF;