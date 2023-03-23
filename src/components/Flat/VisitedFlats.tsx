import { Button } from 'antd';
import { FC, useState } from 'react'
import { IFlat } from '../../types/IFlat'
import MyDivider from '../../UI/MyDivider/MyDivider';
import Pdiv from '../../UI/Pdiv/Pdiv';
import Title from '../../UI/Title/Title';
import Wrapper from '../../UI/Wrapper/Wrapper';
import FlatItem from '../FlatItem';
import s from './../../style/VisitedFlats.module.css'
import { LeftOutlined , RightOutlined } from '@ant-design/icons';

interface VisitedFlatsProps {
    flats: IFlat[];
}

const VisitedFlats: FC<VisitedFlatsProps> = ({ flats }) => {

    const step:number = 262;

    const [position, setPosition] = useState<number>(0);
    const [page, setPage] = useState<number>(0);

    const pageHandler = (pos:number = 0) => {
        if (pos === 1) {
            if (page === flats.length-1) return;
            setPage(page + 1);
            setPosition(position - step);
        }
        else {
            if (page === 0) return;
            setPage(page - 1);
            setPosition(position + step);
        }
    }

    return (
        <Wrapper className={s.wrapper}>
            <Pdiv>
                <Title size='small'>Вы смотрели</Title>
            </Pdiv>
            <MyDivider/>
            <Pdiv className={s.flats}>
                <div className={s.window}>
                    <div className={s.allPages} style={{transform:`translateX(${position}px)`}}>
                        {
                            flats.map(flat => <FlatItem key={flat.id} size='small' flat={flat} />)
                        }
                    </div>                    
                </div>
            </Pdiv>
            <div className={s.btns}>
                <Button type='primary' onClick={() => pageHandler()} icon={<LeftOutlined />} />
                <Button type='primary' onClick={() => pageHandler(1)} icon={<RightOutlined />} />
            </div>
        </Wrapper>

    )
}

export default VisitedFlats