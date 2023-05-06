import { Button } from 'antd';
import { FC, useEffect, useState } from 'react'
import { IFlat } from '../../types/IFlat'
import MyDivider from '../../UI/MyDivider/MyDivider';
import Pdiv from '../../UI/Pdiv/Pdiv';
import Title from '../../UI/Title/Title';
import Wrapper from '../../UI/Wrapper/Wrapper';
import FlatItem from '../FlatItem';
import s from './../../style/VisitedFlats.module.css'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useInView } from 'react-intersection-observer';

interface VisitedFlatsProps {
    flats: IFlat[];
}

const VisitedFlats: FC<VisitedFlatsProps> = ({ flats }) => {

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: false
    })

    const step: number = 262;

    const [position, setPosition] = useState<number>(0);
    const [page, setPage] = useState<number>(0);

    const pageHandler = (pos: number = 0): void => {
        if (pos === 1) {
            setPage(page + 1);
            setPosition(position - step);
        }
        else {
            setPage(page - 1);
            setPosition(position + step);
        }
    }

    return (
        <Wrapper className={s.wrapper}>
            <Pdiv>
                <Title size='small'>Вы смотрели</Title>
            </Pdiv>
            <MyDivider />
            <Pdiv className={s.flats}>
                <div className={s.window}>
                    <div className={s.allPages} style={{ transform: `translateX(${position}px)` }}>
                        {
                            flats.map(flat => <FlatItem key={flat.id} size='small' flat={flat} />)
                        }
                        <div ref={ref}>
                        </div>
                    </div>
                </div>
            </Pdiv>
            <div className={s.btns}>
                <Button disabled={page === 0} type='primary' onClick={() => pageHandler()} icon={<LeftOutlined />} />
                <Button disabled={inView} type='primary' onClick={() => pageHandler(1)} icon={<RightOutlined />} />
            </div>
        </Wrapper>

    )
}

export default VisitedFlats