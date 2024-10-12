import React from 'react';
import css from './Header.module.css';
import logo from '../../assets/img/Logo.svg';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.logocontainer}>
        <img src={logo} alt="TravelTrucks Logo" className={css.logo} />
      </div>
      <nav className={css.navbar}>
        <ul className={css.navlinks}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/catalog">Catalog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
