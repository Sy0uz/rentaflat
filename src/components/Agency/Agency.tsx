import { FC } from 'react'
import { IAgency } from '../../types/IAgency'
import { IFlat } from '../../types/IFlat';
import Centered from '../../UI/Centered/Centered';
import Loader from '../../UI/Loader/Loader';
import Title from '../../UI/Title/Title';
import FlatsList from '../FlatsList';
import s from './../../style/Agency.module.css';
import AgencyInfo from './AgencyInfo';

interface AgencyProps {
    agency: IAgency;
    flatsInOwn: IFlat[];
    isLoading?: boolean;
}

const Agency:FC<AgencyProps> = ({agency, flatsInOwn, isLoading}) => {
    return (
        <div>
            <AgencyInfo agency={agency}/>

            {
                isLoading
                ?
                <Centered className={s.loaderBox}>
                    <Loader/>
                </Centered>
                :
                <Centered className={s.flatsList}>
                    <Title className={s.listTitle} size='small'>Аренда квартир</Title>
                    <FlatsList flats={flatsInOwn}/>
                </Centered>                 
            }
 
        </div>

    )
}

export default Agency