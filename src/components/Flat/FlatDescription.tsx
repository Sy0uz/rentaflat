import { FC } from 'react'
import Wrapper from '../../UI/Wrapper/Wrapper';
import NewLineText from '../NewLineText';
import Pdiv from '../../UI/Pdiv/Pdiv';
import Title from '../../UI/Title/Title';
import MyDivider from '../../UI/MyDivider/MyDivider';

interface DescriptionProps {
    text: string;
}

const FlatDescription:FC<DescriptionProps> = ({text}) => {
    return (
        <Wrapper>
            <Pdiv>
                <Title size='small'>Описание</Title>
            </Pdiv>
            <MyDivider/>
            <Pdiv>
                <NewLineText text={text}/>
            </Pdiv>
        </Wrapper>
    )
}

export default FlatDescription