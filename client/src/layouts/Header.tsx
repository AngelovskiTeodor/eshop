import React, {FC} from 'react';
import Button from '../components/Button/Button';
import Title from '../components/Title/Title';
import IButtonProps from '../types/IButtonProps';

interface IHeaderProps {
    title: string,
    buttons: Array<IButtonProps>
}

const Header: FC<IHeaderProps> = ({ title, buttons }) => {
    const renderedButtons = buttons.map(button => (
        <Button text={button.text} behaviour={button.behaviour} />
    ));
    return (<div className='header'>
        <Title text={title} />
        <div className='buttons-container'>{renderedButtons}</div>
    </div>);
}

export default Header;