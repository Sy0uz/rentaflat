import { FC } from 'react'
import { IFlat } from '../../types/IFlat'
import Centered from '../../UI/Centered/Centered'
import Title from '../../UI/Title/Title'
import s from './../../style/Home.module.css'
import Filter from '../Filter/Filter'
import FindedFlats from './FindedFlats'

interface HomeProps {
    flats: IFlat[];
    isQuest: boolean;
}

const Home: FC<HomeProps> = ({ flats, isQuest }) => {
    return (
        <div>
            <div className={s.image}>
                <Centered className={s.content}>
                    <Title size='large' className={s.title}>Аренда квартир в Санкт-Петербурге</Title>
                    <Filter />
                </Centered>
            </div>
            {
                isQuest && flats.length
                    ?
                    <Centered>
                        <FindedFlats flats={flats} />
                    </Centered>
                    :
                    isQuest
                        ?
                        <Centered className={s.notFoundBox}>
                            <Title>
                                Объявлений не найдено!
                            </Title>
                        </Centered>
                        :
                        <></>
            }

        </div>
    )
}

export default Home