export type ServiceCategory =
  | 'Industrial Automation'
  | 'Industrial Automation and Control'
  | 'Process Optimisation'
  | 'Software & Web Applications'
  | 'Software and Web Application Development'
  | 'Mechanical Design & CAD'
  | 'Mechanical Design and Product Development'
  | 'Electronics & Embedded'
  | 'Electronics and Embedded Systems'
  | 'System Integration'
  | 'Engineering System Integration';

export interface ServiceItem {
  id: string;
  title: ServiceCategory;
  shortDescription: string;
  capabilities: string[];
  icon: string;
  image?: string;
}

export interface TechnologyCategory {
  id: string;
  category: string;
  description: string;
  technologies: {
    name: string;
    description: string;
  }[];
}

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
  focus: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categoryType: 'automation' | 'embedded' | 'cad' | 'software';
  shortDescription: string;
  image: string;
  problem: string;
  solution: string;
  outcomeStatus: string;
  outcomeDetails: string;
  technologies: string[];
  specifications: { [key: string]: string };
}

export interface InquiryFormData {
  fullName: string;
  companyName?: string;
  email: string;
  phone?: string;
  service: string;
  budget?: string;
  description: string;
}
