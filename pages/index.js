import Head from 'next/head';

//Components
import Container from '../components/Container';
import Background from '../components/Background';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';

import '../resources/scss/global.scss';
import Footer from '../components/Footer';

const Home = () => (
    <Layout>
        <Background bgColor="#111">
            <Container>
                <NavBar />
                <Hero />
            </Container>
        </Background>
        <ProjectsSection />
        <Footer />
    </Layout>
);

export default Home;
