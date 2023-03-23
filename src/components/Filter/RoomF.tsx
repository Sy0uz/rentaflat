import { FC, useEffect, useState } from 'react'
import Dropdown from '../Dropdown';
import FilterBtn from './FilterBtn';
import RoomBtn from './RoomBtn';
import s from './../../style/RoomF.module.css'

interface RoomFProps {
    rooms: number[];
    displayedRooms: number[];
    setRooms: (rooms:number[]) => void;
}

const RoomF:FC<RoomFProps> = ({rooms, displayedRooms, setRooms}) => {

    const [opened, setOpened] = useState<boolean>(false);
    const [BtnText, setBtnText] = useState<string>('Комнат');

    useEffect(() => {
        if (rooms.length === 1)
            setBtnText(`${rooms[0]} - комнатную`);
        else if (rooms.length)
            setBtnText(`${rooms.join(', ')} комн.`)
        else 
            setBtnText('Комнат')
    }, [rooms])

    const roomBtnHandler = (room:number, active:boolean):void => {
        if (active) 
            setRooms(rooms.filter(i => i !== room));
        else 
            setRooms([...rooms, room].sort((a,b) => a - b));
    }

    return (
        <Dropdown opened={opened} setOpened={setOpened} button={
            <FilterBtn className={s.dropdownBtn} opened={opened} minWidth={150}>{BtnText}</FilterBtn>
        }>
            <div className={s.btns}>
                {
                    displayedRooms.map(room => <RoomBtn key={room} onClick={(active: boolean) => roomBtnHandler(room, active)} active={rooms.find(i => i === room) ? true : false}>{room}</RoomBtn>)
                }                
            </div>
        </Dropdown>
    )
}

export default RoomF