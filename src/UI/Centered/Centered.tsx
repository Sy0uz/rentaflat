import {FC, PropsWithChildren} from 'react'
import s from './Centered.module.css'

interface CenteredProps extends PropsWithChildren{
    className?: string;
}

const Centered:FC<CenteredProps> = ({className, children}) => {
    return (
        <div className={className ? [s.wrapper, className].join(' ') : s.wrapper}>
            {children}
        </div>
    )
}

export default Centered