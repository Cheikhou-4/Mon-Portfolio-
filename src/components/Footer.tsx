import { Linkedin, Facebook, Heart, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark border-t border-white/10 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
                    {/* Left: Logo and Copyright */}
                    <div className="text-center md:text-left">
                        <a href="#" className="text-2xl font-heading font-bold text-primary mb-2 inline-block">
                            Cheikhou Niang<span className="text-light">.</span>
                        </a>
                        <p className="text-light/60 text-sm">
                            © {new Date().getFullYear()} Tous droits réservés.
                        </p>
                    </div>

                    {/* Center: Social Media Icons */}
                    <div className="flex items-center justify-center gap-8">
                        <a
                            href="https://www.facebook.com/cheikhou.niang.3975"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light/60 hover:text-primary transition-colors duration-300 transform hover:scale-110"
                            title="Facebook"
                            aria-label="Facebook"
                        >
                            <Facebook size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/cheikhou-niang-22563a30b"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light/60 hover:text-primary transition-colors duration-300 transform hover:scale-110"
                            title="LinkedIn"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="https://wa.me/221785016571"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light/60 hover:text-primary transition-colors duration-300 transform hover:scale-110"
                            title="WhatsApp"
                            aria-label="WhatsApp"
                        >
                            <MessageCircle size={24} />
                        </a>
                    </div>

                    {/* Right: Empty space or additional info */}
                    <div className="text-center md:text-right">
                        <p className="text-light/60 text-sm">
                            Basé à Dakar, Sénégal
                        </p>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-sm text-light/40 flex items-center justify-center gap-1">
                    Fait avec <Heart size={14} className="text-red-500 fill-red-500" /> par Cheikhou Niang
                </div>
            </div>
        </footer>
    );
};

export default Footer;
