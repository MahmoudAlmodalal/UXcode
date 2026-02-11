import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface TechItem {
  name: string;
  category: string;
  icon?: string; // URL or local path if needed, usually just text for this demo
}

export interface Stat {
  value: string;
  label: string;
}

export interface Differentiator {
  title: string;
  description: string;
  icon: LucideIcon;
}