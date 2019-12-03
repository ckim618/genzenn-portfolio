import React from 'react';

const Background = ({ children, bgColor }) => {
    return <div style={{ backgroundColor: bgColor }}>{children}</div>;
};

export default Background;
