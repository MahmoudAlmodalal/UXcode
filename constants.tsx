import { 
  Brain, 
  Code, 
  Zap, 
  Users, 
  Target, 
  ShieldCheck, 
  Cpu, 
  Layers 
} from 'lucide-react';
import { NavItem, Service, ProcessStep, Differentiator, Stat } from './types';

export const COMPANY_NAME = "UXCode";
export const CONTACT_EMAIL = "hello@uxcode.tech";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_STATS: Stat[] = [
  { value: "50+", label: "Projects Delivered" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

export const SERVICES: Service[] = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Leverage the power of Generative AI and Machine Learning to automate workflows and unlock insights.',
    icon: Brain,
    benefits: ['Custom LLM Integration', 'Predictive Analytics', 'Process Automation']
  },
  {
    id: 'tech-dev',
    title: 'Technical Development',
    description: 'Robust, scalable web and mobile applications built with modern frameworks and best practices.',
    icon: Code,
    benefits: ['Full-Stack Development', 'Cloud Architecture', 'High-Performance APIs']
  },
  {
    id: 'digital-transform',
    title: 'Digital Transformation',
    description: 'Modernize legacy systems and adopt cloud-native technologies to stay ahead of the curve.',
    icon: Zap,
    benefits: ['Legacy Migration', 'Cloud Strategy', 'Tech Stack Modernization']
  },
  {
    id: 'consulting',
    title: 'Consulting & Strategy',
    description: 'Strategic guidance to align your technology roadmap with business objectives.',
    icon: Users,
    benefits: ['CTO as a Service', 'Technical Audits', 'Architecture Review']
  }
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    title: 'Expertise Deep Dive',
    description: 'Our team consists of senior engineers and AI researchers, not junior developers.',
    icon: Layers
  },
  {
    title: 'Proven Results',
    description: 'We focus on measurable ROI. If it does not drive business value, we do not build it.',
    icon: Target
  },
  {
    title: 'Security First',
    description: 'Enterprise-grade security protocols integrated into every stage of development.',
    icon: ShieldCheck
  },
  {
    title: 'Future Proof',
    description: 'Scalable architectures designed to grow with your business for years to come.',
    icon: Cpu
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We dive deep into your business needs, pain points, and goals to understand the full picture.'
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We craft a comprehensive technical roadmap and solution architecture tailored to you.'
  },
  {
    number: '03',
    title: 'Development',
    description: 'Our experts build your solution using agile methodologies with frequent check-ins.'
  },
  {
    number: '04',
    title: 'Launch & Scale',
    description: 'Smooth deployment to production with ongoing support and optimization.'
  }
];

export const TECH_STACK = {
  "AI & ML": ["TensorFlow", "PyTorch", "OpenAI", "Gemini", "Hugging Face"],
  "Frontend": ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue"],
  "Backend": ["Node.js", "Python", "Go", "PostgreSQL", "GraphQL"],
  "Cloud": ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"]
};