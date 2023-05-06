import { FC } from 'react'
import { useInView } from 'react-intersection-observer';
import s from './../../style/FlatImageItem.module.css'

interface FlatImageItemProps {
    backgroundImage: string;
    size?: 'small' | 'default';
}

const FlatImageItem: FC<FlatImageItemProps> = ({ backgroundImage, size }) => {

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <div
            ref={ref}
            className={
                size === 'small'
                    ?
                    [s.imgBox, s.small].join(' ')
                    :
                    s.imgBox}
            style={
                inView
                    ?
                    { backgroundImage: `url(${backgroundImage})` }
                    :
                    { backgroundColor: 'rgb(240,240,240)' }}
        />
    )
}

export default FlatImageItem;