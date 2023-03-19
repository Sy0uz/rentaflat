import { FC } from 'react'
import s from './../../style/FlatImagePreview.module.css'
import FlatImages from './FlatImages';

interface ImagePreviewProps {
    images: string[];
}

const FlatImagePreview:FC<ImagePreviewProps> = ({images}) => {

    return (
        <div className={s.wrapper}>
            <FlatImages images={images} size='small'/>
            <div className={s.miniImages}>
                {
                    images.map((i, idx) => idx < 4 && idx > 0 ? <div style={{backgroundImage:`url(${i})`}} className={s.image}/> : <></>)
                }
            </div>
        </div>
    )
}

export default FlatImagePreview