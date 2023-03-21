import { FC } from 'react'
import { IAgency } from '../../types/IAgency'
import Centered from '../../UI/Centered/Centered';
import Title from '../../UI/Title/Title';
import s from './../../style/AgencyInfo.module.css'

interface AgencyInfoProps {
    agency: IAgency;
}

const AgencyInfo:FC<AgencyInfoProps> = ({agency}) => {
    return (
        <div className={s.wrapper}>
            <Centered className={s.centered}>
                <img className={s.image} src={agency.image} alt={agency.title} />
                <div className={s.info}>
                    <div className={s.infoHead}>
                        <Title size='small'>
                            {agency.title}
                        </Title>
                        <div className={s.infoYear}>
                            Опыт работы: с {agency.year} года
                        </div>         
                    </div>


                    <div className={s.spec}>
                        <div className={s.specTitle}>
                            Специализация
                        </div>
                        <div className={s.specText}>
                            {
                                agency.specialization
                                ?
                                    agency.specialization
                                :
                                    "Специализация отсутствует."
                            }
                        </div>                        
                    </div>

                </div>

            </Centered>
        </div>
    )
}

export default AgencyInfo