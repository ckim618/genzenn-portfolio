import React, { useState } from 'react';
import cc from 'classcat';
import css from './navbar.scss';

const NavBar = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <nav className={css.nav}>
            <div className={css.inner}>
                <div className={css.logo}>g</div>
                <ul className={css.menu}>
                    <li className={css.menuItem}>projects</li>
                    <li className={css.menuItem}>about</li>
                    <li className={css.menuItem}>resume</li>
                    <li className={css.menuItem}>contact</li>
                </ul>
                <div
                    className={cc([
                        css.hamburger,
                        { [css.isActive]: isActive },
                    ])}
                    onClick={() => {
                        setIsActive(!isActive);
                    }}
                >
                    <div className={css.hamburgerInner}></div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={cc([css.mobileMenu, { [css.isActive]: isActive }])}>
                <ul className={css.mobileMenuInner}>
                    <li>projects</li>
                    <li>about</li>
                    <li>resume</li>
                    <li>contact</li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
