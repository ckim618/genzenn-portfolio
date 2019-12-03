import React from 'react';
import css from './layout.scss';

const Layout = ({ children }) => {
    return <div className={css.layout}>{children}</div>;
};

export default Layout;
