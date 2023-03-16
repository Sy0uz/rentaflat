import { FC } from 'react'

interface NewLineProps {
    text: string;
}

const NewLineText:FC<NewLineProps> = ({text}) => {

    const newText = text.split('\n').map((str, idx) => str ? <p key={idx}>{str}</p> : <br key={idx}/>);

    return (
        <div>
            {newText}
        </div>
    )
}

export default NewLineText