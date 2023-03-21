import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Flat from '../components/Flat/Flat';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Centered from '../UI/Centered/Centered';
import PageLoader from '../UI/Loader/PageLoader';

type FlatPageParams = {
    id: string;
}

const FlatPage:FC = () => {

    const params = useParams<FlatPageParams>();
    const { flat, isLoading, error } = useTypedSelector(state => state.flatPageReducer);
    const { fetchFlat } = useActions();

    useEffect(() => {
        params.id && fetchFlat(params.id);
    }, [params.id])

    if (isLoading)
        return <PageLoader/>

    if (error)
        return <Centered>
            <div>
                {error}
            </div>
        </Centered>


    return (
        flat && <Flat flat={flat}/>
    )
}

export default FlatPage;