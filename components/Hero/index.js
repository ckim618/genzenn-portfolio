import React from 'react';
import css from './hero.scss';

const Hero = () => {
    return (
        <div className={css.hero}>
            <h2 className={css.title}>
                <span className={css.titleSmall}>ux/ui</span> design
            </h2>
            <p className={css.text}>
                Hello, the name’s Genzenn, <br /> Did you hear that? They’ve
                shut down the main reactor. We’ll be destroyed for sure. This is
                madness! We’re doomed! There’ll be no escape for the Princess
                this time.{' '}
            </p>
        </div>
    );
};

export default Hero;
