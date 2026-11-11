// ============================================================================
//  PROFIL DE L'ÉTABLISSEMENT
//  C'est le fichier à adapter pour décliner le site pour une autre école :
//  identité, coordonnées, tarifs par défaut, textes de l'accueil, cycles, FAQ…
//  Les images référencées se trouvent dans le dossier public/.
//
//  En mode API, les coordonnées et les tarifs (bloc `settings`) sont ensuite
//  remplacés par ceux enregistrés dans l'administration (GET /api/public/settings).
// ============================================================================
import type { Settings } from '../models'

export interface CycleProfile {
  /**
   * Valeur technique du cycle. Doit correspondre aux cycles acceptés par le backend
   * (utils/schemas.js) : Maternelle / Primaire / Collège. N'est pas affichée telle quelle.
   */
  name: string
  /** Libellé affiché sur le site (ex. « Préscolaire » pour la valeur technique « Maternelle »). */
  label: string
  /** Segment d'URL de la page d'admission : /admissions/<slug>. */
  slug: string
  age: string
  text: string
  /** Classes proposées. Doivent correspondre aux classes acceptées par le backend. */
  classes: string[]
  skills: string[]
  programs: { icon: string; title: string; text: string }[]
}

export interface SchoolProfile {
  /** Identifiant technique (sert aussi de clé de stockage des fake data). */
  id: string
  logo: string
  /** Valeurs par défaut des paramètres (affichées avant chargement et utilisées par les fake data). */
  settings: Settings
  footerText: string
  hero: { eyebrow: string; titleLines: string[]; highlight: string; intro: string; images: string[] }
  founder: {
    photo: string
    photoAlt: string
    eyebrow: string
    titleLines: string[]
    greeting: string
    paragraphs: string[]
    signature: string
  }
  history: { title: string; paragraphs: string[]; stats: { value: string; label: string }[] }
  values: { icon: string; title: string; text: string }[]
  faq: { q: string; a: string; link?: { to: string; label: string } }[]
  cycles: CycleProfile[]
  admissions: { documents: string[] }
}

