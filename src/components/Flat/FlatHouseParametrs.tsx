import { FC } from 'react'
import { IFloor, ISquare } from '../../types/IFlat'
import Pdiv from '../../UI/Pdiv/Pdiv';
import Wrapper from '../../UI/Wrapper/Wrapper';
import s from './../../style/FlatHouseParametrs.module.css'

interface SquareProps {
    square: ISquare;
    year:number | undefined;
    floor: IFloor;
}

const FlatHouseParametrs:FC<SquareProps> = ({square, year, floor}) => {
    return (
        <Wrapper>
            <Pdiv className={s.wrapper}>
                {
                    square.general
                        ?
                        <div className={s.element}>
                            <div>{square.general}м²</div>
                            <div>Общая</div>
                        </div>
                        : <></>
                }
                {
                    square.living
                        ?
                        <div className={s.element}>
                            <div>{square.living}м²</div>
                            <div>Жилая</div>
                        </div>
                        : <></>
                }
                {
                    square.kitchen
                        ?
                        <div className={s.element}>
                            <div>{square.kitchen}м²</div>
                            <div>Кухня</div>
                        </div>
                        : <></>
                }
                {
                    square.rooms?.length
                        ?
                        <div className={s.element}>
                            <div className={s.rooms}>{square.rooms.map((room, idx) => <span key={idx}>{room}м²</span>)}</div>
                            <div>Комнаты</div>
                        </div>
                        : <></>
                }
                {
                    floor
                        ?
                        <div className={s.element}>
                            <div>{floor.current} из {floor.total}</div>
                            <div>Этаж</div>
                        </div>
                        : <></>
                }
                {
                    year
                        ?
                        <div className={s.element}>
                            <div>{year}</div>
                            <div>Построен</div>
                        </div>
                        : <></>
                }
            </Pdiv>
        </Wrapper>
    )
}

export default FlatHouseParametrs