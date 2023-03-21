import { Input } from 'antd';
import { FC, useEffect, useState } from 'react'
import Dropdown from '../Dropdown'
import FilterBtn from './FilterBtn';
import s from './../../style/PriceF.module.css'
import { LocaleNumStringValidator } from '../../utils/LocaleNumStringValidator';
import { ShortPrice } from '../../utils/ShortPrice';
import { CutString } from '../../utils/CutString';

interface PrcieFProps {
    price: {
        from: number,
        to: number,
    };
    setPriceGap: (price:{from: number,to: number}) => void;
}

const PriceF:FC<PrcieFProps> = ({price, setPriceGap}) => {

    const [opened, setOpened] = useState<boolean>(false);
    const [warning, setWarning] = useState<boolean>(false);
    const [BtnText, setBtnText] = useState<string>('Цена');

    const fromHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value) {
            setPriceGap({...price, from: 0});
            return;
        } 

        setPriceGap({...price, from: LocaleNumStringValidator(e.target.value) || price.from});
    };

    const toHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value) {
            setPriceGap({...price, to: 0});
            return;
        }

        setPriceGap({...price, to: LocaleNumStringValidator(e.target.value) || price.to});
    };

    useEffect(() => {
        if (price.from > price.to) {
            setWarning(true);
            return;
        }
        setWarning(false);
    }, [price.from, price.to])

    useEffect(() => {
        if (!price.from && !price.to) {
            setBtnText('Цена');
        }
        else if (price.from && !price.to) {
            setBtnText(CutString(`от ${ShortPrice(price.from)}`, 18));
        }
        else if (!price.from && price.to)
            setBtnText(CutString(`до ${ShortPrice(price.to)}`, 18));

        else if (price.from && price.to)
            setBtnText(CutString(`${ShortPrice(price.from)} - ${ShortPrice(price.to)}`, 18));
        else 
            setBtnText('');
    }, [price])

    return (
        <Dropdown
            opened={opened}
            setOpened={setOpened}
            button={
                <FilterBtn opened={opened} minWidth={150}>
                    {BtnText}
                </FilterBtn>
            }
        >
            <div className={s.inputs}>
                <Input status={warning ? 'error' : ''} placeholder='От' suffix={<div>₽</div>} size='small' value={price.from ? Number(price.from).toLocaleString() : ''} onChange={fromHandler}/>
                <Input status={warning ? 'error' : ''} placeholder='До' suffix={<div>₽</div>} size='small' value={price.to ? Number(price.to).toLocaleString(): ''} onChange={toHandler}/>
            </div>
        </Dropdown>
    )
}

export default PriceF