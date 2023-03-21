import { FC } from 'react'
import { IAgency } from '../types/IAgency'
import AgencyItem from './AgencyItem';

interface AgencyListProps {
    agencies: IAgency[];
}

const AgencyList:FC<AgencyListProps> = ({agencies}) => {
    return (
        <div>
            {
                agencies.map((agency) => <AgencyItem key={agency.id} agency={agency}/>)
            }
        </div>
    )
}

export default AgencyList