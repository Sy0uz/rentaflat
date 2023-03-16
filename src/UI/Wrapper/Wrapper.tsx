import { CSSProperties, FC, PropsWithChildren } from 'react'
import s from './Wrapper.module.css'

interface WrapperProps extends PropsWithChildren {
    className?: string;
    style?: CSSProperties;
}

const Wrapper:FC<WrapperProps> = ({className, children, style}) => {
    return (
        <div style={style} className={className ? [s.wrapper, className].join(' ') : s.wrapper}>
            {children}
        </div>
    )
}

export default Wrapper