import { FC } from 'react'
import s from './../style/HomeHeader.module.css'
import Title from '../UI/Title/Title'

const HomeHeader:FC = () => {
    return (
        <Title size='large' className={s.title}>Аренда квартир в Санкт-Петербурге</Title>
    )
}

export default HomeHeader