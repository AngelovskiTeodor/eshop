import React, {FC} from 'react';

interface IButtonProps {
    text: string,
    behaviour: Object
}

const Button: FC<IButtonProps> = ({ text, behaviour }) => {
    return <input type='button' onClick={behaviour} value={text}/>;
}

export default Button;