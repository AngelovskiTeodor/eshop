import {FC} from 'react';
import IButtonProps from '../../types/IButtonProps';

const Button: FC<IButtonProps> = ({ text, behaviour }) => {
    return (<input type='button' onClick={behaviour} value={text}/>);
}

export default Button;