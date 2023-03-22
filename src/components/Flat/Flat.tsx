import { FC, useEffect } from 'react'
import { IFlat } from '../../types/IFlat'
import Centered from '../../UI/Centered/Centered';
import FlatDescription from './FlatDescription';
import FlatMain from './FlatMain';
import GeneralInfo from './GeneralInfo';
import FlatHouseParametrs from './FlatHouseParametrs';
import FlatSideBar from './Sidebar/FlatSideBar';
import s from './../../style/Flat.module.css'
import { useInView } from 'react-intersection-observer';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Loader from '../../UI/Loader/Loader';
import VisitedFlats from './VisitedFlats';

interface FlatProps {
    flat: IFlat;
}

const Flat:FC<FlatProps> = ({flat}) => {

    const {fetchVisitedFlats} = useActions();
    const {visitedFlats, isVisitedLoading} = useTypedSelector(state => state.flatsReducer)

    const {ref, inView} = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    

    useEffect(() => {
        if (inView)
            fetchVisitedFlats();
    }, [inView])

    return (
        <Centered className={s.wrapper}>
            {
                flat &&
                <>
                    <div className={s.content}>
                        <div className={s.main}>
                            <FlatMain flat={flat}/>

                            <FlatHouseParametrs square={flat.square} year={flat.year} floor={flat.floor}/>

                            <FlatDescription text={flat.description} />
                            
                            <div ref={ref}></div>

                            <GeneralInfo tenants={flat.tenants} features={flat.features} />
                        </div>
                        
                        <div className={s.sidebar}>
                            <FlatSideBar flat={flat}/> 
                        </div>
                    </div>
                    {
                        isVisitedLoading
                            ?
                            <Loader />
                            :
                            visitedFlats.length
                                ?
                                <VisitedFlats flats={visitedFlats} />
                                :
                                <></>
                    }
                </>
            }
        </Centered>
    )
}

export default Flat