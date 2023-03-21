import { FC } from 'react'
import Home from '../components/Home/Home';
import { useTypedSelector } from '../hooks/useTypedSelector';

const HomePage:FC = () => {

    const {flats, isQuest} = useTypedSelector(state => state.flatsReducer)

    return (
        <Home flats={flats} isQuest={isQuest}/>
    )
}

export default HomePage;