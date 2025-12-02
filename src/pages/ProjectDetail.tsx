import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, CheckCircle } from 'lucide-react';
import { projectsData } from '../data/projects';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen bg-dark flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Projet non trouvé</h1>
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
                        to="/#projects"
                        className="inline-flex items-center gap-2 text-light/60 hover:text-primary transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Retour aux projets
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
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            {project.title}
                        </h1>
                        <p className="text-xl text-light/70 mb-8 max-w-3xl">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        {(project.github || project.demo) && (
                            <div className="flex gap-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full font-medium transition-colors flex items-center gap-2"
                                    >
                                        <Github size={20} />
                                        Code source
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 bg-primary hover:bg-blue-600 rounded-full font-medium transition-colors flex items-center gap-2"
                                    >
                                        <ExternalLink size={20} />
                                        {project.tags.includes('WhatsApp') ? 'Voir la chaîne WhatsApp' : 'Voir la démo'}
                                    </a>
                                )}
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Image */}
            <section className="py-10">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="rounded-3xl overflow-hidden border border-white/10"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-[400px] md:h-[600px] object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <h2 className="text-3xl font-bold mb-4">À propos du projet</h2>
                                <p className="text-light/70 leading-relaxed text-lg">
                                    {project.fullDescription}
                                </p>
                            </motion.div>

                            {project.features && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <h2 className="text-3xl font-bold mb-6">Fonctionnalités</h2>
                                    <div className="space-y-3">
                                        {project.features.map((feature, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                                                <p className="text-light/70 text-lg">{feature}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {project.challenges && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    <h2 className="text-3xl font-bold mb-4">Défis techniques</h2>
                                    <p className="text-light/70 leading-relaxed text-lg">
                                        {project.challenges}
                                    </p>
                                </motion.div>
                            )}

                            {project.results && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    <h2 className="text-3xl font-bold mb-4">Résultats</h2>
                                    <p className="text-light/70 leading-relaxed text-lg">
                                        {project.results}
                                    </p>
                                </motion.div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {project.technologies && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="bg-white/5 p-6 rounded-2xl border border-white/10"
                                >
                                    <h3 className="text-xl font-bold mb-4">Technologies</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-white/5 rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="bg-white/5 p-6 rounded-2xl border border-white/10"
                            >
                                <h3 className="text-xl font-bold mb-4">Liens</h3>
                                <div className="space-y-3">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-light/70 hover:text-primary transition-colors"
                                        >
                                            <Github size={20} />
                                            Code source
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-light/70 hover:text-primary transition-colors"
                                        >
                                            <ExternalLink size={20} />
                                            {project.tags.includes('WhatsApp') ? 'Chaîne WhatsApp' : 'Démo en ligne'}
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
