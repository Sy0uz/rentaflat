import { FC } from 'react'
import { IFlat } from '../../types/IFlat'
import Centered from '../../UI/Centered/Centered';
import FlatDescription from './FlatDescription';
import FlatMain from './FlatMain';
import GeneralInfo from './GeneralInfo';
import FlatHouseParametrs from './FlatHouseParametrs';
import FlatSideBar from './Sidebar/FlatSideBar';
import s from './../../style/Flat.module.css'

interface FlatProps {
    flat: IFlat;
}

const Flat:FC<FlatProps> = ({flat}) => {
    return (
        <Centered>
            {
                flat &&
                <>
                    <div className={s.wrapper}>
                        <div className={s.main}>
                            <FlatMain flat={flat}/>

                            <FlatHouseParametrs square={flat.square} year={flat.year} floor={flat.floor}/>

                            <FlatDescription text={flat.description} />

                            <GeneralInfo tenants={flat.tenants} features={flat.features} />
                        </div>
                        
                        <div className={s.sidebar}>
                            <FlatSideBar flat={flat}/> 
                        </div> 
                    </div>

                </>
            }
        </Centered>
    )
}

export default Flat