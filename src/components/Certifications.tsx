import { motion } from 'framer-motion';
import { Award, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { certificationsData } from '../data/certifications';

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 bg-dark relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Mes Certifications</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    <p className="text-light/60 mt-4 max-w-2xl mx-auto">
                        Formations et certifications validant mes compétences en marketing digital, développement web et intelligence artificielle.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificationsData.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group"
                        >
                            <Link to={`/certification/${cert.id}`}>
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl group-hover:bg-primary/20 transition-colors">
                                        {cert.icon}
                                    </div>
                                    <Award className="text-primary" size={24} />
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
                                <p className="text-sm text-primary mb-1">{cert.issuer}</p>
                                <p className="text-xs text-light/40 mb-3">{cert.date}</p>
                                <p className="text-sm text-light/60 mb-4 line-clamp-2">{cert.description}</p>
                            </Link>

                            <div className="flex gap-3">
                                <a
                                    href={import.meta.env.BASE_URL + cert.file.substring(1)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex-1 px-4 py-2 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm"
                                >
                                    <ExternalLink size={16} />
                                    Voir
                                </a>
                                <a
                                    href={import.meta.env.BASE_URL + cert.file.substring(1)}
                                    download
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex-1 px-4 py-2 bg-white/5 hover:bg-white/10 text-light rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm"
                                >
                                    <Download size={16} />
                                    Télécharger
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
