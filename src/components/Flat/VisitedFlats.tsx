import { FC } from 'react'
import { IFlat } from '../../types/IFlat'
import MyDivider from '../../UI/MyDivider/MyDivider';
import Pdiv from '../../UI/Pdiv/Pdiv';
import Title from '../../UI/Title/Title';
import Wrapper from '../../UI/Wrapper/Wrapper';
import FlatItem from '../FlatItem';
import s from './../../style/VisitedFlats.module.css'

interface VisitedFlatsProps {
    flats: IFlat[];
}

const VisitedFlats: FC<VisitedFlatsProps> = ({ flats }) => {
    return (
        <Wrapper className={s.wrapper}>
            <Pdiv>
                <Title size='small'>Вы смотрели</Title>
            </Pdiv>
            <MyDivider/>
            <Pdiv className={s.flats}>
                {
                    flats.map(flat => <FlatItem size='small' flat={flat} />)
                }
            </Pdiv>            
        </Wrapper>

    )
}

export default VisitedFlats