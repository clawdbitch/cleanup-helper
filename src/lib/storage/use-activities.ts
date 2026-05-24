"use client";

import { useState, useCallback } from "react";
import { getRecentActivities } from "./progress-store";
import type { ActivityItem } from "../workflows/types";

export function useActivities(limit: number = 5) {
  const [activities, setActivities] = useState<ActivityItem[]>(() =>
    getRecentActivities(limit)
  );

  const refresh = useCallback(() => {
    setActivities(getRecentActivities(limit));
  }, [limit]);

  return { activities, refresh };
}
