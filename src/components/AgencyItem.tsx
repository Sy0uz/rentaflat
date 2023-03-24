import { FC } from 'react'
import { Link } from 'react-router-dom';
import { IAgency } from '../types/IAgency'
import Title from '../UI/Title/Title';
import s from './../style/AgencyItem.module.css'

interface AgencyItemProps {
    agency: IAgency;
}

const AgencyItem:FC<AgencyItemProps> = ({agency}) => {
    return (
        <Link to={`/agency/${agency.id}`} className={s.wrapper}>
            <img className={s.image} src={agency.image} alt={agency.title} />
            <div className={s.infoMain}>
                <Title marginBottom={6} size='minimal'>{agency.title}</Title>
                <div className={s.yearSince}>Опыт работы: с {agency.year} года</div>
            </div>

            <div className={s.spec}>{agency.specialization ? agency.specialization : "Специализация отсутсвует."}</div>

            <div className={s.flatsCount}>
                <div className={s.countTitle}>Объектов в работе</div>
                <div className={s.count}>{agency.flatIdInOwn.length}</div>
            </div>
        </Link>
    )
}

export default AgencyItem