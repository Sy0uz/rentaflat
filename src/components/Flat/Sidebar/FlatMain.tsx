import {FC} from 'react'
import { IFlat } from '../../../types/IFlat'
import Pdiv from '../../../UI/Pdiv/Pdiv';
import Title from '../../../UI/Title/Title';
import Wrapper from '../../../UI/Wrapper/Wrapper';
import { FlatAddressCreator } from '../../../utils/FlatAddressCreator';
import { FlatTitleCreator } from '../../../utils/FlatTitleCreator';
import FlatImages from '../FlatImages';
import s from './../../../style/FlatMain.module.css'
import MyDivider from '../../../UI/MyDivider/MyDivider';
import { DateStringToString } from '../../../utils/DateToString';

interface FlatMainProps {
    flat: IFlat;
}

const FlatMain:FC<FlatMainProps> = ({flat}) => {
    return (
        <Wrapper>
            <Pdiv className={s.titleWrapper}>
                <div>
                    <Title>
                        {FlatTitleCreator(flat.roomAmount, flat.square.general)}
                    </Title>
                    
                    <div className={s.address}>
                        {FlatAddressCreator(flat.address)}
                    </div>                    
                </div>
                <div className={s.time}>
                    {DateStringToString(flat.creationDate)}
                </div>
            </Pdiv>

            <MyDivider/>

            <Pdiv>
                <FlatImages images={flat.images}/>
            </Pdiv>                

            {
                flat.title
                ?
                <>
                    <MyDivider/>
                    <Pdiv>
                        <Title size='large'>
                            {flat.title}
                        </Title>
                    </Pdiv>                
                </>

                :
                <></>            
            }

        </Wrapper>
    )
}

export default FlatMain