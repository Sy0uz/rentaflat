import { FC } from 'react'
import { IFlat } from '../../../types/IFlat'
import MyDivider from '../../../UI/MyDivider/MyDivider'
import Pdiv from '../../../UI/Pdiv/Pdiv'
import Wrapper from '../../../UI/Wrapper/Wrapper'
import s from './../../../style/FlatSideBar.module.css'
import FlatAgency from './FlatAgency'
import FlatCommunication from './FlatCommunication'
import FlatPrice from './FlatPrice'
import FlatPriceDescription from './FlatPriceDescription'
import FlatProprietor from './FlatProprietor'
import FlatRealtor from './FlatRealtor'

interface SideBarProps {
    flat: IFlat;
}

const FlatSideBar:FC<SideBarProps> = ({flat}) => {
    return (
        <Wrapper className={s.wrapper}>
            <Pdiv>
                <FlatPrice 
                    price={flat.price} 
                    communalPayments={flat.communalPayments} 
                />
            </Pdiv>
            
            <MyDivider/>

            <Pdiv>
                <FlatPriceDescription className={s.priceDesc} deposit={flat.deposit} commision={flat.commission} prepayment={flat.prepaymentCount}/>
                <FlatCommunication phone={flat.phone}/>
            </Pdiv>

            {
                flat.owner.agency
                    ? 
                    <>
                        <MyDivider/>
                        <FlatAgency agency={flat.owner.agency} />
                    </>
                    : <></>
            }

            {
                flat.owner.realtor
                    ?
                    <>
                        <MyDivider/>
                        <FlatRealtor realtor={flat.owner.realtor}/>
                    </>
                    : <></>
            }

            {
                flat.owner.proprietor
                    ?
                    <>
                        <MyDivider/>
                        <FlatProprietor proprietor={flat.owner.proprietor}/>
                    </>
                    : <></>
            }
        </Wrapper>
    )
}

export default FlatSideBar