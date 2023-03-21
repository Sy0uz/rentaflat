import { FC, useEffect, useState } from 'react'
import { PostService } from '../API/PostService';
import Agencies from '../components/Agencies';
import { IAgency } from '../types/IAgency';
import Loader from '../UI/Loader/Loader';

const AgenciesPage:FC = () => {

    const [agencies, setAgencies] = useState<IAgency[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const fetchAgencies = async () => {
        try {
            setIsLoading(true);
            setTimeout(async () => {
                const response = await PostService.getAgencies();
                setAgencies(response);
                setIsLoading(false);
            }, 500)
        } catch (error) {
            setError('Ошибка!!!');
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchAgencies();
    }, [])

    if (isLoading)
        return <div style={{display:'flex', justifyContent:'center'}}>
                <Loader/>
            </div>

    return (
        <Agencies agencies={agencies}/>
    )
}

export default AgenciesPage