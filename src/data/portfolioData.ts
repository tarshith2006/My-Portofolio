import {
  Project,
  SkillCategory,
  ExperienceItem,
  AchievementItem,
  EducationItem,
  CertificationItem,
  ParticipationCertificateItem,
  InternshipOfferItem,
} from '../types';

export const personalInfo = {
  name: 'Tarshith Bantupalli',
  role: 'Computer Science Engineering Student & Agentic AI Developer',
  headline: "Hi, I'm Tarshith Bantupalli",
  supportingHeading: 'CSE Student & Agentic AI Developer',
  description:
    'Passionate about Agentic AI systems, Python, modern web development, and engineering practical software that solves real-world challenges.',
  aboutMe:
    "I'm a Computer Science Engineering undergraduate specializing in Agentic AI architectures, modern web development, and algorithmic Python solutions. I enjoy dissecting complex challenges and engineering autonomous, human-in-the-loop systems that deliver real-world value.",
  location: 'Visakhapatnam, Andhra Pradesh, India',
  email: 'tarshith17@gmail.com',
  github: 'https://github.com/tarshith2006',
  linkedin: 'https://www.linkedin.com/in/tarshith-bantupalli',
  status: 'Open for Agentic AI, Full-Stack & Tech Collaborations',
  stats: [
    { label: 'CGPA', value: '7.78', helper: 'Current Academic Standing' },
    { label: 'Graduation', value: '2028', helper: 'B.Tech in CSE' },
    { label: 'Projects Built', value: '5+', helper: 'AI & Web Solutions' },
    { label: 'Hackathons', value: 'Multiple', helper: 'National & Collegiate Events' },
  ],
  highlights: [
    'Agentic AI Developer',
    'CSE Undergraduate',
    'Python Systems',
    'Modern Web & React',
    'Algorithmic Problem Solver',
    'Hackathon Team Lead',
  ],
};

