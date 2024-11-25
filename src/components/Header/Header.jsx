import React from 'react';
import css from './Header.module.css';
import logo from '../../assets/img/logo.svg';
import { NavLink } from 'react-router-dom'; // використовуємо NavLink для автоматичного додавання isActive
import clsx from 'clsx';

// Функція для умовного додавання класу
const makeLinksClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive); // повертає активний клас, якщо isActive true
};

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.logocontainer}>
        <img src={logo} alt="TravelTrucks Logo" className={css.logo} />
      </div>
      <nav className={css.navbar}>
        <ul className={css.navlinks}>
          <li>
            <NavLink to="/" className={makeLinksClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" className={makeLinksClass}>
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
