import React from 'react';
import css from './container.scss';

const Container = ({ children }) => {
    return <div className={css.container}>{children}</div>;
};

export default Container;
