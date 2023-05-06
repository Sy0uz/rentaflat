import { FC } from 'react'
import { Features, Tenants } from '../../types/IFlat'
import MyDivider from '../../UI/MyDivider/MyDivider';
import Pdiv from '../../UI/Pdiv/Pdiv';
import Title from '../../UI/Title/Title';
import Wrapper from '../../UI/Wrapper/Wrapper';
import s from './../../style/GeneralInfo.module.css'
import GeneralItem from './GeneralItem';

interface GeneralInfoProps {
    tenants: Tenants[];
    features: Features[];
}

const GeneralInfo: FC<GeneralInfoProps> = ({ tenants, features }) => {
    return (
        <Wrapper className={s.wrapper}>
            <Pdiv>
                <Title size='small'>Общая информация</Title>
            </Pdiv>
            <MyDivider />
            {
                tenants.length
                    ?
                    <div className={s.tenants}>
                        {
                            tenants.map((item) => <GeneralItem item={item} key={item} />)
                        }
                    </div>
                    :
                    <></>
            }

            {
                tenants.length && features.length
                    ? <MyDivider />
                    : <></>
            }

            {
                features.length
                    ?
                    <div className={s.features}>
                        {
                            features.map((item) => <GeneralItem item={item} key={item} />)
                        }
                    </div>
                    :
                    <></>
            }

        </Wrapper>
    )
}

export default GeneralInfo