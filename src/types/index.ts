export type Language = 'fr' | 'ar' | 'en';

export interface CenterProfile {
  nameFr: string;
  nameAr: string;
  taglineFr: string;
  taglineAr: string;
  phone: string;
  whatsapp: string;
  email: string;
  city: string;
  addressFr: string;
  addressAr: string;
  openingHoursFr: string;
  openingHoursAr: string;
  facebookUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
  aboutTextFr: string;
  aboutTextAr: string;
  teamTextFr: string;
  teamTextAr: string;
  valuesTextFr: string;
  valuesTextAr: string;
  // Checklist readiness status flags
  checklist: {
    hasOfficialName: boolean;
    hasLogo: boolean;
    hasDirectPhone: boolean;
    hasPhysicalAddress: boolean;
    hasOfficialTariffs: boolean;
    hasOfficialDates: boolean;
    hasRealPhotos: boolean;
    hasSocialLinks: boolean;
  };
}

export type ProgramCategory =
  | 'concours_acces'
  | 'langues_certifs'
  | 'formations_pro'
  | 'soutien_scolaire'
  | 'orientation_scolaire'
  | 'forums_etudiants';

export interface ProgramItem {
  id: string;
  category: ProgramCategory;
  code?: string; // e.g., 'ENA', 'ENCG', 'TOEFL'
  titleFr: string;
  titleAr: string;
  subtitleFr: string;
  subtitleAr: string;
  targetAudienceFr: string;
  targetAudienceAr: string;
  subjectsFr: string[];
  subjectsAr: string[];
  methodologyFr: string;
  methodologyAr: string;
  durationFr: string;
  durationAr: string;
  formatFr: string;
  formatAr: string;
  registrationStatusFr: string;
  registrationStatusAr: string;
  disclaimerFr?: string;
  disclaimerAr?: string;
}

export interface InquirySubmission {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  programId: string;
  programTitle: string;
  message: string;
  submittedAt: string;
  status: 'new' | 'contacted' | 'resolved';
}

export interface FAQItem {
  questionFr: string;
  questionAr: string;
  answerFr: string;
  answerAr: string;
  category: string;
}
