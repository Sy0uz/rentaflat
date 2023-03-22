import { FC } from 'react'
import s from './PageLoader.module.css'

const Loader:FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom:'50px'}}>
            <div className={s.loader}/>
        </div>
    )
}

export default Loader