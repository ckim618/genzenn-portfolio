import React from 'react';
import css from './projectssection.scss';
import Projects from '../Projects';
import Container from '../Container';

const ProjectsSection = () => {
    return (
        <section className={css.projectsContainer}>
            <Container>
                <Projects
                    img="/static/img/wanderful.png"
                    logo="/static/img/wanderful-logo.png"
                    width="590"
                />
                <Projects
                    img="/static/img/food.png"
                    logo="/static/img/food-logo.png"
                    width="365"
                />
                <Projects
                    img="/static/img/let-it-grow.png"
                    logo="/static/img/let-it-grow-logo.png"
                    width="441"
                />
            </Container>
        </section>
    );
};

export default ProjectsSection;
