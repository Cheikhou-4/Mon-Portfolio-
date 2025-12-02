import { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Facebook, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-heading font-bold text-primary">
                    Portfolio<span className="text-light">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-light/80 hover:text-primary transition-colors font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center space-x-4 ml-4 border-l border-light/10 pl-4">
                        <a href="https://www.linkedin.com/in/cheikhou-niang-22563a30b" target="_blank" rel="noopener noreferrer" className="text-light/60 hover:text-primary transition-colors" title="LinkedIn"><Linkedin size={20} /></a>
                        <a href="https://www.facebook.com/cheikhou.niang.3975" target="_blank" rel="noopener noreferrer" className="text-light/60 hover:text-primary transition-colors" title="Facebook"><Facebook size={20} /></a>
                        <a href="https://wa.me/221785016571" target="_blank" rel="noopener noreferrer" className="text-light/60 hover:text-primary transition-colors" title="WhatsApp"><MessageCircle size={20} /></a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-light hover:text-primary transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark/95 backdrop-blur-lg border-b border-light/10 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-xl font-medium text-light hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex items-center space-x-6 pt-6 border-t border-light/10">
                                <a href="https://www.linkedin.com/in/cheikhou-niang-22563a30b" target="_blank" rel="noopener noreferrer" className="text-light/60 hover:text-primary transition-colors" title="LinkedIn"><Linkedin size={24} /></a>
                                <a href="https://www.facebook.com/cheikhou.niang.3975" target="_blank" rel="noopener noreferrer" className="text-light/60 hover:text-primary transition-colors" title="Facebook"><Facebook size={24} /></a>
                                <a href="https://wa.me/221785016571" target="_blank" rel="noopener noreferrer" className="text-light/60 hover:text-primary transition-colors" title="WhatsApp"><MessageCircle size={24} /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
