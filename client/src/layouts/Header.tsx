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
    return (<>
    <Title text={title} />
    {renderedButtons}
    </>)
}

export default Header;