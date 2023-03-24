import { Button, Input, Modal } from 'antd';
import { FC, useState, useEffect } from 'react'
import { useActions } from '../hooks/useActions';
import Title from '../UI/Title/Title';
import s from './../style/AuthModal.module.css'

interface AuthModalProps {
    opened: boolean;
    isLoading: boolean;
    error: string;
    setOpened: (bool: boolean) => void;
    submit: (username: string, password: string) => void;

}

const AuthModal:FC<AuthModalProps> = ({opened, setOpened, error, isLoading, submit}) => {

    const {setIsAuthError} = useActions();

    const [values, setValues] = useState({
        username: '',
        passwrod: ''
    })

    const [disabled, setDisabled] = useState<boolean>(false);

    const onSubmit = () => {
        submit(values.username, values.passwrod);
    }

    useEffect(() => {
        setValues({
            username: '',
            passwrod: ''
        })
    }, [opened])

    useEffect(() => {
        setIsAuthError('');
        if (!values.passwrod || !values.username)
            setDisabled(true);
        else 
            setDisabled(false);
    }, [values])

    return (
        <Modal
            className={s.wrapper}
            title={<Title size='small'>Авторизация</Title>}
            open={opened}
            centered
            onOk={onSubmit}
            onCancel={() => setOpened(false)}
            footer={
                <div>
                    <Button loading={isLoading} disabled={disabled} type='primary' onClick={onSubmit}>
                        Войти
                    </Button>
                </div>
            }
        >
            <div className={s.inputs}>
                <Input placeholder='Логин...' value={values.username} onChange={(e) => setValues({...values, username: e.target.value})}/>
                <Input.Password placeholder='Пароль...' value={values.passwrod} onChange={(e) => setValues({...values, passwrod: e.target.value})}/>      
            </div>
            {
                error
                    ? <div className={s.error}>{error}</div>
                    : <></>
            }
        </Modal>
    )
}

export default AuthModal