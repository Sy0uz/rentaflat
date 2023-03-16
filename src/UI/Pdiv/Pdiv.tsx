import {FC, CSSProperties, PropsWithChildren} from 'react';

interface PdivProps extends PropsWithChildren{
    padding?: number;
    className?: string;
    style?: CSSProperties;
}

const Pdiv:FC<PdivProps> = ({padding = 16, className, style, children}) => {
    return (
        <div 
            style={style ? {...style, padding: `${padding}px`} : {padding: `${padding}px`}} 
            className={className ? className : ''}
        >
            {children}
        </div>
    )
}

export default Pdiv;