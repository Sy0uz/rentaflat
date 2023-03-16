import { FC } from 'react'
import { Link } from 'react-router-dom';
import { IAgencyShort } from '../../../types/IFlat'
import Title from '../../../UI/Title/Title';
import s from './../../../style/FlatAgency.module.css'

interface AgencyProps {
    agency: IAgencyShort;
}

const FlatAgency:FC<AgencyProps> = ({agency}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.bg}>
                <div className={s.up}/>
                <div className={s.down}/>
            </div>
            <Link to={`/agency/${agency.id}`} className={s.content}>
                <div className={s.imgBox}>
                    <img className={s.agencyImg} src={agency.image} alt={agency.title}/>
                </div>
                <div className={s.titles}>
                    <div className={s.text}>АГЕНСТВО НЕДВИЖИМОСТИ</div>
                    <Title size='minimal' className={s.title}>{agency.title}</Title>                
                </div>                
            </Link>

        </div>
    )
}

export default FlatAgency