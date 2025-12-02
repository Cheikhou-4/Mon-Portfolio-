import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="bg-dark min-h-screen text-light font-sans selection:bg-primary/30 selection:text-primary">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Certifications />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
