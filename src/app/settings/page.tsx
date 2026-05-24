"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { exportProgress, getOverallProgress } from "@/lib/storage/progress-store";

const PROGRESS_KEY = "cleanup:progress";
const ACTIVITIES_KEY = "cleanup:activities";
const PREFERENCES_KEY = "cleanup:preferences";

type ThemePreference = "light" | "dark" | "system";

interface Preferences {
  theme: ThemePreference;
  collapsedSidebar: boolean;
  showCompletedSteps: boolean;
}

const defaultPreferences: Preferences = {
  theme: "system",
  collapsedSidebar: false,
  showCompletedSteps: true,
};

function getPreferences(): Preferences {
  try {
    const raw = localStorage.getItem(PREFERENCES_KEY);
    return raw ? { ...defaultPreferences, ...JSON.parse(raw) } : defaultPreferences;
  } catch {
    return defaultPreferences;
  }
}

function savePreferences(prefs: Preferences): void {
  try {
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(prefs));
  } catch {
    console.warn("Failed to save preferences");
  }
}

function applyTheme(theme: ThemePreference) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else if (theme === "light") {
    root.classList.remove("dark");
  } else {
    // system
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }
}

export default function SettingsPage() {
  const [preferences, setPreferences] = useState<Preferences>(defaultPreferences);
  const [theme, setTheme] = useState<ThemePreference>("system");
  const [collapsedSidebar, setCollapsedSidebar] = useState(false);
  const [showCompletedSteps, setShowCompletedSteps] = useState(true);
  const [resetConfirmed, setResetConfirmed] = useState(false);
  const [resetMessage, setResetMessage] = useState("");
  const [importMessage, setImportMessage] = useState("");
  const [exportMessage, setExportMessage] = useState("");

  useEffect(() => {
    const prefs = getPreferences();
    setPreferences(prefs);
    setTheme(prefs.theme);
    setCollapsedSidebar(prefs.collapsedSidebar);
    setShowCompletedSteps(prefs.showCompletedSteps);
    applyTheme(prefs.theme);
  }, []);

  const handleThemeChange = useCallback(
    (newTheme: ThemePreference) => {
      setTheme(newTheme);
      applyTheme(newTheme);
      const updated = { ...preferences, theme: newTheme };
      setPreferences(updated);
      savePreferences(updated);
    },
    [preferences]
  );

  const handleSidebarToggle = useCallback(() => {
    const newVal = !collapsedSidebar;
    setCollapsedSidebar(newVal);
    const updated = { ...preferences, collapsedSidebar: newVal };
    setPreferences(updated);
    savePreferences(updated);
  }, [collapsedSidebar, preferences]);

  const handleShowCompletedToggle = useCallback(() => {
    const newVal = !showCompletedSteps;
    setShowCompletedSteps(newVal);
    const updated = { ...preferences, showCompletedSteps: newVal };
    setPreferences(updated);
    savePreferences(updated);
  }, [showCompletedSteps, preferences]);

  const handleExport = useCallback(() => {
    try {
      const data = exportProgress();
      const blob = new Blob([data], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `cleanup-helper-progress-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setExportMessage("Progress exported successfully!");
      setTimeout(() => setExportMessage(""), 3000);
    } catch {
      setExportMessage("Failed to export progress.");
      setTimeout(() => setExportMessage(""), 3000);
    }
  }, []);

  const handleImport = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        // Validate it looks like progress data
        if (typeof data !== "object" || data === null) {
          throw new Error("Invalid format");
        }
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
        setImportMessage("Progress imported successfully! Page will refresh.");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } catch {
        setImportMessage("Failed to import: invalid file format.");
        setTimeout(() => setImportMessage(""), 3000);
      }
    };
    reader.readAsText(file);
    // Reset input so same file can be re-imported
    e.target.value = "";
  }, []);

  const handleReset = useCallback(() => {
    if (!resetConfirmed) {
      setResetConfirmed(true);
      return;
    }
    try {
      localStorage.removeItem(PROGRESS_KEY);
      localStorage.removeItem(ACTIVITIES_KEY);
      setResetMessage("All progress has been reset.");
      setResetConfirmed(false);
      setTimeout(() => setResetMessage(""), 3000);
    } catch {
      setResetMessage("Failed to reset progress.");
      setTimeout(() => setResetMessage(""), 3000);
    }
  }, [resetConfirmed]);

  const overall = getOverallProgress();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/dashboard" className="text-neutral-400 hover:text-primary-400 transition-colors">
                Dashboard
              </Link>
            </li>
            <li className="text-neutral-500">/</li>
            <li className="text-neutral-300 font-medium">Settings</li>
          </ol>
        </nav>

        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-white mb-2">Settings</h1>
          <p className="text-neutral-400">
            Customize your Cleanup Helper experience. All preferences are stored locally in your
            browser.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Appearance */}
          <div className="glass-card rounded-xl p-6 glow-hover">
            <h2 className="text-lg font-semibold text-white mb-4">Appearance</h2>

            {/* Theme */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-neutral-300 mb-2">Theme</label>
              <div className="flex gap-2">
                {(["light", "dark", "system"] as ThemePreference[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => handleThemeChange(t)}
                    className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                      theme === t
                        ? "bg-primary-500/10 border-primary-500/20 text-primary-400"
                        : "bg-bg-elevated border-white/5 text-neutral-400 hover:bg-neutral-700/30"
                    }`}
                  >
                    {t === "light" ? "☀️ Light" : t === "dark" ? "🌙 Dark" : "💻 System"}
                  </button>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <label className="block text-sm font-medium text-neutral-300">
                    Collapse sidebar
                  </label>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Hide the sidebar on workflow pages to focus on content
                  </p>
                </div>
                <button
                  onClick={handleSidebarToggle}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    collapsedSidebar ? "bg-primary-500/20" : "bg-neutral-700/30"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      collapsedSidebar ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Show completed */}
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="block text-sm font-medium text-neutral-300">
                    Show completed steps
                  </label>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Display steps you&apos;ve already finished in the sidebar
                  </p>
                </div>
                <button
                  onClick={handleShowCompletedToggle}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    showCompletedSteps ? "bg-primary-500/20" : "bg-neutral-700/30"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      showCompletedSteps ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Data Management */}
          <div className="glass-card rounded-xl p-6 glow-hover">
            <h2 className="text-lg font-semibold text-white mb-4">Data Management</h2>

            {/* Progress summary */}
            <div className="mb-6 p-4 bg-neutral-700/30 rounded-lg">
              <p className="text-sm text-neutral-300 mb-1">Current progress</p>
              <p className="text-2xl font-semibold text-white">
                {overall.completed} / {overall.total} steps
              </p>
              <p className="text-sm text-neutral-400">
                {overall.percentage}% overall completion
              </p>
            </div>

            {/* Export */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-neutral-300 mb-1">
                Export progress
              </label>
              <p className="text-xs text-neutral-400 mb-2">
                Download your progress data as a JSON file for backup
              </p>
              <button
                onClick={handleExport}
                className="btn-primary text-sm"
              >
                Export Progress
              </button>
              {exportMessage && (
                <p className="mt-2 text-sm text-success-500">{exportMessage}</p>
              )}
            </div>

            {/* Import */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-neutral-300 mb-1">
                Import progress
              </label>
              <p className="text-xs text-neutral-400 mb-2">
                Restore progress from a previously exported JSON file
              </p>
              <label className="inline-flex cursor-pointer">
                <span className="btn-secondary text-sm">
                  Choose File
                </span>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImport}
                  className="sr-only"
                />
              </label>
              {importMessage && (
                <p className="mt-2 text-sm text-success-500">{importMessage}</p>
              )}
            </div>

            {/* Reset */}
            <div className="pt-4 border-t border-white/5">
              <label className="block text-sm font-medium text-neutral-300 mb-1">
                Reset all progress
              </label>
              <p className="text-xs text-neutral-400 mb-3">
                This will permanently delete all your progress and activity history. This cannot be
                undone.
              </p>
              {!resetConfirmed ? (
                <button
                  onClick={handleReset}
                  className="px-4 py-2 bg-error-500/10 text-error-500 rounded-lg text-sm font-medium hover:bg-error-500/20 transition-colors"
                >
                  Reset All Progress
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 bg-error-500/20 text-error-500 rounded-lg text-sm font-medium hover:bg-error-500/30 transition-colors"
                  >
                    Confirm — Delete Everything
                  </button>
                  <button
                    onClick={() => setResetConfirmed(false)}
                    className="btn-secondary text-sm"
                  >
                    Cancel
                  </button>
                </div>
              )}
              {resetMessage && (
                <p className="mt-2 text-sm text-error-500">{resetMessage}</p>
              )}
            </div>
          </div>
        </div>

        {/* About section */}
        <div className="mt-6 glass-card rounded-xl p-6 glow-hover">
          <h2 className="text-lg font-semibold text-white mb-4">About</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-neutral-400">Version</span>
              <p className="font-medium text-white">1.0.0</p>
            </div>
            <div>
              <span className="text-neutral-400">Storage</span>
              <p className="font-medium text-white">Browser localStorage</p>
            </div>
            <div>
              <span className="text-neutral-400">Data collected</span>
              <p className="font-medium text-success-500">None</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
