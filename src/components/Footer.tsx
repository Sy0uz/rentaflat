import { FC } from 'react'
import Centered from '../UI/Centered/Centered'
import s from './../style/Footer.module.css'

const Footer:FC = () => {
    return (
        <footer className={s.wrapper}>
            <Centered className={s.content}>
                <div>Made by Syouz</div>
            </Centered>
        </footer>
    )
}

export default Footer