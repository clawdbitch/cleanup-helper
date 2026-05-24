"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { getOverallProgress, getRecentActivities } from "./progress-store";
import { ProgressData, ActivityItem } from "../workflows/types";

interface ProgressContextValue {
  overall: { total: number; completed: number; percentage: number };
  activities: ActivityItem[];
  refresh: () => void;
}

const ProgressContext = createContext<ProgressContextValue | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [overall, setOverall] = useState(() => getOverallProgress());
  const [activities, setActivities] = useState(() => getRecentActivities(5));

  const refresh = useCallback(() => {
    setOverall(getOverallProgress());
    setActivities(getRecentActivities(5));
  }, []);

  return (
    <ProgressContext.Provider value={{ overall, activities, refresh }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (ctx === undefined) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return ctx;
}
