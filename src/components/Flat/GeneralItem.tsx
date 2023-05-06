import { FC } from 'react'
import { Features, Tenants } from '../../types/IFlat'
import s from './../../style/GeneralItem.module.css'

interface GeneralItemProps {
    item: Features | Tenants;
}

const GeneralItem: FC<GeneralItemProps> = ({ item }) => {
    switch (item) {
        case Features.FRIDGE:
            return <div className={[s.icon, s.fridge].join(' ')}>Холодильник</div>

        case Features.FURNITURE_KITCHEN:
            return <div className={[s.icon, s.furniture_kitchen].join(' ')}>Мебель на кухне</div>

        case Features.INTERNET:
            return <div className={[s.icon, s.internet].join(' ')}>Интернет</div>

        case Features.WASHING_MACHINE:
            return <div className={[s.icon, s.washing_machine].join(' ')}>Стиральная машина</div>

        case Features.CONDITIONER:
            return <div className={[s.icon, s.conditioner].join(' ')}>Кондиционер</div>

        case Features.BATH:
            return <div className={[s.icon, s.bath].join(' ')}>Ванна</div>

        case Features.FURNITURE_ROOMS:
            return <div className={[s.icon, s.furniture_rooms].join(' ')}>Мебель в комнатах</div>

        case Features.TV:
            return <div className={[s.icon, s.tv].join(' ')}>Телевизор</div>

        case Features.SHOWER:
            return <div className={[s.icon, s.shower].join(' ')}>Душ</div>

        case Features.DISHWASHER:
            return <div className={[s.icon, s.dishwasher].join(' ')}>Посудомоечная машина</div>

        case Tenants.CHILDREN:
            return <div className={[s.icon, s.children].join(' ')}>Можно с детьми</div>

        case Tenants.ANIMALS:
            return <div className={[s.icon, s.animals].join(' ')}>Можно с животными</div>

        default:
            return <></>
    }
}

export default GeneralItem