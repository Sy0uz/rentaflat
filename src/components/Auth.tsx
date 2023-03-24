import { FC, useState, useEffect } from 'react'
import { Button } from 'antd'
import s from './../style/Auth.module.css'
import { useTypedSelector } from '../hooks/useTypedSelector'
import AuthModal from './AuthModal'
import { useActions } from '../hooks/useActions'
import Dropdown from './Dropdown'
import {CaretDownOutlined} from '@ant-design/icons'

const Auth:FC = () => {

    const {isAuth, error, isLoading, username} = useTypedSelector(state => state.authReducer);
    const [opened, setOpened] = useState<boolean>(false);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const {authUser, logoutUser} = useActions();

    const logoutHandler = () => {
        logoutUser();
        setDropdownOpen(false);
    }

    const authHandler = () => {
        setOpened(true);
    }

    const onSubmit = (username: string, password: string) => {
        authUser(username, password);
    }

    useEffect(() => {
        if (isAuth)
            setOpened(false);
    }, [isAuth])

    return (
        <>
            {
                isAuth
                ? <Dropdown opened={dropdownOpen} setOpened={setDropdownOpen} button={
                    <Button type='text' icon={<CaretDownOutlined className={dropdownOpen ? [s.icon, s.active].join(' ') : s.icon}/>} size='large' className={s.userBtn}>{username}</Button>
                }>
                    <div className={s.dropdownMenu}>
                        <Button type='text' block className={s.authBtn} onClick={logoutHandler}>Выход</Button>
                    </div>
                </Dropdown>
                : <Button type='primary' className={s.authBtn} onClick={authHandler}>Авторизация</Button>
            }
            <AuthModal opened={opened} setOpened={setOpened} error={error} submit={onSubmit} isLoading={isLoading}/>
        </>
    )
}

export default Auth