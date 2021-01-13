import React from 'react';
import logo from './../../assets/logo.png';
import styles from './Header.module.scss';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <div className={styles.header}>
        <div className={styles.logo}><img src={logo} alt=""/></div>
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}><NavLink to="/profile" activeClassName={styles.active} className={styles.link}>Profile</NavLink></li>
                <li className={styles.item}><NavLink to="/dialogs" activeClassName={styles.active} className={styles.link}>Dialogs</NavLink></li>
                <li className={styles.item}><a href="#" className={styles.link}>Link #3</a></li>
                <li className={styles.item}><a href="#" className={styles.link}>Link #4</a></li>
                <li className={styles.item}><a href="#" className={styles.link}>Link #5</a></li>
            </ul>
        </nav>
        <a href="tel:+996705552400" className={styles.tel}>+996 (705) 55-24-00</a>
    </div>
)

export default Header;