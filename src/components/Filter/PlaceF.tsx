import { Input } from 'antd';
import { FC } from 'react'
import s from './../../style/PlaceF.module.css'

interface PlaceFProps {
    query: string;
    setFilterQuery: (query: string) => void;
}

const PlaceF:FC<PlaceFProps> = ({query, setFilterQuery}) => {

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