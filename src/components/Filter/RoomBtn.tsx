import { Button } from 'antd'
import { FC, PropsWithChildren } from 'react'

interface RoomBtnProps extends PropsWithChildren {
    active: boolean;
    onClick: (active:boolean) => void;
}

const RoomBtn:FC<RoomBtnProps> = ({active, children, onClick}) => {
    return (
        <Button
            type={active ? 'primary' : 'default'}
            size="large"
            onClick={() => onClick(active)}
        >
            {children}
        </Button>
    )
}

export default RoomBtn