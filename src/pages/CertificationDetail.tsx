import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Award, CheckCircle, BookOpen, Clock, Monitor } from 'lucide-react';
import { certificationsData } from '../data/certifications';

const CertificationDetail = () => {
    const { id } = useParams();
    const cert = certificationsData.find(c => c.id === id);
    const fileUrl = cert ? import.meta.env.BASE_URL + cert.file.substring(1) : '';

    if (!cert) {
        return (
            <div className="min-h-screen bg-dark flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Certification non trouvée</h1>
                    <Link to="/" className="text-primary hover:underline">
                        Retour à l'accueil
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-dark text-light">
            {/* Header */}
            <div className="bg-dark/50 border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
                <div className="container mx-auto px-6 py-4">
                    <Link
                        to="/#certifications"
                        className="inline-flex items-center gap-2 text-light/60 hover:text-primary transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Retour aux certifications
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-4xl">
                                {cert.icon}
                            </div>
                            <Award className="text-primary" size={40} />
                        </div>

                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                            {cert.title}
                        </h1>
                        <p className="text-xl text-primary mb-2">{cert.issuer}</p>
                        <p className="text-light/60 mb-8">{cert.date}</p>
                        <p className="text-xl text-light/70 mb-8 max-w-3xl">
                            {cert.description}
                        </p>

                        <div className="flex gap-4">
                            <a
                                href={fileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-full font-medium transition-colors flex items-center gap-2"
                            >
                                <Award size={20} />
                                Voir le certificat
                            </a>
                            <a
                                href={fileUrl}
                                download
                                className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full font-medium transition-colors flex items-center gap-2"
                            >
                                <Download size={20} />
                                Télécharger
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 bg-dark/50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h2 className="text-3xl font-bold mb-4">À propos de la certification</h2>
                                <p className="text-light/70 leading-relaxed text-lg">
                                    {cert.fullDescription}
                                </p>
                            </motion.div>

                            {cert.competencies && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <h2 className="text-3xl font-bold mb-6">Compétences acquises</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {cert.competencies.map((comp, index) => (
                                            <div key={index} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                                                <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                                                <p className="text-light/70">{comp}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {cert.modules && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <h2 className="text-3xl font-bold mb-6">Modules de formation</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {cert.modules.map((module, index) => (
                                            <div key={index} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                                                <BookOpen size={18} className="text-primary flex-shrink-0" />
                                                <p className="text-light/70">{module}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {cert.objectives && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    <h2 className="text-3xl font-bold mb-6">Objectifs de la formation</h2>
                                    <div className="space-y-3">
                                        {cert.objectives.map((obj, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                                                <p className="text-light/70 text-lg">{obj}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="bg-white/5 p-6 rounded-2xl border border-white/10"
                            >
                                <h3 className="text-xl font-bold mb-4">Informations</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Award className="text-primary flex-shrink-0" size={20} />
                                        <div>
                                            <p className="text-sm text-light/60">Émetteur</p>
                                            <p className="font-medium">{cert.issuer}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Clock className="text-primary flex-shrink-0" size={20} />
                                        <div>
                                            <p className="text-sm text-light/60">Date</p>
                                            <p className="font-medium">{cert.date}</p>
                                        </div>
                                    </div>
                                    {cert.duration && (
                                        <div className="flex items-start gap-3">
                                            <Clock className="text-primary flex-shrink-0" size={20} />
                                            <div>
                                                <p className="text-sm text-light/60">Durée</p>
                                                <p className="font-medium">{cert.duration}</p>
                                            </div>
                                        </div>
                                    )}
                                    {cert.format && (
                                        <div className="flex items-start gap-3">
                                            <Monitor className="text-primary flex-shrink-0" size={20} />
                                            <div>
                                                <p className="text-sm text-light/60">Format</p>
                                                <p className="font-medium">{cert.format}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="bg-white/5 p-6 rounded-2xl border border-white/10"
                            >
                                <h3 className="text-xl font-bold mb-4">Actions</h3>
                                <div className="space-y-3">
                                    <a
                                        href={fileUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-light/70 hover:text-primary transition-colors"
                                    >
                                        <Award size={20} />
                                        Voir le certificat
                                    </a>
                                    <a
                                        href={fileUrl}
                                        download
                                        className="flex items-center gap-2 text-light/70 hover:text-primary transition-colors"
                                    >
                                        <Download size={20} />
                                        Télécharger le PDF
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CertificationDetail;
