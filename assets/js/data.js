// Données réelles du portfolio — voir main.js pour le rendu.
const DATA = {
  profile: {
    name: "Nathan Drancourt",
    title: "Administrateur Systèmes & Réseaux",
    tagline: "Je conçois, sécurise et documente des infrastructures fiables. Alternance d'un an à l'Automobile Club de l'Ouest, jusqu'en septembre 2026.",
    status: "Disponible dès octobre 2026",
    location: "Le Mans, France",
    email: "nathan.drancourt@outlook.fr",
    linkedin: "https://www.linkedin.com/in/nathan-drancourt/",
    github: "https://github.com/ImNvthan",
    cvPdf: "CV-Nathan-Drancourt.pdf",
    cvImage: "CV-Nathan-Drancourt.png",
  },

  // Chiffres alignés sur le CV et sur ce que la page montre réellement.
  stats: [
    { value: 12, suffix: "", label: "mois en alternance" },
    { value: 11, suffix: "", label: "projets aboutis" },
    { value: 9, suffix: "", label: "certifications" },
    { value: 12, suffix: "", label: "services auto-hébergés" },
  ],

  about: [
    "Après un Bac Pro Systèmes Numériques (option SSIHT) et un BTS SIO option SISR, j'ai suivi un Bachelor Administrateur Systèmes &amp; Réseaux au CESI, en alternance à l'Automobile Club de l'Ouest de septembre 2025 à septembre 2026.",
    "J'y ai administré des environnements Windows Server, Linux et Microsoft 365, géré l'Active Directory, déployé des équipements réseau et automatisé des process via GLPI, PowerShell et Power Automate. La documentation et la fiabilité des systèmes sont au cœur de ma façon de travailler.",
  ],

  experience: [
    {
      date: "2025 — 2026",
      duration: "Sept. 2025 — Sept. 2026 · 12 mois",
      role: "Alternant — Administrateur Système & Réseau",
      company: "Automobile Club de l'Ouest",
      tasks: [
        "Administration Windows Server, Linux et Microsoft 365",
        "Active Directory : OU, GPO, comptes utilisateurs",
        "Installation &amp; configuration réseau : switchs, routeurs, bornes WiFi",
        "Supervision et support technique niveaux 1 &amp; 2",
        "Automatisation de process : GLPI, scripts, Power Automate",
        "Documentation technique (procédures, notices)",
      ],
    },
    {
      date: "2025",
      duration: "Janv. — Févr. · 2 mois",
      role: "Stage — Technicien Système & Réseau",
      company: "Groupe Lelièvre",
      tasks: [
        "Mise en place d'un nouveau type de notification GLPI",
        "Campagne de sensibilisation au phishing",
        "Déploiement de postes de travail, support utilisateurs",
        "Diagnostic et résolution d'incidents réseau",
      ],
    },
    {
      date: "2024",
      duration: "Avr. — Juin · 3 mois",
      role: "Stage — Technicien Système & Réseau",
      company: "Groupe Lelièvre",
      tasks: [
        "Refonte complète de l'installation réseau d'une agence",
        "Migration du pare-feu pfSense vers OPNsense",
        "Déploiement de postes de travail, support utilisateurs",
      ],
    },
    {
      date: "2022",
      duration: "Mars — Mai · 3 mois",
      role: "Stage — Technicien Système & Réseau",
      company: "Groupe Lelièvre",
      tasks: [
        "Surveillance et maintenance du réseau informatique",
        "Mise en place d'un serveur de logs interne",
      ],
    },
  ],

  skills: [
    { label: "Systèmes Windows / AD", level: 80 },
    { label: "Linux", level: 75 },
    { label: "Réseaux (VLAN, DNS, DHCP)", level: 75 },
    { label: "GLPI & ITSM", level: 90 },
    { label: "Automatisation", level: 55 },
    { label: "Cybersécurité", level: 50 },
  ],

  projects: [
    {
      icon: "⚙️",
      title: "Script d'automatisation du déploiement d'un serveur web LAMP sur Debian",
      desc: "Script Bash permettant de déployer automatiquement un environnement LAMP complet sur Debian, incluant l'installation, la configuration et la préparation du serveur web pour l'hébergement d'applications PHP.",
      category: "Automatisation",
      org: "Personnel",
      tags: ["Bash", "Serveur", "Debian", "Automatisation"],
      link: "https://github.com/ImNvthan/lamp-debian-installer",
    },
    {
      icon: "🛠️",
      title: "Suite d'outils graphiques de gestion des utilisateurs Active Directory",
      desc: "Automatisation PowerShell/WPF du cycle de vie des comptes AD : création (génération intelligente de logins, unicité), modification, et gestion des dossiers personnels avec droits NTFS. Accès LDAP natif, sans module RSAT.",
      category: "Active Directory",
      org: "Automobile Club de l'Ouest",
      tags: ["PowerShell", "WPF / XAML", "Active Directory", "LDAP"],
      link: null,
    },
    {
      icon: "📊",
      title: "Supervision intelligente GLPI avec alerting temps réel",
      desc: "Développement d'un système de supervision personnalisé sous Linux permettant la détection en temps réel des incidents critiques sur GLPI (Apache, MariaDB, disponibilité web).",
      category: "Monitoring",
      org: "Automobile Club de l'Ouest",
      tags: ["Bash", "Monitoring", "Linux", "Automatisation"],
      link: "https://github.com/ImNvthan/glpi-teams-healthcheck",
    },
    {
      icon: "📱",
      title: "Mobile Device Management (MDM)",
      desc: "Mise en place d'une solution de Mobile Device Management permettant de centraliser la gestion et la sécurisation des appareils mobiles et postes utilisateurs.",
      category: "Sécurité",
      org: "Automobile Club de l'Ouest",
      tags: ["MDM", "Intune", "Sécurité"],
      link: null,
    },
    {
      icon: "💻",
      title: "Purge automatique du parc GLPI",
      desc: "Automatisation de la suppression des périphériques non utilisés depuis un certain temps.",
      category: "Automatisation",
      org: "Automobile Club de l'Ouest",
      tags: ["Linux", "CRON", "GLPI", "Scripting"],
      link: null,
    },
    {
      icon: "👥",
      title: "Synchronisation LDAP",
      desc: "Automatisation de la synchronisation des utilisateurs depuis un annuaire LDAP/Active Directory vers GLPI.",
      category: "Automatisation",
      org: "Automobile Club de l'Ouest",
      tags: ["Linux", "CRON", "GLPI", "Scripting"],
      link: null,
    },
    {
      icon: "⚡",
      title: "Tickets GLPI via Power Automate",
      desc: "Automatisation de la création de tickets GLPI depuis Microsoft Forms, avec routage intelligent et notifications automatiques via Power Automate.",
      category: "Automatisation",
      org: "Automobile Club de l'Ouest",
      tags: ["Power Automate", "GLPI", "MS Forms", "M365"],
      link: null,
    },
    {
      icon: "🔄",
      title: "Migration GLPI 10 → GLPI 11",
      desc: "Planification et exécution de la migration complète de la plateforme ITSM, avec sauvegarde des données, tests et documentation.",
      category: "Migration",
      org: "Automobile Club de l'Ouest",
      tags: ["GLPI", "Linux", "MySQL", "Documentation"],
      link: null,
    },
    {
      icon: "🌐",
      title: "Migration pfSense → OPNsense",
      desc: "Refonte complète du réseau d'une agence incluant la migration du pare-feu pfSense vers OPNsense et la reconfiguration des règles de filtrage.",
      category: "Réseau",
      org: "Groupe Lelièvre",
      tags: ["pfSense", "OPNsense", "VLAN", "Firewall"],
      link: null,
    },
    {
      icon: "🎫",
      title: "Notifications GLPI",
      desc: "Configuration et personnalisation des notifications par e-mail des tickets GLPI, en intégrant un modèle HTML avec le logo de l'entreprise lors de la création d'un ticket.",
      category: "Support",
      org: "Groupe Lelièvre & Automobile Club de l'Ouest",
      tags: ["HTML", "CSS", "GLPI"],
      link: "https://github.com/ImNvthan/glpi-notification-templates",
    },
    {
      icon: "📊",
      title: "Serveur de logs interne",
      desc: "Création d'un serveur de logs centralisé pour la collecte et l'analyse des journaux systèmes et réseau, améliorant la visibilité sur l'infrastructure.",
      category: "Supervision",
      org: "Groupe Lelièvre",
      tags: ["Linux", "Syslog", "Supervision"],
      link: null,
    },
  ],

  education: [
    { date: "Sept. 2025 — Sept. 2026", diploma: "Bachelor Administrateur Systèmes & Réseaux", school: "CESI, Le Mans" },
    { date: "2023 — 2025", diploma: "BTS SIO, option SISR", school: "Lycée André Malraux" },
    { date: "2021 — 2023", diploma: "Bac Pro Systèmes Numériques, option SSIHT", school: "Saint Joseph La Salle" },
  ],

  // Certifications. Pour chaque entrée :
  //  - "url"  : le lien « Afficher le certificat » copié depuis LinkedIn (ou null s'il n'y en a pas).
  //  - "logo" : nom d'un fichier dans assets/certs/ (png, jpg ou svg). null => initiale de l'organisme.
  certifications: [
    { name: "Administrez un système Linux", issuer: "OpenClassrooms", url: "https://openclassrooms.com/fr/courses/7274161-administrez-un-systeme-linux", logo: "openclassrooms.svg" },
    { name: "Découvrez le cloud avec Amazon Web Services", issuer: "OpenClassrooms", url: "https://openclassrooms.com/fr/courses/4810836-decouvrez-le-cloud-avec-amazon-web-services", logo: "openclassrooms.svg" },
    { name: "Prenez le contrôle à distance d'un poste Linux/Windows avec VNC", issuer: "OpenClassrooms", url: "https://openclassrooms.com/fr/courses/1733046-prenez-le-controle-a-distance-d-un-poste-linux-windows-avec-vnc", logo: "openclassrooms.svg" },
    { name: "Gérez votre parc informatique avec GLPI", issuer: "OpenClassrooms", url: "https://openclassrooms.com/fr/courses/1730516-gerez-votre-parc-informatique-avec-glpi", logo: "openclassrooms.svg" },
    { name: "Administration système et infrastructure IT", issuer: "Google", url: "https://www.coursera.org/account/accomplishments/verify/WO8M24SEOEP0", logo: "google.svg" },
    { name: "Fondements de la cybersécurité", issuer: "Google", url: "https://www.coursera.org/account/accomplishments/verify/7HJJL3ZM4JKY", logo: "google.svg" },
    { name: "Sécurité des réseaux informatique", issuer: "FUN-MOOC", url: "https://www.fun-mooc.fr/fr/cours/securite-des-reseaux-informatiques/", logo: "fun-mooc.svg" },
    { name: "Fondements de l'assistance technique", issuer: "Google", url: "https://www.coursera.org/account/accomplishments/verify/5182IEH0E1EE", logo: "google.svg" },
    { name: "Atelier RGPD", issuer: "CNIL", url: "https://atelier-rgpd.cnil.fr/", logo: "atelier-rgpd.png" },
  ],

  // Homelab — labo perso auto-hébergé sur Proxmox. Services listés = ceux réellement déployés.
  homelab: {
    intro:
      "À la maison, un Dell PowerEdge T410 sous Proxmox VE héberge une douzaine de services en conteneurs LXC : DNS filtrant, reverse proxy, supervision, SIEM, média… C'est mon terrain d'essai — j'y déploie, casse et documente les mêmes briques qu'en production.",
    hardware: [
      ["Machine", "Dell PowerEdge T410"],
      ["Hyperviseur", "Proxmox VE"],
      ["Charge", "11 conteneurs LXC + 1 VM"],
      ["Réseau", "AdGuard Home · Nginx Proxy Manager"],
      ["Supervision", "Uptime Kuma · Beszel · Wazuh"],
    ],
    stack: [
      { group: "Virtualisation", items: ["Proxmox VE", "LXC", "Docker"] },
      { group: "Réseau & accès", items: ["AdGuard Home", "Nginx Proxy Manager", "Gluetun"] },
      { group: "Supervision & sécurité", items: ["Uptime Kuma", "Beszel", "Glance", "Wazuh"] },
      { group: "Services", items: ["Jellyfin", "FileBrowser"] },
    ],
  },
};
