import { FC, useState, useMemo } from 'react'
import { IFlat } from '../../types/IFlat'
import Title from '../../UI/Title/Title';
import FlatsList from '../FlatsList';
import s from './../../style/FindedFlats.module.css';
import { AdAmountString } from '../../utils/AdAmountString';
import MyDivider from '../../UI/MyDivider/MyDivider';
import Dropdown from '../Dropdown';
import { Button } from 'antd';
import {SortAscendingOutlined, SortDescendingOutlined} from '@ant-design/icons'

interface FindedFlatsProps {
    flats: IFlat[];
}

const FindedFlats:FC<FindedFlatsProps> = ({flats}) => {

    const [opened, setOpened] = useState<boolean>(false);
    const [btnText, setBtnText] = useState<string>('Сортировка');
    const [sortBy, setSortBy] = useState<string>('default');

    const [reverseOrder, setReverseOrder] = useState<boolean>(false);

    const menuOptions = [
        {label: 'Цена', value: 'price'},
        {label: 'Дата', value: 'date'},
        {label: 'Комнаты', value: 'rooms'}
    ]

    const sortedFlats:IFlat[] = useMemo(() => {
        switch (sortBy) {
            case 'price':
                setBtnText('Цена');
                return flats.sort((a,b) => a.price - b.price);
            case 'date':
                setBtnText('Дата');
                return flats.sort((a,b) => {
                    let date1 = new Date(a.creationDate).getTime();
                    let date2 = new Date(b.creationDate).getTime();

                    return date1 - date2;
                })
            case 'rooms':
                setBtnText('Комнаты');
                return flats.sort((a,b) => a.roomAmount - b.roomAmount);
            default:
                setBtnText('Сортировка');
                return flats;
        }
    }, [sortBy])

    const reverseSortedFlats: IFlat[] = useMemo(() => {
        if (reverseOrder)
            return [...sortedFlats].reverse();
        else return sortedFlats;
    }, [reverseOrder, sortBy])

    const handler = (value:string):void => {
        setSortBy(value)
        setOpened(false);
    }

    return (
        <div className={s.wrapper}>
            <Title className={s.title} size='small'>
                <div>
                    {AdAmountString(flats.length)}
                </div>
                <div className={s.sortBtns}>
                    <Button icon={reverseOrder ? <SortDescendingOutlined />  : <SortAscendingOutlined />} onClick={() => setReverseOrder(!reverseOrder)}></Button>
                    <Dropdown opened={opened} setOpened={setOpened} className={s.dropdown} button={
                        <Button type='primary' className={s.selectBtn}>
                            {btnText}
                        </Button>
                    }>
                        <div className={s.select}>
                            {
                                menuOptions.map((option) => <div
                                    key={option.value}
                                    onClick={() => handler(option.value)}
                                    className={
                                        sortBy === option.value
                                            ?
                                            [s.selectItem, s.active].join(' ')
                                            :
                                            s.selectItem
                                    }
                                >
                                    {option.label}
                                </div>)
                            }
                        </div>
                    </Dropdown>
                </div>
            </Title>
            <MyDivider className={s.divider} marginY={16}/>
            <FlatsList flats={reverseSortedFlats}/>
        </div>
    )
}

export default FindedFlats