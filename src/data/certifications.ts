export interface Certification {
    id: string;
    title: string;
    issuer: string;
    date: string;
    description: string;
    fullDescription: string;
    file: string;
    icon: string;
    competencies: string[];
    modules?: string[];
    duration?: string;
    format?: string;
    objectives?: string[];
}

export const certificationsData: Certification[] = [
    {
        id: 'marketing-digital',
        title: 'Marketing Digital',
        issuer: 'FORCE-N (UNCHK & Mastercard Foundation)',
        date: 'Juin 2025',
        description: 'Certification en stratégies de marketing digital',
        fullDescription: 'Le programme FORCE-N (Formations Ouvertes pour le Renforcement des Compétences, de l\'Emploi et de l\'Entrepreneuriat dans le Numérique) est une initiative de l\'Université Numérique Cheikh Hamidou Kane en partenariat avec la Mastercard Foundation. Cette formation pratique et professionnelle permet d\'acquérir des compétences concrètes dans la gestion des activités de marketing en ligne.',
        file: '/certifications/Certificat Marketing Digital.pdf',
        icon: '📊',
        duration: 'Formation certifiante',
        format: '100% en ligne',
        competencies: [
            'Définir une stratégie marketing pour une entreprise',
            'Accroître la visibilité en ligne d\'une entité',
            'Augmenter la valeur ajoutée grâce au digital',
            'Convertir des prospects en clients',
            'Identifier des outils d\'aide à la vente efficaces',
            'Améliorer la maîtrise des techniques de vente',
            'Renforcer la fidélité des clients',
            'Mesurer les performances et l\'efficacité des campagnes'
        ],
        modules: [
            'Les fondamentaux du marketing',
            'Les bases du marketing digital',
            'Community management sur les réseaux sociaux',
            'Canva et design',
            'E-mailing',
            'Outils divers',
            'Trafic et publicité',
            'Traçabilité'
        ],
        objectives: [
            'Maîtriser les stratégies de marketing digital',
            'Gérer efficacement la présence en ligne',
            'Optimiser les conversions et la fidélisation',
            'Analyser les performances marketing'
        ]
    },
    {
        id: 'developpement-frontend',
        title: 'Développement Front-end',
        issuer: 'FORCE-N (UNCHK & Mastercard Foundation)',
        date: '2025',
        description: 'Développement d\'interfaces web modernes',
        fullDescription: 'Certification pratique et professionnelle en développement front-end offerte par le programme FORCE-N. Cette formation hybride combine apprentissage en ligne et projets collaboratifs pour valider les compétences en création d\'interfaces utilisateur modernes et responsives.',
        file: '/certifications/Certificat en Developpemnet Front-end.pdf',
        icon: '💻',
        duration: 'Formation certifiante',
        format: 'Hybride (en ligne + projets collaboratifs)',
        competencies: [
            'Concevoir des interfaces utilisateur (UI)',
            'Intégrer des maquettes en code',
            'Maîtriser les langages front-end (HTML, CSS, JavaScript)',
            'Utiliser les outils de gestion de versions (Git/GitHub)',
            'Maîtriser un framework front-end (Angular)',
            'Travailler efficacement en équipe',
            'Se tenir à jour avec les avancées technologiques'
        ],
        modules: [
            'UX/UI Design avec Figma',
            'Langages de balisage (HTML/CSS)',
            'Bibliothèques CSS (Bootstrap)',
            'Langages de script (JavaScript, TypeScript)',
            'Frameworks (Angular)',
            'Outils collaboratifs (Git/GitHub)',
            'Méthodologies agiles (Trello)'
        ],
        objectives: [
            'Créer des interfaces web modernes et responsives',
            'Maîtriser les technologies front-end actuelles',
            'Collaborer efficacement sur des projets web',
            'Appliquer les bonnes pratiques de développement'
        ]
    },
    {
        id: 'prompt-engineering',
        title: 'Prompt Engineering (IA Générative)',
        issuer: 'Coursera Project Network',
        date: 'Avril 2025',
        description: 'IA générative pour le marketing et la publicité',
        fullDescription: 'Formation courte et pratique sur Coursera enseignant les techniques fondamentales du prompt engineering et de l\'IA générative appliquées au marketing et à la publicité. Apprenez à créer des campagnes marketing engageantes avec des outils comme ChatGPT et DALL-E.',
        file: '/certifications/Prompt Engineering Generative AI for Marketing & Advertising (IA générative pour le marketing et la publicité).pdf',
        icon: '🤖',
        duration: 'Moins de 2 heures',
        format: 'Projet guidé en ligne',
        competencies: [
            'Maîtriser les techniques de prompt engineering',
            'Créer des textes marketing accrocheurs avec l\'IA',
            'Générer des visuels marketing avec DALL-E',
            'Utiliser l\'analyse de sentiment pour comprendre les clients',
            'Appliquer les tests A/B pour optimiser les stratégies',
            'Concevoir du contenu qui résonne avec l\'audience',
            'Optimiser les résultats de l\'IA générative'
        ],
        modules: [
            'Fondamentaux du prompt engineering',
            'ChatGPT pour le marketing',
            'DALL-E pour la création visuelle',
            'Analyse de sentiment',
            'Tests A/B et optimisation',
            'Création de campagnes marketing IA'
        ],
        objectives: [
            'Améliorer les stratégies marketing avec l\'IA',
            'Créer du contenu marketing de qualité rapidement',
            'Optimiser les campagnes publicitaires',
            'Comprendre et appliquer l\'IA générative au marketing'
        ]
    },
    {
        id: 'facebook-ads',
        title: 'Créer une publicité Facebook',
        issuer: 'Coursera Project Network',
        date: 'Avril 2025',
        description: 'Création de publicités Facebook à partir de votre page',
        fullDescription: 'Projet guidé Coursera enseignant comment créer une publicité Facebook directement depuis votre page Facebook. Formation pratique permettant de maîtriser Facebook Ads Manager et de lancer des campagnes publicitaires efficaces sur Facebook et Instagram.',
        file: '/certifications/Certification Facebook Ads.pdf',
        icon: '📱',
        duration: 'Projet guidé court',
        format: 'Apprentissage pratique en ligne',
        competencies: [
            'Créer des publicités Facebook depuis une page',
            'Utiliser Facebook Ads Manager',
            'Configurer des campagnes publicitaires',
            'Cibler efficacement les audiences',
            'Gérer les budgets publicitaires',
            'Créer et gérer des annonces sur Facebook et Instagram',
            'Analyser les performances des publicités',
            'Optimiser les campagnes pour de meilleurs résultats'
        ],
        modules: [
            'Configuration de Facebook Ads Manager',
            'Création de campagnes publicitaires',
            'Ciblage d\'audience',
            'Gestion du budget',
            'Création d\'annonces visuelles',
            'Suivi et analyse des performances'
        ],
        objectives: [
            'Lancer des campagnes publicitaires Facebook efficaces',
            'Maîtriser les outils de publicité Meta',
            'Optimiser le retour sur investissement publicitaire',
            'Créer des annonces engageantes'
        ]
    },
    {
        id: 'canva',
        title: 'Canva pour les débutants',
        issuer: 'Coursera Project Network',
        date: 'Avril 2025',
        description: 'Maîtrise de la création graphique avec Canva',
        fullDescription: 'Projet guidé Coursera en français pour apprendre à utiliser Canva sans aucune connaissance préalable en design graphique. Formation pratique pour créer des visuels professionnels, développer une identité visuelle et concevoir des graphiques personnalisés pour les réseaux sociaux.',
        file: '/certifications/Canva.pdf',
        icon: '🎨',
        duration: 'Projet guidé court',
        format: 'Apprentissage pratique guidé',
        competencies: [
            'Utiliser les outils graphiques de Canva',
            'Créer des designs professionnels sans expérience préalable',
            'Développer une identité visuelle cohérente',
            'Concevoir des graphiques pour les réseaux sociaux',
            'Créer des présentations visuelles',
            'Réaliser des visuels marketing',
            'Maîtriser les principes de base du design',
            'Créer des vidéos animées simples'
        ],
        modules: [
            'Interface et outils de Canva',
            'Principes de design et mise en page',
            'Création d\'identité visuelle',
            'Design pour réseaux sociaux',
            'Présentations et documents',
            'Visuels marketing et publicité'
        ],
        objectives: [
            'Créer des visuels professionnels rapidement',
            'Maîtriser Canva pour tous types de projets',
            'Développer des compétences en design graphique',
            'Produire du contenu visuel engageant'
        ]
    }
];
