import { FC, useState } from 'react'
import { Button } from 'antd';
import s from './../../../style/FlatCommunication.module.css'
import Title from '../../../UI/Title/Title';
import { TelephoneNumberCreator } from '../../../utils/TelephoneNumberCreator';

interface CommunicationProps {
    phone:number;
}

const FlatCommunication:FC<CommunicationProps> = ({phone}) => {

    const [opened, setOpened] = useState<boolean>(false);

    return (
        <div className={s.btns}>
            {
                !opened
                    ?
                    <Button onClick={() => setOpened(true)} type='primary' size='large' block>Показать телефон</Button>
                    :
                    <div>
                        <Title>{TelephoneNumberCreator(phone)}</Title>
                    </div>
            }

            <Button size='large' block>Написать</Button>
        </div>
    )
}

export default FlatCommunication