export const skillsData: SkillCategory[] = [
  {
    title: 'Agentic AI & Machine Learning',
    skills: [
      { name: 'Autonomous AI Agents', level: 'Proficient', description: 'Tool-use architectures, decision loops & agent reasoning' },
      { name: 'Multi-Agent Workflows', level: 'Intermediate', description: 'Agent collaboration, task delegation & chain-of-thought execution' },
      { name: 'Prompt Engineering', level: 'Proficient', description: 'Structured outputs, system prompts, few-shot conditioning' },
      { name: 'AI Application Dev', level: 'Intermediate', description: 'Integrating LLM APIs, function calling & context management' },
      { name: 'Vibe Coding', level: 'Proficient', description: 'Rapid human-in-the-loop iteration & prototype building' },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 'Proficient', description: 'Automation scripts, algorithmic logic, agentic tooling & APIs' },
      { name: 'Java', level: 'Intermediate', description: 'Object-oriented programming, classes & modular design' },
      { name: 'C', level: 'Familiar', description: 'Procedural fundamentals, pointers & memory concepts' },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React', level: 'Intermediate', description: 'Component state, custom hooks, SPA structure & UI composition' },
      { name: 'JavaScript / ES6+', level: 'Intermediate', description: 'Asynchronous flows, Promises, DOM APIs & modular code' },
      { name: 'HTML5 & CSS3', level: 'Intermediate', description: 'Semantic structure, responsive layouts & Tailwind CSS' },
      { name: 'Browser APIs', level: 'Intermediate', description: 'Geolocation, LocalStorage & client-side caching' },
    ],
  },
  {
    title: 'Developer Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', level: 'Intermediate', description: 'Version control, branch management, pull requests & repositories' },
      { name: 'VS Code', level: 'Proficient', description: 'Custom developer workflow, debugging & terminal mastery' },
      { name: 'Vercel', level: 'Intermediate', description: 'Continuous deployment, serverless hosting & preview pipelines' },
    ],
  },
  {
    title: 'Computer Science & Core Foundations',
    skills: [
      { name: 'Data Structures', level: 'Intermediate', description: 'Arrays, linked lists, stacks, queues, trees & graphs' },
      { name: 'Algorithms', level: 'Intermediate', description: 'Sorting, searching, recursion & asymptotic analysis' },
      { name: 'DBMS & SQL', level: 'Intermediate', description: 'Relational schemas, queries, normalization & ACID principles' },
      { name: 'MongoDB & NoSQL', level: 'Intermediate', description: 'Document schemas, aggregation pipelines, CRUD & data modeling' },
      { name: 'Operating Systems', level: 'Intermediate', description: 'Process scheduling, concurrency, memory & file systems' },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'careroute',
    name: 'CareRoute',
    tagline: 'Finding Healthcare When It Matters.',
    description:
      'An emergency healthcare discovery and hospital recommendation application that helps users find nearby hospitals, explore healthcare services, check blood availability, and receive navigation assistance.',
    technologies: ['React', 'Vite', 'JavaScript', 'HTML', 'CSS', 'Browser Geolocation API', 'LocalStorage'],
    keyFeatures: [
      'Real-time nearby hospital discovery using browser geolocation coordination',
      'Emergency healthcare services directory with quick-call dialing',
      'Blood group availability lookups and critical unit filters',
      'Turn-by-turn route mapping assistance and local preferences persistence',
    ],
    githubUrl: 'https://github.com/tarshith2006/CareRoute',
    isDemoComingSoon: true,
    category: 'Full-Stack',
    accentColor: '#38bdf8', // sky
  },
  {
    id: 'railway-block-planning',
    name: 'AI-Powered Railway Block Planning',
    tagline: 'Optimizing asset availability for train operations on Indian Railways.',
    description:
      'An AI-powered railway operations solution designed to support automatic block planning and improve asset availability for train operations.',
    technologies: ['Python', 'AI/ML', 'Optimization', 'HTML', 'CSS', 'JavaScript', 'Vercel'],
    keyFeatures: [
      'Automatic block scheduling algorithms balancing freight and passenger traffic',
      'Predictive maintenance window planning to reduce section congestion',
      'Interactive operator dashboard visualizing railway section occupancy',
      'Designed for Smart India Hackathon operational problem statements',
    ],
    githubUrl: 'https://github.com/tarshith2006/railway-block-planning',
    isDemoComingSoon: true,
    category: 'AI & ML',
    accentColor: '#818cf8', // indigo
  },
  {
    id: 'ipl-auction-simulator',
    name: 'IPL Auction Simulator using AI',
    tagline: 'Simulating high-stakes cricket auction dynamics with autonomous AI bidding agents.',
    description:
      'An intelligent cricket auction simulation engine that models dynamic bidding wars, franchise purse management, squad building constraints, and probabilistic player valuations using autonomous AI bidder agents and statistical pricing models.',
    technologies: ['Python', 'AI/ML', 'Agentic Bidding', 'Data Analytics', 'Probability Modeling', 'Streamlit / React'],
    keyFeatures: [
      'Autonomous AI franchise agents simulating distinct bidding temperaments, purse constraints, and squad requirements',
      'Statistical player valuation engine factoring career strike rates, bowling economies, and auction inflation',
      'Live interactive auction room with bidding paddle controls, dynamic bid increments, and timer pressure',
      'Post-auction analytics evaluating squad balance, overseas slot compliance, and purse utilization efficiency',
    ],
    githubUrl: 'https://github.com/tarshith2006/ipl-auction-simulator-ai',
    isDemoComingSoon: true,
    category: 'AI & ML',
    accentColor: '#f59e0b', // amber / gold
  },
  {
    id: 'msme-business-assistant',
    name: 'Smart Business Assistant for MSMEs',
    tagline: 'Empowering small businesses with AI-guided tools & resources.',
    description:
      'An AI-powered smart business assistant designed to help small businesses and MSMEs access useful business support and digital tools.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'AI', 'Vercel'],
    keyFeatures: [
      'Automated government scheme eligibility lookup for micro and small enterprises',
      'Cashflow guidance templates and inventory prompt calculators',
      'Localized vernacular-friendly interface and digital catalog assistance',
      'Lightweight, responsive design accessible on mobile devices',
    ],
    githubUrl: 'https://github.com/tarshith2006/msme-smart-assistant',
    isDemoComingSoon: true,
    category: 'Web App',
    accentColor: '#34d399', // emerald
  },
  {
    id: 'code-intelligence-agent',
    name: 'Code Intelligence Agent',
    tagline: 'Understanding, analyzing, and synthesizing code with Agentic reasoning.',
    description:
      'An autonomous AI-assisted coding agent focused on tool-use workflows, AST code inspection, complexity diagnostics, and multi-step refactoring proposals.',
    technologies: ['Python', 'Agentic AI', 'LLM Tool Calling', 'Prompt Engineering', 'Web Technologies'],
    keyFeatures: [
      'Autonomous reasoning loop with syntax verification and AST code parsing',
      'Automated time and space complexity heuristics calculation',
      'Multi-step edge-case analysis and refactoring patch generation',
      'Developer interactive query console with contextual memory',
    ],
    githubUrl: 'https://github.com/tarshith2006/code-intelligence-agent',
    isDemoComingSoon: true,
    category: 'Agentic AI',
    accentColor: '#f472b6', // pink
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'sih-hackathon',
    event: 'Smart India Hackathon (SIH)',
    role: 'Team Leader / Team Member',
    project: 'AI-Powered Automatic Block Planning to Maximize Asset Availability for Train Operations on Indian Railways',
    description:
      'Participated in Smart India Hackathon and worked on an AI-powered railway operations solution. Collaborated closely with teammates to design algorithmic block scheduling models, address line-capacity challenges, and deliver technical presentations.',
    period: '2024 - 2025',
    tags: ['Team Leadership', 'Python', 'AI/Optimization', 'Railway Logistics'],
    type: 'Hackathon',
  },
  {
    id: 'vibe-coding-event',
    event: 'AI & Vibe Coding Challenge',
    role: 'Developer & Presenter',
    project: 'CareRoute - Emergency Healthcare Discovery',
    description:
      'Participated in an AI & Vibe Coding event and developed an emergency healthcare discovery application. Implemented rapid human-in-the-loop prototyping techniques to deliver a functional geolocation-backed healthcare finder.',
    period: '2025',
    tags: ['CareRoute', 'Vibe Coding', 'React', 'Rapid Prototyping'],
    type: 'AI Event',
  },
  {
    id: 'msme-workshop',
    event: 'MSME Workshop',
    role: 'Participant & Developer',
    project: 'Code Intelligence Agent',
    description:
      'Participated in an MSME workshop as an active participant and prepared an autonomous Code Intelligence Agent. Built agentic workflows for AST code parsing, syntax inspection, algorithmic complexity diagnostics, and developer productivity tooling for micro and small software teams.',
    period: '2025',
    tags: ['MSME Workshop', 'Participant', 'Code Intelligence Agent', 'Python', 'Agentic AI'],
    type: 'Workshop',
  },
  {
    id: 'promptathon-2k26',
    event: 'Promptathon 2K26',
    role: 'Participant & Developer',
    project: 'Smart Business Assistant for Small Businesses & MSMEs',
    description:
      'Participated in Promptathon 2K26 as an active participant and built an AI-powered smart business assistant specifically tailored for small businesses and MSMEs. Architected targeted prompt engineering workflows, automated government scheme eligibility lookups, and practical digital enablement tools for local merchants.',
    period: '2026',
    tags: ['Promptathon 2K26', 'Participant', 'Prompt Engineering', 'MSME Tech', 'AI Tools', 'Digital Enablement'],
    type: 'Promptathon',
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: 'achieve-1',
    title: 'Smart India Hackathon Participation',
    description:
      'Selected and competed in the national hackathon solving high-impact operational logistics for Indian Railways.',
    year: '2024 - 2025',
    category: 'Hackathons',
    highlight: 'Railway Operations Problem Statement',
  },
  {
    id: 'achieve-2',
    title: 'Team Leadership & Coordination',
    description:
      'Served as Team Leader, guiding sprint priorities, architecture discussions, and project pitches during hackathons.',
    year: '2024 - Present',
    category: 'Leadership',
    highlight: 'Collaborative Project Delivery',
  },
  {
    id: 'achieve-3',
    title: 'College Technical Events & Demos',
    description:
      'Demonstrated functional software prototypes including CareRoute, the Code Intelligence Agent (MSME Workshop), and AI tools before college faculty and technical reviewers.',
    year: '2024 - 2025',
    category: 'Technical Showcases',
    highlight: 'Interactive Prototype Demos',
  },
  {
    id: 'achieve-4',
    title: 'Articulation Club & Public Speaking',
    description:
      'Actively participated in campus articulation sessions, honing technical speech, impromptu reasoning, and project presentation delivery.',
    year: '2024 - Present',
    category: 'Communication',
    highlight: 'Effective Technical Articulation',
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'btech',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering',
    institution: 'Undergraduate Engineering Program',
    period: '2024 – 2028 (Expected)',
    score: '7.78 / 10',
    scoreType: 'Current CGPA',
    details:
      'Rigorous foundational coursework in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, and Artificial Intelligence.',
    current: true,
  },
  {
    id: 'intermediate',
    degree: 'Intermediate (12th Grade)',
    field: 'Mathematics, Physics & Chemistry (MPC)',
    institution: 'Junior College / State Board',
    period: '2022 – 2024',
    score: '72%',
    scoreType: 'Board Percentage',
    details:
      'Completed Higher Secondary education with 72% in MPC, developing foundational skills in calculus, physics, and analytical problem-solving.',
    current: false,
  },
  {
    id: 'tenth',
    degree: 'Secondary School Certificate (10th Grade)',
    field: 'General STEM & Secondary Curriculum',
    institution: 'High School',
    period: 'Completed 2022',
    score: '91.83%',
    scoreType: 'Board Percentage',
    details:
      'Achieved academic distinction of 91.83%, building strong foundations in mathematics and science leading to computer science engineering.',
    current: false,
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-python-nptel',
    title: 'The Joy of Computing using Python',
    issuer: 'NPTEL',
    date: '2024',
    credentialNote: 'NPTEL / Swayam Certification',
    skillsCovered: ['Python Programming', 'Algorithms & Logic', 'Data Structures', 'Computational Thinking'],
  },
  {
    id: 'cert-web-freecodecamp',
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '2024',
    credentialNote: 'freeCodeCamp Developer Certification',
    skillsCovered: ['HTML5 & Modern CSS3', 'Responsive Layouts', 'Flexbox & CSS Grid', 'Accessibility'],
  },
  {
    id: 'cert-agentic-ai-msme',
    title: 'Agentic AI',
    issuer: 'MSME',
    date: '2025',
    credentialNote: 'MSME Technology Specialization',
    skillsCovered: ['Agentic Workflows', 'Autonomous AI Systems', 'Tool Calling & Chaining', 'Prompt Engineering'],
  },
  {
    id: 'cert-mongodb-skillilearn',
    title: 'MongoDB',
    issuer: 'SkilliLearn',
    date: '2025',
    credentialNote: 'SkilliLearn Certified Credential',
    skillsCovered: ['MongoDB NoSQL', 'Document Modeling', 'Aggregation Framework', 'Database Querying'],
  },
];

