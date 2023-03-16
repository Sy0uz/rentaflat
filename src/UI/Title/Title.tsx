import { CSSProperties, FC, PropsWithChildren } from 'react'
import s from './Title.module.css'

interface TitleProps extends PropsWithChildren {
    size?: "minimal" | "small" | "middle" | "large" |  undefined;
    className?: string;
    style?: CSSProperties;
    marginBottom?: number;
}

const Title:FC<TitleProps> = ({size = undefined, className, style, children, marginBottom = 0}) => {
    
    return (
        <h3 
            className={
                className
                ?
                    [s.title, className].join(' ')
                :
                    s.title
            }
            style={
                {
                    fontSize: size === "minimal" ? "1.1rem" : size === "small" ? "1.3rem" : size === "middle" ? "1.9rem" : size === "large" ? "2.3rem" : "1.9rem",
                    ...style, 
                    marginBottom: `${marginBottom}px`,
                }
            }
        >
            {children}
        </h3>
    )
}

export default Title