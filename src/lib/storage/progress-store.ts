"use client";

import { ProgressData, WorkflowProgress, ActivityItem } from "../workflows/types";

const PROGRESS_KEY = "cleanup:progress";
const ACTIVITIES_KEY = "cleanup:activities";

function getProgress(): ProgressData {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProgress(data: ProgressData): void {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
  } catch {
    console.warn("Failed to save progress to localStorage");
  }
}

export function startWorkflow(slug: string, totalSteps: number): ProgressData {
  const existing = getProgress();
  const now = new Date().toISOString();
  existing[slug] = {
    completedSteps: [],
    currentStep: "step-1",
    startedAt: existing[slug]?.startedAt || now,
    lastVisitedAt: now,
    totalSteps,
  };
  saveProgress(existing);
  addActivity(`Started "${slug.replace(/-/g, " ")}" workflow`);
  return existing;
}

export function completeStep(slug: string, stepId: string): ProgressData {
  const existing = getProgress();
  const wp = existing[slug];
  if (!wp) return existing;

  if (!wp.completedSteps.includes(stepId)) {
    wp.completedSteps.push(stepId);
  }
  wp.lastVisitedAt = new Date().toISOString();

  // Move to next step
  const workflowSteps = Array.from({ length: wp.totalSteps }, (_, i) => `step-${i + 1}`);
  const currentIdx = workflowSteps.indexOf(stepId);
  if (currentIdx >= 0 && currentIdx < workflowSteps.length - 1) {
    wp.currentStep = workflowSteps[currentIdx + 1];
  }

  saveProgress(existing);
  addActivity(`Completed step "${stepId}" in "${slug.replace(/-/g, " ")}"`);
  return existing;
}

export function skipStep(slug: string, stepId: string): ProgressData {
  const existing = getProgress();
  const wp = existing[slug];
  if (!wp) return existing;

  // Add to completed so skipped steps don't reappear
  if (!wp.completedSteps.includes(stepId)) {
    wp.completedSteps.push(stepId);
  }
  wp.lastVisitedAt = new Date().toISOString();

  const workflowSteps = Array.from({ length: wp.totalSteps }, (_, i) => `step-${i + 1}`);
  const currentIdx = workflowSteps.indexOf(stepId);
  if (currentIdx >= 0 && currentIdx < workflowSteps.length - 1) {
    wp.currentStep = workflowSteps[currentIdx + 1];
  }

  saveProgress(existing);
  return existing;
}

export function setCurrentStep(slug: string, stepId: string): ProgressData {
  const existing = getProgress();
  const wp = existing[slug];
  if (!wp) return existing;

  wp.currentStep = stepId;
  wp.lastVisitedAt = new Date().toISOString();
  saveProgress(existing);
  return existing;
}

export function deleteWorkflowProgress(slug: string): ProgressData {
  const existing = getProgress();
  delete existing[slug];
  saveProgress(existing);
  addActivity(`Reset "${slug.replace(/-/g, " ")}" workflow`);
  return existing;
}

export function getWorkflowProgress(slug: string): WorkflowProgress | undefined {
  return getProgress()[slug];
}

export function getCompletionPercentage(slug: string): number {
  const wp = getWorkflowProgress(slug);
  if (!wp) return 0;
  return Math.round((wp.completedSteps.length / wp.totalSteps) * 100);
}

export function getOverallProgress(): { total: number; completed: number; percentage: number } {
  const progress = getProgress();
  let total = 0;
  let completed = 0;
  for (const slug in progress) {
    total += progress[slug].totalSteps;
    completed += progress[slug].completedSteps.length;
  }
  return {
    total,
    completed,
    percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
  };
}

function getActivities(): ActivityItem[] {
  try {
    const raw = localStorage.getItem(ACTIVITIES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function addActivity(action: string): void {
  try {
    const activities = getActivities();
    activities.unshift({
      action,
      timestamp: new Date().toISOString(),
    });
    // Keep only last 20
    if (activities.length > 20) {
      activities.length = 20;
    }
    localStorage.setItem(ACTIVITIES_KEY, JSON.stringify(activities));
  } catch {
    // silently fail
  }
}

export function getRecentActivities(limit: number = 5): ActivityItem[] {
  const activities = getActivities();
  return activities.slice(0, limit);
}

export function exportProgress(): string {
  const progress = getProgress();
  return JSON.stringify(progress, null, 2);
}
