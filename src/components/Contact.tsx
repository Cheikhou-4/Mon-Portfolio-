import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/3 translate-x-1/3" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Contactez-moi</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Discutons de votre projet</h3>
                        <p className="text-light/70 mb-8 leading-relaxed">
                            Je suis toujours ouvert à de nouvelles opportunités, collaborations ou simplement pour échanger sur le digital et l'IA. N'hésitez pas à me contacter !
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-light/60">Email</p>
                                    <a href="mailto:cheikhouniang395@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">
                                        cheikhouniang395@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-light/60">Téléphone</p>
                                    <a href="tel:+221785016571" className="text-lg font-medium hover:text-primary transition-colors">
                                        +221 78 501 65 71
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-light/60">Localisation</p>
                                    <p className="text-lg font-medium">Dakar, Sénégal</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white/5 p-8 rounded-3xl border border-white/10"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-light/80 mb-2">Nom</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-light focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-light/80 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-light focus:outline-none focus:border-primary transition-colors"
                                    placeholder="votre@email.com"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="subject" className="block text-sm font-medium text-light/80 mb-2">Sujet</label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-light focus:outline-none focus:border-primary transition-colors"
                                placeholder="Demande de devis / Collaboration"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-light/80 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-light focus:outline-none focus:border-primary transition-colors resize-none"
                                placeholder="Votre message..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white font-medium py-4 rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                        >
                            Envoyer le message
                            <Send size={18} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
