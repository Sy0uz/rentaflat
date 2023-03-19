import { FC, PropsWithChildren } from 'react'
import s from './../../style/FilterBtn.module.css'
import { CaretDownOutlined } from '@ant-design/icons'

interface FilterBtnProps extends PropsWithChildren {
    opened: boolean;
    className?: string;
    minWidth?: number;
}

const FilterBtn:FC<FilterBtnProps> = ({opened, minWidth, className, children}) => {

    return (
        <div style={{minWidth}} className={opened ? [s.button, s.active, className].join(' ') : [s.button, className].join(' ')}>
            {children}
            <CaretDownOutlined className={opened ? [s.icon, s.active].join(' ') : s.icon}/>
        </div>
    )
}

export default FilterBtn