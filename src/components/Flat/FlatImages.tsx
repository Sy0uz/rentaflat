import { FC, useState, useMemo } from 'react';
import s from './../../style/FlatImages.module.css';
import { Button } from 'antd';
import { LeftOutlined , RightOutlined } from '@ant-design/icons';

interface ImagesProps {
    images: string[];
}

const FlatImages:FC<ImagesProps> = ({images}) => {

    const [page, setPage] = useState<number>(0);

    const position:number = useMemo(() => {
        return page * -100;
    }, [page])

    const pageHandler = (pos:number = 0) => {
        if (pos === 1) {
            if (page === images.length - 1) {
                setPage(0);
                return;
            }
            setPage(page + 1);
        }
        else {
            if (page === 0){
                setPage(images.length - 1);
                return;
            }
            setPage(page - 1);
        }
    }

    return (
        <div className={s.wrapper}>
            <div className={s.window}>
                <div className={s.allPages} style={{transform:`translateX(${position}%)`}}>
                    {
                        images.map(
                            i => <div key={i} className={s.imgBox} style={{backgroundImage: `url(${i})`}}/>
                        )
                    }
                </div>
            </div>
            <div className={s.btns}>
                <Button type='primary' onClick={() => pageHandler()} icon={<LeftOutlined/>}/>
                <Button type='primary' onClick={() => pageHandler(1)} icon={<RightOutlined/>}/>
            </div>
            <div className={s.bottom}>
                {
                    images.map(
                        (i,idx) => <div key={i} className={idx === page ? [s.bottomBtn, s.active].join(' ') :s.bottomBtn} onClick={() => setPage(idx)}/>
                    )
                }
            </div>
        </div>
    )
}

export default FlatImages