export const participationCertificatesData: ParticipationCertificateItem[] = [
  {
    id: 'sih-certificate',
    title: 'Smart India Hackathon (SIH) Participation Certificate',
    event: 'Smart India Hackathon 2024',
    issuer: "Ministry of Education's Innovation Cell (MIC), AICTE & Govt. of India",
    date: '2024 - 2025',
    role: 'Team Leader & Participant',
    project: 'AI-Powered Automatic Block Planning for Indian Railways',
    description:
      'Awarded certificate of participation in the national Smart India Hackathon for engineering an AI-powered railway operations solution to maximize line capacity and automate block section planning.',
    skillsOrTags: ['SIH National Hackathon', 'Team Leader', 'Indian Railways', 'AI Operations', 'Optimization'],
    credentialStatus: 'Verified Certificate of Participation',
    credentialId: 'SIH-2024-PART-TL',
  },
  {
    id: 'promptathon-certificate',
    title: 'Promptathon 2K26 Certificate of Participation',
    event: 'Promptathon 2K26',
    issuer: 'Promptathon 2K26 Organizing Committee',
    date: '2026',
    role: 'Participant & Developer',
    project: 'Smart Business Assistant for Small Businesses & MSMEs',
    description:
      'Awarded certificate of participation in Promptathon 2K26 for developing an AI-driven smart assistant for micro, small, and medium enterprises incorporating prompt engineering workflows and localized business utilities.',
    skillsOrTags: ['Promptathon 2K26', 'Participant', 'Prompt Engineering', 'MSME Digital Assistant', 'AI Prototyping'],
    credentialStatus: 'Verified Competition Credential',
    credentialId: 'PROMPT-2K26-PART',
  },
  {
    id: 'msme-workshop-certificate',
    title: 'MSME Agentic AI Workshop Certificate',
    event: 'MSME Technology Workshop',
    issuer: 'MSME Technology Centre',
    date: '2025',
    role: 'Participant & Developer',
    project: 'Autonomous Code Intelligence Agent',
    description:
      'Certificate of participation awarded for active involvement in the MSME workshop, designing and demonstrating an autonomous Code Intelligence Agent for AST code parsing and complexity diagnostics.',
    skillsOrTags: ['MSME Workshop', 'Participant', 'Code Intelligence Agent', 'AST Parsing', 'Agentic AI'],
    credentialStatus: 'Verified Workshop Credential',
    credentialId: 'MSME-WS-2025-AI',
  },
  {
    id: 'vibe-coding-certificate',
    title: 'AI & Vibe Coding Challenge Participation Certificate',
    event: 'AI & Vibe Coding Challenge',
    issuer: 'Technical Innovation Forum',
    date: '2025',
    role: 'Developer & Presenter',
    project: 'CareRoute - Emergency Healthcare Discovery',
    description:
      'Awarded certificate of participation for demonstrating rapid human-in-the-loop prototyping and engineering CareRoute, an emergency healthcare and hospital discovery web application.',
    skillsOrTags: ['Vibe Coding', 'CareRoute', 'Geolocation API', 'React Vite', 'Rapid Prototyping'],
    credentialStatus: 'Verified Event Credential',
    credentialId: 'VIBE-2025-PART',
  },
];

