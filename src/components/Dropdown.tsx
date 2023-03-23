import { FC, useEffect, PropsWithChildren, ReactNode, ReactElement} from 'react'
import s from './../style/Dropdown.module.css'

interface DropdownProps extends PropsWithChildren {
    opened: boolean;
    setOpened: (bool: boolean) => void;
    className?: string;
    button: ReactNode | ReactElement | null;
}

const Dropdown:FC<DropdownProps> = ({opened, setOpened, button, className, children}) => {

    const clickHandler = (e:React.MouseEvent<HTMLElement>):void => {
        e.stopPropagation();
        setOpened(!opened);
    }
    const clearFocus = ():void => setOpened(false);

    useEffect(() => {
        document.addEventListener('click', clearFocus);

        return () => {
            document.removeEventListener('click', clearFocus);
        }
    }, [opened])

    return (
            <div onClick={clickHandler} className={`${s.wrapper} ${className}`}>
                {button}
                <div onClick={(e) => e.stopPropagation()} className={opened ? [s.dropdown, s.active].join(' ') : s.dropdown}>
                    {children}
                </div>                  
            </div>

    )
}

export default Dropdown