// ----------------------------------------------------------------------------
//  CS BILINGUE INTELLIGENCIA — Boussaga, Cinkassé (Cinkassé 1, Région des Savanes)
//  Données vérifiées : nom, statut (privé laïc bilingue agréé par le MEPST), téléphones,
//  quartier, cycles et classes, CEPE et BEPC, bilinguisme français-anglais,
//  pièces d'inscription, modalités de paiement.
//  Données FICTIVES : slogan, e-mail, horaires, tarifs, textes de présentation, fondateur.
// ----------------------------------------------------------------------------
export const school: SchoolProfile = {
  id: 'cs-bilingue-intelligencia-cinkasse',
  logo: '/intelligencia-logo.png',
  settings: {
    name: 'Complexe Scolaire Bilingue Privé Laïque Intelligencia',
    shortName: 'CS Bilingue Intelligencia',
    slogan: 'SAVOIR, OUVERTURE ET EXCELLENCE',
    address: 'Quartier Boussaga (Boussaaga), commune de Cinkassé 1 — Cinkassé, Togo',
    email: 'contact@cs-intelligencia.tg',
    phone: '+228 90 17 93 34',
    phone2: '+228 97 84 81 12',
    hours: 'Lundi – Vendredi : 7h00 – 17h00',
    annualFee: 75000,
    canteenFee: 300,
    badgeFee: 1000,
    uniformFee: 4000,
    apeFee: 2000,
  },
  footerText:
    'Établissement privé laïc bilingue agréé par l’État togolais, à Boussaga (Cinkassé) : de la maternelle au collège, le programme officiel togolais et la maîtrise de l’anglais, pour des élèves ouverts sur le monde.',
  hero: {
    eyebrow: 'FRANÇAIS - ENGLISH - EXCELLENCE',
    titleLines: ['Complexe Scolaire', 'Bilingue'],
    highlight: 'Intelligencia',
    intro:
      'Bienvenue au CS Bilingue Intelligencia, à Cinkassé. Au carrefour du Togo, du Burkina Faso et du Ghana anglophone, nous donnons à vos enfants un atout décisif : le programme officiel togolais et la maîtrise du français et de l’anglais, de la maternelle jusqu’au BEPC.',
    images: ['/hero/hero-1.jpg', '/hero/hero-2.jpg', '/hero/hero-3.jpg'],
  },
  founder: {
    photo: '/directeur-general.jpg',
    photoAlt: 'Le fondateur du CS Bilingue Intelligencia',
    eyebrow: 'UN MOT DU FONDATEUR',
    titleLines: ['Deux langues,', 'mille possibilités.'],
    greeting: 'Chers parents, chers élèves,',
    paragraphs: [
      'À Cinkassé, carrefour commercial entre le Togo, le Burkina Faso et le Ghana, parler français et anglais n’est pas un luxe : c’est une chance pour l’avenir. C’est pourquoi nous avons créé une école bilingue, au service des familles de la zone.',
      'Le nom « Intelligencia » exprime notre ambition : le savoir, l’ouverture d’esprit, la maîtrise des langues et l’excellence académique. Établissement laïc agréé par l’État, nous accueillons tous les enfants sans distinction.',
    ],
    signature: 'Le Fondateur',
  },
  history: {
    title: 'Notre Histoire',
    paragraphs: [
      'Le Complexe Scolaire Bilingue Privé Laïque Intelligencia est implanté dans le quartier Boussaga, à Cinkassé, ville frontalière de l’extrême nord du Togo, dans la région des Savanes (préfecture de Cinkassé, commune de Cinkassé 1).',
      'Cinkassé est un grand carrefour commercial transfrontalier, tout proche du Burkina Faso et du Ghana anglophone. L’école est née de ce constat : pour les enfants de la zone, maîtriser le français et l’anglais est un atout majeur.',
      'Agréé par le Ministère des Enseignements Primaire, Secondaire et Technique, le complexe suit le programme officiel togolais de la maternelle au collège, avec un enseignement renforcé de l’anglais, et prépare ses élèves au CEPE puis au BEPC.',
    ],
    stats: [
      { value: '3', label: 'Cycles d’enseignement' },
      { value: '2', label: 'Langues : français et anglais' },
      { value: '13', label: 'Niveaux, de la petite section à la 3e' },
    ],
  },
  values: [
    {
      icon: 'book',
      title: 'Savoir',
      text: 'Des bases solides dans toutes les matières du programme officiel.',
    },
    {
      icon: 'idea',
      title: 'Ouverture d’esprit',
      text: 'Curiosité, échanges et découverte d’autres cultures.',
    },
    {
      icon: 'users',
      title: 'Maîtrise des langues',
      text: 'Le français et l’anglais pratiqués dès le plus jeune âge.',
    },
    {
      icon: 'graduation',
      title: 'Excellence académique',
      text: 'Une préparation sérieuse au CEPE et au BEPC.',
    },
  ],
  faq: [
    {
      q: 'Que veut dire « école bilingue » ?',
      a: 'Nos élèves suivent le programme officiel togolais en français et apprennent l’anglais de façon renforcée, dès la maternelle. À Cinkassé, tout proche du Ghana anglophone, c’est un atout majeur pour leurs études et leur avenir.',
    },
    {
      q: 'Où se trouve l’établissement ?',
      a: 'À Cinkassé, dans le quartier Boussaga (Boussaaga), commune de Cinkassé 1. Appelez-nous ou écrivez-nous sur WhatsApp au +228 90 17 93 34, ou contactez le secrétariat au +228 97 84 81 12.',
    },
    {
      q: 'L’établissement est-il reconnu par l’État ?',
      a: 'Oui. C’est un établissement d’enseignement général privé laïc à vocation bilingue, agréé par le Ministère des Enseignements Primaire, Secondaire et Technique.',
    },
    {
      q: 'Vos élèves passent-ils les examens officiels ?',
      a: 'Oui. Les élèves de CM2 sont présentés au CEPE et les élèves de 3e au BEPC, comme dans toutes les écoles togolaises, avec en plus une bonne pratique de l’anglais.',
      link: { to: '/cycles', label: 'Voir nos cycles' },
    },
    {
      q: 'Quelles sont les modalités de paiement ?',
      a: 'Des frais d’inscription sont réglés chaque année à l’inscription. La scolarité se paie ensuite par tranches, selon le calendrier communiqué par l’établissement.',
      link: { to: '/tarifs', label: 'Voir les tarifs' },
    },
  ],
  cycles: [
    {
      name: 'Maternelle',
      label: 'Maternelle',
      slug: 'maternelle',
      age: '3 à 6 ans',
      text: 'La maternelle (jardin d’enfants) est la première étape du parcours scolaire. Elle développe l’éveil et la vie en groupe, avec une initiation précoce au français et à l’anglais dès le bas âge.',
      classes: ['Petite section', 'Moyenne section', 'Grande section'],
      skills: [
        'Éveil, motricité et vie en groupe',
        'Développement du langage en français',
        'Premiers mots et comptines en anglais',
        'Découverte des lettres et des nombres',
      ],
      programs: [
        {
          icon: 'heart',
          title: 'Chants bilingues',
          text: 'Comptines et chansons en français et en anglais.',
        },
        {
          icon: 'idea',
          title: 'Éveil artistique',
          text: 'Dessin, peinture, activités manuelles et créativité.',
        },
        {
          icon: 'book',
          title: 'Premiers apprentissages',
          text: 'Préparer l’entrée au CP1 en découvrant et en jouant.',
        },
      ],
    },
    {
      name: 'Primaire',
      label: 'Primaire',
      slug: 'primaire',
      age: '6 à 12 ans',
      text: 'Du CP1 au CM2, les élèves suivent le programme officiel togolais, avec un apprentissage renforcé de l’anglais en parallèle. Le cycle mène à l’examen national du CEPE (Certificat d’Études du Premier Cycle).',
      classes: ['CP1', 'CP2', 'CE1', 'CE2', 'CM1', 'CM2'],
      skills: [
        'Lecture, écriture et calcul (programme officiel)',
        'Anglais renforcé : vocabulaire, lecture et expression orale',
        'Sciences, histoire-géographie et éducation civique',
        'Préparation au CEPE en classe de CM2',
      ],
      programs: [
        {
          icon: 'book',
          title: 'Programme officiel',
          text: 'Français, mathématiques, sciences et éducation civique.',
        },
        {
          icon: 'users',
          title: 'English every day',
          text: 'Des séances d’anglais régulières, orales et écrites.',
        },
        {
          icon: 'graduation',
          title: 'Objectif CEPE',
          text: 'Révisions, devoirs et examens blancs en CM2.',
        },
      ],
    },
    {
      name: 'Collège',
      label: 'Collège',
      slug: 'college',
      age: '11 à 16 ans',
      text: 'De la 6e à la 3e, le collège approfondit les connaissances et les méthodes de travail, prépare à l’examen officiel du BEPC (Brevet d’Études du Premier Cycle) et consolide la pratique bilingue français-anglais.',
      classes: ['6e', '5e', '4e', '3e'],
      skills: [
        'Enseignements généraux approfondis',
        'Anglais : grammaire, expression et communication',
        'Méthodologie et autonomie',
        'Préparation au BEPC en classe de 3e',
      ],
      programs: [
        {
          icon: 'graduation',
          title: 'Objectif BEPC',
          text: 'Suivi renforcé et examens blancs en classe de 3e.',
        },
        {
          icon: 'users',
          title: 'Pratique bilingue',
          text: 'Exposés, débats et clubs d’anglais.',
        },
        {
          icon: 'idea',
          title: 'Ouverture au monde',
          text: 'Découvrir les pays voisins et préparer l’avenir.',
        },
      ],
    },
  ],
  admissions: {
    documents: [
      'Un (1) acte de naissance',
      'Les bulletins de l’année précédente (sauf entrée en petite section)',
      'Un certificat de transfert (pour un élève venant d’un autre établissement)',
      'Le relevé ou l’attestation de réussite au CEPE (pour une entrée en 6e)',
      'Deux (2) photos d’identité récentes',
      'Le reçu de paiement des frais d’inscription annuels',
    ],
  },
}

/** Classes par cycle, dérivées du profil (formulaires, filtres, fake data). */
export const classesByCycle: Record<string, string[]> = Object.fromEntries(
  school.cycles.map((c) => [c.name, c.classes]),
)

/** Libellé affiché d'un cycle à partir de sa valeur technique (ex. « Maternelle » → « Préscolaire »). */
export const cycleLabel = (name: string): string =>
  school.cycles.find((c) => c.name === name)?.label ?? name
