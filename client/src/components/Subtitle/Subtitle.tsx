import {FC} from 'react';

interface ISubtitleProps {
    text: string
}

const Subtitle: FC<ISubtitleProps> = ({ text }) => {
    return (<h2>{text}</h2>);
}

export default Subtitle;