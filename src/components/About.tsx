import { motion } from 'framer-motion';
import { Code, Palette, Globe, Terminal } from 'lucide-react';

const About = () => {
    const skills = [
        { name: 'Marketing Digital', icon: <Globe size={24} />, description: 'Facebook Ads, Social Media Management, Email Marketing & Automatisation.' },
        { name: 'Intelligence Artificielle', icon: <Terminal size={24} />, description: 'Prompt Engineering, Création d\'IA spécialisées, Vibe Coding.' },
        { name: 'Développement Web', icon: <Code size={24} />, description: 'React, PHP/MySQL, Création de Landing Pages, Intégration Paiement.' },
        { name: 'Design & Branding', icon: <Palette size={24} />, description: 'Canva, UX/UI Design, Stratégie de marque.' },
    ];

    return (
        <section id="about" className="py-20 bg-dark relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">À Propos de Moi</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-4">Mon Parcours</h3>
                        <p className="text-light/70 mb-6 leading-relaxed">
                            Je suis Cheikhou Niang, étudiant en deuxième année de formation en <strong>Internet & Management</strong> (e-Marketing / Communication digitale) à l'Université Cheikh Anta Diop de Dakar (UCAD).
                        </p>
                        <p className="text-light/70 mb-6 leading-relaxed">
                            Passionné par le numérique, je me spécialise dans le marketing digital et l'intelligence artificielle. Mon objectif est de devenir un expert reconnu, de créer ma propre entreprise et de contribuer à la transformation digitale du Sénégal. Je suis également engagé communautairement en tant que Président de la commission d'organisation de l'AEERCY.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Curieux</span>
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Ambitieux</span>
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Généreux</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <h4 className="text-4xl font-bold text-primary mb-2">2e</h4>
                            <p className="text-sm text-light/60">Année UCAD</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <h4 className="text-4xl font-bold text-primary mb-2">4</h4>
                            <p className="text-sm text-light/60">Projets</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <h4 className="text-4xl font-bold text-primary mb-2">4</h4>
                            <p className="text-sm text-light/60">Certifications</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <h4 className="text-4xl font-bold text-primary mb-2">100%</h4>
                            <p className="text-sm text-light/60">Engagement</p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                            <p className="text-sm text-light/60">{skill.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
