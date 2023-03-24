import { FC, useState } from 'react'
import { Button } from 'antd';
import s from './../../../style/FlatCommunication.module.css'
import Title from '../../../UI/Title/Title';
import { TelephoneNumberCreator } from '../../../utils/TelephoneNumberCreator';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

interface CommunicationProps {
    phone:number;
}

const FlatCommunication:FC<CommunicationProps> = ({phone}) => {

    const [opened, setOpened] = useState<boolean>(false);

    const {isAuth} = useTypedSelector(state => state.authReducer);

    return (
        <div className={s.btns}>
            {
                !opened
                    ?
                    <Button onClick={() => setOpened(true)} type='primary' size='large' disabled={!isAuth} block>{isAuth ? 'Показать телефон' : 'Авторизуйтесь'}</Button>
                    :
                    <div className={s.phone}>
                        <div className={s.phoneNumber}>{TelephoneNumberCreator(phone)}</div>
                    </div>
            }

            <Button size='large' block>Написать</Button>
        </div>
    )
}

export default FlatCommunication