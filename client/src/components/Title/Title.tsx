import React, {FC} from 'react';

interface ITitleProps {
    text: string
}

const Title: FC<ITitleProps> = ({ text }) => {
    return <h1>{text}</h1>;
}

export default Title;