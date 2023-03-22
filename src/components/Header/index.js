import React from 'react';
import './styles.css'
import Sobre from '../../objects/Sobre';
import Menu from '../../objects/Menu';

const Header = () => (
    <header className="header">
        <Sobre />
        <Menu />
    </header>
);

export default Header