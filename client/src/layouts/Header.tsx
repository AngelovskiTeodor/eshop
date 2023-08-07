import React, {FC} from 'react';
import Button from '../components/Button';
import Title from '../components/Title';

interface ButtonProps {
    text: string,
    behaviour: Object
}

interface HeaderProps {
    title: string,
    buttons: Array<ButtonProps>
}

const Header: FC<HeaderProps> = ({ title, buttons }) => {
    const renderedButtons = buttons.map(button => (
        <Button text={button.text} behaviour={button.behaviour} />
    ));
    return <>
    <Title text={title} />
    {renderedButtons}
    </>
}

export default Header;