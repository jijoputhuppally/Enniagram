export interface Wing {
  number: number;
  name: string;
  description: string;
  longDescription: string;
  keyMotivation: string;
  behaviorExample: string;
}

export interface Relationship {
  integration: { type: number; description: string };
  disintegration: { type: number; description: string };
  compatibility: string;
  communicationStyle: string;
  conflictStyle: string;
  supportNeeds: string;
  growthAdvice: string[];
  redemptionType: number;
  avoidType: number;
  redemptionExplanation: string;
  avoidExplanation: string;
}

export interface Type {
  number: number;
  name: string;
  tagline: string;
  headerImage: string;
  description: string;
  coreFear: string;
  coreDesire: string;
  keyMotivations: string;
  traits: string[];
  strengths: string[];
  weaknesses: string[];
  color: string;
  wings: Wing[];
  relationships: Relationship;
  longDescription: string;
  animal: string;
  animalImage: string;
  prayer: string;
  redemption: string;
  characterChange: string[];
  symbol: string;
  symbolImage: string;
  saint: string;
  saintImage: string;
  bibleVerse: string;
  happinessPath: string;
  familyLife: string;
  intimacy: string;
  sexuality: string;
  lifestyle: string;
  spiritualLife: string;
  socialLife: string;
  fortunes: string;
  famousPeople: string[];
}

export interface QuizQuestion {
  id: number;
  text: string;
  type: number;
}

export interface SavedResult {
  id: string;
  typeNumber: number;
  wingNumber: number | null;
  date: string;
  notes: string;
}
