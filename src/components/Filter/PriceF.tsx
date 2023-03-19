import { Input } from 'antd';
import { FC, useMemo, useState } from 'react'
import Dropdown from '../Dropdown'
import FilterBtn from './FilterBtn';
import s from './../../style/PriceF.module.css'
import { LocaleNumStringValidator } from '../../utils/LocaleNumStringValidator';
import { ShortPrice } from '../../utils/ShortPrice';
import { CutString } from '../../utils/CutString';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const PriceF:FC = () => {

    const [opened, setOpened] = useState<boolean>(false);

    const {price} = useTypedSelector(state => state.filterReducer);
    const {setPriceGap} = useActions();

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

    const warning:boolean = useMemo(() => {
        if (price.from > price.to)
            return true;
        return false;
    }, [price.from, price.to]);

    const BtnText:string = useMemo(() => {
        if (!price.from && !price.to)
            return 'Цена';

        if (price.from && !price.to)
            return CutString(`от ${ShortPrice(price.from)}`, 18);
            
        else if (!price.from && price.to)
            return CutString(`до ${ShortPrice(price.to)}`, 18);

        else if (price.from && price.to)
            return CutString(`${ShortPrice(price.from)} - ${ShortPrice(price.to)}`, 18)
        
        return '';
    }, [price]);

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