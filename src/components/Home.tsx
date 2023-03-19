import { FC } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Centered from '../UI/Centered/Centered'
import s from './../style/Home.module.css'
import Filter from './Filter/Filter'
import FlatsList from './FlatsList'
import HomeHeader from './HomeHeader'

const Home: FC = () => {

    const {flats} = useTypedSelector(state => state.flatsReducer);

    return (
        <div>
            <div className={s.image}>
                <Centered className={s.content}>
                    <HomeHeader/>
                    <Filter/>
                </Centered>
            </div>

            <Centered>
                <FlatsList flats={flats}/>
            </Centered>
        </div>
    )
}

export default Home