import {FC} from 'react'
import Pdiv from '../../../UI/Pdiv/Pdiv';
import Title from '../../../UI/Title/Title';
import s from './../../../style/FlatRealtor.module.css'

interface RealtorProps {
    realtor: string;
    img?: string;
}

const FlatRealtor:FC<RealtorProps> = ({realtor, img}) => {
    return (
        <Pdiv className={s.wrapper}>
            <div className={s.avatarBox}>
                <img className={s.avatar} src={img ? img : "/images/avatar.png"} alt="" />
            </div>
            <div>
                <div className={s.realtor}>РИЕЛТОР</div>
                <Title size='minimal'>{realtor}</Title>                
            </div>
        </Pdiv>  
    )
}

export default FlatRealtor