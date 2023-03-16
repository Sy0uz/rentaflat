import { FC } from 'react'
import Centered from '../Centered/Centered'
import Wrapper from '../Wrapper/Wrapper'
import s from './PageLoader.module.css'

const PageLoader:FC = () => {
    return (
        <Centered>
            <Wrapper className={s.wrapper}>
                <div className={s.loader}/>
            </Wrapper>
        </Centered>
    )
}

export default PageLoader