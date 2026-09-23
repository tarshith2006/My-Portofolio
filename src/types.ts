export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  demoUrl?: string;
  isDemoComingSoon?: boolean;
  category: 'Full-Stack' | 'AI & ML' | 'Agentic AI' | 'Web App';
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: 'Proficient' | 'Intermediate' | 'Familiar' | 'Learning';
    description?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  event: string;
  role: string;
  project: string;
  description: string;
  period: string;
  tags: string[];
  type: 'Hackathon' | 'AI Event' | 'Entrepreneurship' | 'Workshop' | 'Promptathon';
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  year: string;
  category: string;
  highlight?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  period: string;
  score: string;
  scoreType: string;
  details: string;
  current?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialNote: string;
  skillsCovered: string[];
}

export interface ParticipationCertificateItem {
  id: string;
  title: string;
  event: string;
  issuer: string;
  date: string;
  role: string;
  project?: string;
  description: string;
  skillsOrTags: string[];
  credentialStatus: string;
  credentialId?: string;
}

export interface InternshipOfferItem {
  id: string;
  company: string;
  role: string;
  type: string;
  dateReceived: string;
  status: 'Offer Received' | 'Selected';
  domains: string[];
  description: string;
  keyHighlights: string[];
  accentColor: string;
  badgeText?: string;
}
