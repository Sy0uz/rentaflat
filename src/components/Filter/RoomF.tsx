import { FC, useMemo, useState } from 'react'
import Dropdown from '../Dropdown';
import FilterBtn from './FilterBtn';
import RoomBtn from './RoomBtn';
import s from './../../style/RoomF.module.css'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const RoomF: FC = () => {

    const [opened, setOpened] = useState<boolean>(false);

    const {rooms} = useTypedSelector(state => state.filterReducer)
    const {setRooms} = useActions()

    const possRooms:number[] = [1,2,3,4];

    const BtnText:string = useMemo(() => {
        if (rooms.length === 1) 
            return `${rooms[0]} - комнатную`;
        else if (rooms.length)
            return `${rooms.join(', ')} комн.`;
        else return 'Комнат';
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
            {
                possRooms.map(room => <RoomBtn key={room} onClick={(active: boolean) => roomBtnHandler(room, active)} active={rooms.find(i => i === room) ? true : false}>{room}</RoomBtn>)
            }
        </Dropdown>
    )
}

export default RoomF