// Workflow and step type definitions

export interface ExternalLink {
  label: string;
  url: string;
  description?: string;
}

export interface Step {
  id: string;
  title: string;
  description: string;
  externalLinks?: ExternalLink[];
  warnings?: string[];
  estimatedDuration?: string;
}

export interface Workflow {
  slug: string;
  title: string;
  description: string;
  category: string;
  difficulty: "easy" | "moderate" | "complex";
  estimatedTime: string;
  icon: string;
  steps: Step[];
}

export interface WorkflowProgress {
  completedSteps: string[];
  currentStep: string;
  startedAt: string;
  lastVisitedAt: string;
  totalSteps: number;
}

export interface ProgressData {
  [workflowSlug: string]: WorkflowProgress;
}

export interface Preferences {
  theme: "light" | "dark" | "system";
  collapsedSidebar: boolean;
  showCompletedSteps: boolean;
  language: "en";
}

export interface ActivityItem {
  action: string;
  timestamp: string;
}
