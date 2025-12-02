export interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    tags: string[];
    image: string;
    github: string;
    demo: string;
    features?: string[];
    technologies?: string[];
    challenges?: string;
    results?: string;
}

export const projectsData: Project[] = [
    {
        id: 'meteosn',
        title: '🌤️ MeteoSN',
        description: 'Application météo moderne et interactive développée via vibe coding. Recherche mondiale, prévisions 5 jours, carte interactive et conseils pratiques.',
        fullDescription: 'MeteoSN est une application météo complète développée avec Angular et l\'API OpenWeatherMap. Elle permet aux utilisateurs de consulter les conditions météorologiques en temps réel partout dans le monde avec une interface moderne et intuitive.',
        tags: ['Angular', 'Bootstrap', 'API', 'Vibe Coding'],
        image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        github: 'https://github.com/Cheikhou-4/ApplicationMeteo',
        demo: 'https://cheikhou-4.github.io/ApplicationMeteo/',
        features: [
            'Recherche météo mondiale en temps réel',
            'Prévisions à 5 jours avec graphiques interactifs',
            'Carte météo interactive (pluie, nuages, températures)',
            'Conseils pratiques et données climatiques locales',
            'Design responsive avec fond dynamique selon la météo'
        ],
        technologies: ['Angular', 'Bootstrap', 'TypeScript', 'OpenWeatherMap API', 'HTML/CSS'],
        challenges: 'Intégration de l\'API OpenWeatherMap et création d\'une interface utilisateur intuitive avec des visualisations de données météorologiques complexes.',
        results: 'Application fonctionnelle déployée avec une interface utilisateur moderne et des données météo précises en temps réel.'
    },
    {
        id: 'senia',
        title: 'SENIA - Sénégal Intelligence Artificielle',
        description: 'Chaîne WhatsApp pour démocratiser l\'IA au Sénégal. Contenus éducatifs, tutoriels et sensibilisation aux technologies de l\'intelligence artificielle.',
        fullDescription: 'SENIA est une initiative visant à démocratiser l\'intelligence artificielle au Sénégal. À travers une chaîne WhatsApp, je partage du contenu éducatif pour sensibiliser et former les jeunes sénégalais aux technologies de l\'IA. L\'objectif est de rendre l\'IA accessible à tous et de créer une communauté engagée autour de ces technologies.',
        tags: ['Communauté', 'IA', 'Éducation', 'WhatsApp'],
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        github: '',
        demo: 'https://whatsapp.com/channel/0029VbBvmmz3GJOuAYsARB1m',
        features: [
            'Chaîne WhatsApp avec contenu régulier sur l\'IA',
            'Tutoriels et démonstrations pratiques',
            'Création d\'une communauté autour de l\'IA',
            'Contenus éducatifs accessibles',
            'Ambassadeur bénévole de l\'IA responsable'
        ],
        technologies: ['WhatsApp', 'Création de contenu', 'Pédagogie', 'IA'],
        challenges: 'Rendre l\'IA accessible et compréhensible pour un public non technique au Sénégal via WhatsApp.',
        results: 'Communauté grandissante avec des contenus éducatifs réguliers et un impact positif sur la sensibilisation à l\'IA au Sénégal.'
    },
    {
        id: 'auto-link',
        title: 'Projet Auto-Link',
        description: 'Co-fondateur et responsable technique. Plateforme innovante en cours de développement (projet confidentiel).',
        fullDescription: 'Auto-Link est un projet de startup dont je suis co-fondateur avec Ousseynou Nguirane. Je gère la partie technique tandis que mon associé s\'occupe de la faisabilité. Le projet est actuellement en développement et les détails restent confidentiels.',
        tags: ['Startup', 'Tech Lead', 'En développement'],
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        github: '',
        demo: '',
        features: [
            'Projet confidentiel en cours de développement',
            'Co-fondateur et responsable technique',
            'Collaboration avec Ousseynou Nguirane',
            'Gestion des étapes phares du développement'
        ],
        technologies: ['Confidentiel'],
        challenges: 'Développement d\'une solution innovante tout en gérant les aspects techniques d\'une startup.',
        results: 'Projet en cours de développement avec des étapes clés franchies.'
    },
    {
        id: 'landing-page-restaurant',
        title: 'Restaurant Baobab',
        description: 'Conception d\'une landing page moderne, responsive et design pour un restaurant sénégalais.',
        fullDescription: 'Création d\'une landing page professionnelle pour le Restaurant Baobab. Le design est moderne, responsive et optimisé pour la conversion avec une attention particulière portée à l\'expérience utilisateur et à la mise en valeur de la cuisine sénégalaise.',
        tags: ['Design', 'Responsive', 'Frontend'],
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        github: 'https://github.com/Cheikhou-4/restaurant-baobab',
        demo: 'https://cheikhou-4.github.io/restaurant-baobab/',
        features: [
            'Design moderne et attrayant',
            'Responsive sur tous les appareils',
            'Optimisé pour la conversion',
            'Intégration de photos de qualité',
            'Section menu et contact'
        ],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
        challenges: 'Créer une landing page qui reflète l\'authenticité de la cuisine sénégalaise tout en étant moderne et professionnelle.',
        results: 'Landing page professionnelle et responsive qui met en valeur l\'offre du restaurant.'
    }
];
