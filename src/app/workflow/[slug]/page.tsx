"use client";

import Link from "next/link";
import { useSearchParams, useParams } from "next/navigation";
import { workflows, getPrevWorkflow, getNextWorkflow } from "@/lib/workflows/registry";
import { useWorkflowProgress } from "@/lib/storage/use-workflow-progress";
import { useProgress } from "@/lib/storage/progress-context";

/* ─── SVG Icons ─── */

function ArrowLeftIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
    </svg>
  );
}

function SkipIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 4 15 12 5 20 5 4" /><line x1="19" y1="5" x2="19" y2="19" />
    </svg>
  );
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

/* ─── Component ─── */

function WorkflowPageContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const slug = params.slug as string;
  const workflow = workflows.find((w) => w.slug === slug);
  const { refresh } = useProgress();

  if (!workflow) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 py-12 text-center glass-card rounded-2xl p-8">
          <div className="w-16 h-16 rounded-full bg-error-500/10 flex items-center justify-center text-error-500 mx-auto mb-4">
            <AlertIcon />
          </div>
          <h1 className="text-xl font-semibold text-white mb-2">Workflow not found</h1>
          <p className="text-neutral-400 mb-6">
            The workflow &quot;{slug}&quot; doesn&apos;t exist.
          </p>
          <Link
            href="/dashboard"
            className="btn-primary inline-flex"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const stepId = searchParams.get("step") || "step-1";
  const step = workflow.steps.find((s) => s.id === stepId);
  const { progress, completion, isComplete, completeStep, skipStep, resetProgress } =
    useWorkflowProgress(workflow.slug, workflow.steps.length);

  if (!step) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 py-12 text-center glass-card rounded-2xl p-8">
          <h1 className="text-xl font-semibold text-white mb-2">Step not found</h1>
          <p className="text-neutral-400 mb-6">The step &quot;{stepId}&quot; doesn&apos;t exist in this workflow.</p>
          <Link
            href={`/workflow/${workflow.slug}`}
            className="btn-primary inline-flex"
          >
            Back to workflow
          </Link>
        </div>
      </div>
    );
  }

  const prevWorkflow = getPrevWorkflow(workflow.slug);
  const nextWorkflow = getNextWorkflow(workflow.slug);
  const isLastStep = step.id === workflow.steps[workflow.steps.length - 1].id;
  const isFirstStep = step.id === workflow.steps[0].id;
  const stepIndex = workflow.steps.findIndex((s) => s.id === step.id);

  const handleComplete = () => {
    completeStep(step.id);
    refresh();
  };

  const handleSkip = () => {
    skipStep(step.id);
    refresh();
  };

  return (
    <div className="flex-1 bg-grid">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-neutral-400 mb-6">
          <Link href="/dashboard" className="hover:text-primary-400 transition-colors flex items-center gap-1">
            <ArrowLeftIcon />
            Dashboard
          </Link>
          <span>/</span>
          <span className="text-white truncate">{workflow.title}</span>
        </div>

        {/* Workflow header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{workflow.icon}</span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">{workflow.title}</h1>
              <div className="flex items-center gap-3 text-sm text-neutral-400 mt-1">
                <span>{workflow.category}</span>
                <span>·</span>
                <span>{workflow.estimatedTime}</span>
                <span>·</span>
                <span className={`font-medium px-2 py-0.5 rounded-full text-xs ${difficultyColor(workflow.difficulty)}`}>
                  {workflow.difficulty}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="glass-card rounded-xl p-4 mb-8">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-neutral-400">
              Step <span className="text-white font-medium">{stepIndex + 1}</span> of {workflow.steps.length}
            </span>
            <span className="font-semibold text-gradient">{completion}% complete</span>
          </div>
          <div className="w-full h-2.5 bg-neutral-700/50 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${completion}%`,
                background:
                  completion === 100
                    ? "linear-gradient(90deg, #34d399, #22d3ee)"
                    : "linear-gradient(90deg, #4f7cff, #22d3ee)",
              }}
            />
          </div>
          {/* Step dots */}
          <div className="flex gap-1 mt-3">
            {workflow.steps.map((s, i) => {
              const isCompleted = progress?.completedSteps.includes(s.id);
              return (
                <button
                  key={s.id}
                  onClick={() => {
                    const url = new URL(window.location.href);
                    url.searchParams.set("step", s.id);
                    window.location.href = url.toString();
                  }}
                  className={`flex-1 h-1.5 rounded-full transition-all ${
                    s.id === step.id
                      ? "bg-primary-400"
                      : isCompleted
                      ? "bg-success-500/60"
                      : "bg-neutral-700/30"
                  } hover:opacity-80`}
                  aria-label={`Go to step ${i + 1}: ${s.title}`}
                />
              );
            })}
          </div>
        </div>

        {/* Step content */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 glow-hover">
          {/* Step title */}
          <div className="flex items-start gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 text-sm font-bold flex-shrink-0 mt-0.5">
              {stepIndex + 1}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-1">{step.title}</h2>
              {step.estimatedDuration && (
                <div className="inline-flex items-center gap-1.5 text-xs text-neutral-400 bg-neutral-700/30 rounded-lg px-2.5 py-1">
                  <ClockIcon />
                  {step.estimatedDuration}
                </div>
              )}
            </div>
          </div>

          {/* Step description */}
          <p className="text-neutral-300 leading-relaxed mb-6">{step.description}</p>

          {/* Warnings */}
          {step.warnings && step.warnings.length > 0 && (
            <div className="mb-6 p-4 bg-warning-500/5 border border-warning-500/20 rounded-xl">
              <div className="flex items-center gap-2 text-warning-500 mb-2">
                <AlertIcon />
                <h4 className="text-sm font-semibold">Important Notes</h4>
              </div>
              <ul className="space-y-1.5 text-sm text-neutral-300">
                {step.warnings.map((w, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-warning-500 mt-1">•</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* External links */}
          {step.externalLinks && step.externalLinks.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-neutral-300 mb-3">Required Links</h3>
              <div className="space-y-2">
                {step.externalLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 bg-primary-500/5 border border-primary-500/10 rounded-xl hover:bg-primary-500/10 hover:border-primary-500/20 transition-all text-sm group"
                  >
                    <ExternalLinkIcon />
                    <div className="flex-1 min-w-0">
                      <span className="font-medium text-primary-400 group-hover:text-primary-300 transition-colors">
                        {link.label}
                      </span>
                      {link.description && (
                        <span className="text-neutral-500 ml-2">({link.description})</span>
                      )}
                    </div>
                    <span className="text-xs text-neutral-600 flex-shrink-0">
                      opens externally
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Step actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/5">
            {!isFirstStep && (
              <Link
                href={`/workflow/${workflow.slug}?step=${
                  workflow.steps[stepIndex - 1].id
                }`}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-bg-elevated/50 border border-white/5 text-neutral-300 rounded-xl hover:bg-bg-elevated hover:text-white transition-all text-sm font-medium"
              >
                <ArrowLeftIcon />
                Previous
              </Link>
            )}

            {!isComplete && !isLastStep && (
              <button
                onClick={handleSkip}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-bg-elevated/50 border border-white/5 text-neutral-400 rounded-xl hover:bg-bg-elevated hover:text-neutral-300 transition-all text-sm font-medium"
              >
                <SkipIcon />
                Skip
              </button>
            )}

            <button
              onClick={handleComplete}
              disabled={isComplete}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isComplete
                  ? "bg-success-500/20 text-success-500 border border-success-500/30 cursor-default"
                  : "btn-primary"
              }`}
            >
              {isComplete ? (
                <>
                  <CheckIcon />
                  Completed
                </>
              ) : (
                "Mark as Complete"
              )}
            </button>

            {isLastStep ? (
              nextWorkflow ? (
                <Link
                  href={`/workflow/${nextWorkflow.slug}`}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-success-500/20 text-success-500 border border-success-500/30 rounded-xl hover:bg-success-500/30 transition-all text-sm font-medium"
                >
                  Next: {nextWorkflow.title}
                  <ArrowRightIcon />
                </Link>
              ) : (
                <Link
                  href="/dashboard"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-success-500/20 text-success-500 border border-success-500/30 rounded-xl hover:bg-success-500/30 transition-all text-sm font-medium"
                >
                  <CheckIcon />
                  All Done!
                </Link>
              )
            ) : (
              <Link
                href={`/workflow/${workflow.slug}?step=${
                  workflow.steps[stepIndex + 1].id
                }`}
                className="flex items-center justify-center gap-2 px-4 py-3 btn-primary"
              >
                Next Step
                <ArrowRightIcon />
              </Link>
            )}
          </div>

          {/* Reset button */}
          <div className="mt-6 text-center">
            <button
              onClick={resetProgress}
              className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-error-400 transition-colors"
            >
              <RefreshIcon />
              Reset this workflow
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function WorkflowPage() {
  return <WorkflowPageContent />;
}
