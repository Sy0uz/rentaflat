import { FC, useState, useEffect } from 'react';
import s from './../../style/FlatImages.module.css';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import FlatImageItem from './FlatImageItem';

interface ImagesProps {
    images: string[];
    size?: 'small' | 'default';
}

const FlatImages: FC<ImagesProps> = ({ images, size = 'default' }) => {

    const [page, setPage] = useState<number>(0);
    const [position, setPosition] = useState<number>(0);

    useEffect(() => {
        setPosition(page * -100);
    }, [page])

    const pageHandler = (pos: number = 0) => {
        if (pos === 1) {
            if (page === images.length - 1) {
                setPage(0);
                return;
            }
            setPage(page + 1);
        }
        else {
            if (page === 0) {
                setPage(images.length - 1);
                return;
            }
            setPage(page - 1);
        }
    }

    return (
        <div className={s.wrapper}>
            <div className={size === 'small' ? [s.window, s.small].join(' ') : s.window}>
                <div className={s.allPages} style={{ transform: `translateX(${position}%)` }}>
                    {
                        images.map(
                            i => <FlatImageItem key={i} size={size} backgroundImage={i} />
                        )
                    }
                </div>
            </div>
            <div className={s.btns}>
                <Button type='primary' onClick={(e) => { e.preventDefault(); pageHandler() }} icon={<LeftOutlined />} />
                <Button type='primary' onClick={(e) => { e.preventDefault(); pageHandler(1) }} icon={<RightOutlined />} />
            </div>
            {
                size === 'default'
                    ?
                    <div className={s.bottom}>
                        {
                            images.map(
                                (i, idx) => <div key={i} className={idx === page ? [s.bottomBtn, s.active].join(' ') : s.bottomBtn} onClick={() => setPage(idx)} />
                            )
                        }
                    </div>
                    :
                    <></>
            }

        </div>
    )
}

export default FlatImages