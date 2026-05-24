"use client";

import Link from "next/link";
import Sidebar from "@/components/layout/Sidebar";
import { workflows } from "@/lib/workflows/registry";
import { useWorkflowProgress } from "@/lib/storage/use-workflow-progress";
import { useProgress } from "@/lib/storage/progress-context";

function difficultyLabel(difficulty: string) {
  switch (difficulty) {
    case "easy":
      return "Easy";
    case "moderate":
      return "Moderate";
    case "complex":
      return "Complex";
    default:
      return difficulty;
  }
}

function difficultyColor(difficulty: string) {
  switch (difficulty) {
    case "easy":
      return "text-success-500 bg-success-500/10";
    case "moderate":
      return "text-warning-500 bg-warning-500/10";
    case "complex":
      return "text-error-500 bg-error-500/10";
    default:
      return "text-neutral-400 bg-neutral-700/50";
  }
}

function ShieldIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V6l7-4z" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export default function DashboardPage() {
  const { overall } = useProgress();

  return (
    <div className="flex-1 bg-grid">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-neutral-400 mb-2">
            <Link href="/" className="hover:text-primary-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Dashboard</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Your Cleanup Dashboard</h1>
          <p className="text-neutral-400 max-w-xl">
            Choose a workflow to start cleaning up your digital footprint. Each step guides you
            through the process with direct links and clear instructions.
          </p>
        </div>

        {/* Overall progress card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 mb-8 glow-hover">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400">
                <TargetIcon />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">Overall Progress</h2>
                <p className="text-sm text-neutral-400">
                  {overall.completed} of {overall.total} steps completed across all workflows
                </p>
              </div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-gradient">{overall.percentage}</span>
              <span className="text-lg text-neutral-400">%</span>
            </div>
          </div>
          <div className="w-full h-3 bg-neutral-700/50 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${overall.percentage}%`,
                background:
                  overall.percentage === 100
                    ? "linear-gradient(90deg, #34d399, #22d3ee)"
                    : "linear-gradient(90deg, #4f7cff, #22d3ee, #a78bfa)",
              }}
            />
          </div>
          {overall.percentage === 100 && (
            <div className="mt-4 flex items-center gap-2 text-success-500 text-sm font-medium">
              <CheckCircleIcon />
              All workflows complete! Your digital footprint is significantly reduced.
            </div>
          )}
        </div>

        {/* Main content: Sidebar + Workflow cards */}
        <div className="flex flex-col lg:flex-row gap-6">
          <Sidebar />

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">Available Workflows</h2>
              <span className="text-sm text-neutral-400">
                {workflows.length} workflows · {workflows.reduce((sum, wf) => sum + wf.steps.length, 0)} total steps
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {workflows.map((wf) => {
                const { completion, isComplete, progress } = useWorkflowProgress(
                  wf.slug,
                  wf.steps.length
                );

                return (
                  <Link
                    key={wf.slug}
                    href={`/workflow/${wf.slug}`}
                    className="group glass-card rounded-xl p-5 glow-hover block"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-2xl">{wf.icon}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${difficultyColor(wf.difficulty)}`}>
                          {difficultyLabel(wf.difficulty)}
                        </span>
                        {isComplete && (
                          <span className="text-xs bg-success-500/20 text-success-500 rounded-full px-2 py-0.5 font-medium flex items-center gap-1">
                            <CheckCircleIcon />
                            Done
                          </span>
                        )}
                      </div>
                    </div>
                    <h3 className="font-semibold text-white group-hover:text-primary-400 transition-colors mb-1">
                      {wf.title}
                    </h3>
                    <p className="text-sm text-neutral-400 mb-4 line-clamp-2">
                      {wf.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-neutral-500 mb-3">
                      <span>{wf.estimatedTime}</span>
                      <span>{wf.steps.length} steps</span>
                    </div>
                    {completion > 0 && (
                      <div>
                        <div className="flex items-center justify-between text-xs text-neutral-400 mb-1.5">
                          <span>Progress</span>
                          <span className="font-medium text-white">{completion}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-neutral-700/50 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{
                              width: `${completion}%`,
                              background:
                                completion === 100
                                  ? "#34d399"
                                  : "linear-gradient(90deg, #4f7cff, #22d3ee)",
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
