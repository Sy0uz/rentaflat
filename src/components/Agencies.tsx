import { FC } from 'react'
import { IAgency } from '../types/IAgency'
import Centered from '../UI/Centered/Centered';
import Title from '../UI/Title/Title';
import AgencyList from './AgencyList';
import s from './../style/Agencies.module.css';

interface AgenciesProps {
    agencies: IAgency[];
}

const Agencies: FC<AgenciesProps> = ({ agencies }) => {
    return (
        <div className={s.wrapper}>
            <Centered>
                <Title className={s.title} marginBottom={12}>
                    Каталог агенств
                </Title>
                <AgencyList agencies={agencies}/>                
            </Centered>
        </div>
    )
}

export default Agencies