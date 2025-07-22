import { ReactNode } from 'react';

export interface Feature {
    icon: ReactNode;
    title: string;
    content: string;
  }
  
export interface SectionProps {
    title: string;
    description: string;
    features: Feature[];
  }
  