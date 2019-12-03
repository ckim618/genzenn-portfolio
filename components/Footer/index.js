import React from 'react';
import css from './footer.scss';

import Container from '../Container';

const Footer = () => {
    return (
        <footer className={css.footer}>
            <Container>
                <div className={css.inner}>
                    <ul className={css.footerMenu}>
                        <li className={css.footerItem}>genzennparcon.com</li>
                        <li className={css.footerItem}>linkdin</li>
                        <li className={css.footerItem}>dribble</li>
                        <li className={css.footerItem}>instagram</li>
                    </ul>
                    <div className={css.logo}>g</div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
