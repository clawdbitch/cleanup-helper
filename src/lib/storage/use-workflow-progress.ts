"use client";

import { useState, useCallback } from "react";
import {
  startWorkflow as _start,
  completeStep as _complete,
  skipStep as _skip,
  setCurrentStep as _set,
  getWorkflowProgress,
  getCompletionPercentage,
  deleteWorkflowProgress as _delete,
} from "./progress-store";
import type { ProgressData, WorkflowProgress } from "../workflows/types";

export function useWorkflowProgress(slug: string, totalSteps: number) {
  const [progress, setProgress] = useState<ProgressData>(() => {
    const existing = getWorkflowProgress(slug);
    if (!existing) {
      return _start(slug, totalSteps);
    }
    return { [slug]: existing };
  });

  const workflowProgress = progress[slug];
  const completion = getCompletionPercentage(slug);
  const isComplete = workflowProgress ? workflowProgress.completedSteps.length >= totalSteps : false;

  const completeStep = useCallback(
    (stepId: string) => {
      const next = _complete(slug, stepId);
      setProgress(next);
    },
    [slug]
  );

  const skipStep = useCallback(
    (stepId: string) => {
      const next = _skip(slug, stepId);
      setProgress(next);
    },
    [slug]
  );

  const goToStep = useCallback(
    (stepId: string) => {
      const next = _set(slug, stepId);
      setProgress(next);
    },
    [slug]
  );

  const resetProgress = useCallback(() => {
    const next = _delete(slug);
    setProgress(next);
  }, [slug]);

  return {
    progress: workflowProgress,
    completion,
    isComplete,
    completeStep,
    skipStep,
    goToStep,
    resetProgress,
  };
}
