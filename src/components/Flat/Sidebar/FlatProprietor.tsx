import { FC } from 'react'
import Pdiv from '../../../UI/Pdiv/Pdiv';
import Title from '../../../UI/Title/Title';
import s from './../../../style/FlatProprietor.module.css'

interface FlatProprietorProps {
    proprietor: string;
    img?: string;
}

const FlatProprietor:FC<FlatProprietorProps> = ({proprietor, img}) => {
    return (
        <Pdiv className={s.wrapper}>
            <div className={s.avatarBox}>
                <img className={s.avatar} src={img ? img : '/images/avatar.png'} alt={proprietor} />
            </div>
            <div className={s.content}>
                <div className={s.proprietor}>СОБСТВЕННИК</div>
                <Title className={s.title} size='minimal'>{proprietor}</Title>                
            </div>
        </Pdiv>
    )
}

export default FlatProprietor