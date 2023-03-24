import { FC } from 'react'
import {HomeOutlined} from '@ant-design/icons'
import Centered from '../UI/Centered/Centered'
import Title from '../UI/Title/Title'
import s from './../style/Navbar.module.css'
import { Link } from 'react-router-dom'
import { RoutePath } from '../router'
import Auth from './Auth'

const Navbar:FC = () => {

    return (
        <header className={s.wrapper}>
            <Centered className={s.header}>
                <Link to={RoutePath.HOME} className={s.logo}>
                    <HomeOutlined className={s.icon} />
                    <Title>RENT A FLAT</Title>
                </Link>
                <nav className={s.nav}>
                    <Link to={RoutePath.AGENCIES} className={s.agencies}>Агенства</Link>
                    <Auth/>
                </nav>
            </Centered>
        </header>
    )
}

export default Navbar