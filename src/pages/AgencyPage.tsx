import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Agency from '../components/Agency/Agency';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Loader from '../UI/Loader/Loader';
import Centered from '../UI/Centered/Centered';

type AgencyParams = {
    id: string;
}

const AgencyPage:FC = () => {

    const params = useParams<AgencyParams>();
    const {isLoading, error, flatsInOwn, agency, flatsIsLoading} = useTypedSelector(state => state.agencyReducer);

    const {fetchAgency, fetchAgencyFlats, clearAgency} = useActions();

    useEffect(() => {
        params.id && fetchAgency(params.id)
        return () => {
            clearAgency();
        }
    }, [params.id])

    useEffect(() => {
        if (agency) {
            fetchAgencyFlats(agency.flatIdInOwn);
        }
    }, [agency])

    if (isLoading)
        return <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Loader />
        </div>

    if (error)
        return <Centered>
            <div>
                {error}
            </div>
        </Centered>
    
    return (
        agency && <Agency agency={agency} flatsInOwn={flatsInOwn} isLoading={flatsIsLoading}/>
    )
}

export default AgencyPage