export const internshipOffersData: InternshipOfferItem[] = [
  {
    id: 'decodelabs',
    company: 'DecodeLabs',
    role: 'Software Development / AI Intern',
    type: 'Official Internship Offer Letter',
    dateReceived: '2025',
    status: 'Offer Received',
    domains: ['AI Engineering', 'Python', 'Backend APIs', 'Automation Systems'],
    description:
      'Received an official internship offer letter from DecodeLabs to work on hands-on software development, intelligent automation pipelines, and backend service integration.',
    keyHighlights: [
      'Formal selection and offer letter received for software development and AI engineering',
      'Focus on scalable backend endpoints, data extraction scripts, and automated workflows',
      'Collaborative engineering sprints working alongside software development teams',
    ],
    accentColor: '#6366f1', // indigo
    badgeText: 'Offer Letter Received',
  },
  {
    id: 'internshala',
    company: 'Internshala',
    role: 'Student Partner & Web Development Intern Candidate',
    type: 'Selection & Offer Credential',
    dateReceived: '2025',
    status: 'Selected',
    domains: ['Web Technologies', 'React', 'Frontend Engineering', 'Tech Community Outreach'],
    description:
      'Selected and received candidate offer credentials through competitive evaluations on the Internshala platform for frontend development and technical student ambassador initiatives.',
    keyHighlights: [
      'Candidate selection and offer letter through Internshala platform evaluations',
      'Assessed on fundamental Computer Science knowledge, modern web execution, and problem solving',
      'Technical collaboration on student development initiatives and community tech engagements',
    ],
    accentColor: '#0284c7', // sky
    badgeText: 'Selected & Offered',
  },
  {
    id: 'futureinterns',
    company: 'FutureInterns',
    role: 'Full-Stack / Python Developer Intern',
    type: 'Official Internship Offer Letter',
    dateReceived: '2025',
    status: 'Offer Received',
    domains: ['Full-Stack Web Dev', 'Python', 'React UI', 'Database Systems'],
    description:
      'Awarded an official internship offer letter from FutureInterns for full-stack web and Python development, focusing on building responsive modules and backend data services.',
    keyHighlights: [
      'Formal offer letter issued for practical full-stack software development cycles',
      'Development of dynamic frontend components and robust Python business logic',
      'Structured sprint deliverables with code reviews and milestone tracking',
    ],
    accentColor: '#10b981', // emerald
    badgeText: 'Offer Letter Received',
  },
  {
    id: 'internspark',
    company: 'InternSpark',
    role: 'Software Engineering Intern',
    type: 'Official Internship Offer Letter',
    dateReceived: '2025',
    status: 'Offer Received',
    domains: ['Software Engineering', 'Data Structures', 'Web Applications', 'Git/GitHub'],
    description:
      'Received an official internship offer letter from InternSpark for software engineering internships covering agile application development, code refactoring, and feature deployment.',
    keyHighlights: [
      'Official offer letter received for software engineering project development',
      'Collaborative version control workflows, agile ticket delivery, and modular web interfaces',
      'Strengthened algorithmic problem solving and practical programming methodologies',
    ],
    accentColor: '#f59e0b', // amber
    badgeText: 'Offer Letter Received',
  },
];
