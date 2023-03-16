import {FC} from 'react';
import s from './MyDivider.module.css';

interface MyDividerProps {
    className?: string;
    marginY?: number;
}

const MyDivider:FC<MyDividerProps> = ({className, marginY}) => {
    return (
        <div style={marginY ? {margin:`${marginY}px 0`} : {}} className={className ? [s.divider, className].join(' ') : s.divider }/>
    )
}

export default MyDivider