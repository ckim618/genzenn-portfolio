import React from 'react';
import css from './projects.scss';

export const Projects = ({ img, logo, width }) => {
    return (
        <div
            className={css.projects}
            style={{ backgroundImage: `url(${img})` }}
        >
            <img
                style={{ maxWidth: `${width}px` }}
                className={css.logo}
                src={logo}
                alt=""
            />
        </div>
    );
};

export default Projects;
