"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { workflows } from "@/lib/workflows/registry";
import { useWorkflowProgress } from "@/lib/storage/use-workflow-progress";
import { useProgress } from "@/lib/storage/progress-context";

function CheckIcon() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const { overall } = useProgress();

  const currentSlug = pathname.split("/").pop();
  const isWorkflowPage = currentSlug && workflows.some((w) => w.slug === currentSlug);

  // Dashboard: show workflow list
  if (!isWorkflowPage && pathname === "/dashboard") {
    return (
      <aside className="w-full lg:w-64 flex-shrink-0">
        <div className="glass-card rounded-xl p-4">
          <h3 className="text-sm font-semibold text-white mb-3">Workflows</h3>
          <ul className="space-y-1">
            {workflows.map((wf) => {
              const { completion } = useWorkflowProgress(wf.slug, wf.steps.length);
              const isActive = `/workflow/${wf.slug}` === pathname;
              return (
                <li key={wf.slug}>
                  <Link
                    href={`/workflow/${wf.slug}`}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all ${
                      isActive
                        ? "bg-primary-500/15 text-primary-400 font-medium"
                        : "text-neutral-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="text-base flex-shrink-0">{wf.icon}</span>
                    <span className="flex-1 truncate">{wf.title}</span>
                    {completion > 0 && (
                      <span className={`text-xs flex-shrink-0 ${
                        completion === 100 ? "text-success-500" : "text-neutral-500"
                      }`}>
                        {completion}%
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    );
  }

  // Workflow pages: show step navigation
  if (isWorkflowPage && currentSlug) {
    const workflow = workflows.find((w) => w.slug === currentSlug);
    if (!workflow) return null;

    const { progress, isComplete } = useWorkflowProgress(
      workflow.slug,
      workflow.steps.length
    );

    return (
      <aside className="w-full lg:w-72 flex-shrink-0">
        <div className="glass-card rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">{workflow.icon}</span>
            <h3 className="font-semibold text-white text-sm">{workflow.title}</h3>
          </div>

          {progress && (
            <div className="mb-4">
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-1.5">
                <span>
                  Step <span className="text-white">{progress.completedSteps.length + 1}</span> of {workflow.steps.length}
                </span>
                <span>
                  {progress.completedSteps.length}/{workflow.steps.length}
                </span>
              </div>
              <div className="w-full h-1.5 bg-neutral-700/50 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-cyan transition-all"
                  style={{
                    width: `${(progress.completedSteps.length / workflow.steps.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          )}

          <ul className="space-y-0.5">
            {workflow.steps.map((step) => {
              const stepNumber = parseInt(step.id.replace("step-", ""), 10);
              const isCompleted = progress?.completedSteps.includes(step.id);
              const isCurrent = progress?.currentStep === step.id;
              return (
                <li key={step.id}>
                  <Link
                    href={`/workflow/${workflow.slug}?step=${step.id}`}
                    className={`flex items-start gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
                      isCurrent
                        ? "bg-primary-500/15 text-primary-400 font-medium"
                        : "text-neutral-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                        isCompleted
                          ? "bg-success-500/20 text-success-500"
                          : isCurrent
                          ? "bg-primary-500/20 text-primary-400"
                          : "bg-neutral-700/30 text-neutral-500"
                      }`}
                    >
                      {isCompleted ? <CheckIcon /> : stepNumber}
                    </span>
                    <span className="flex-1 leading-tight">{step.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {isComplete && (
            <div className="mt-4 p-3 bg-success-500/10 border border-success-500/20 rounded-lg text-sm text-success-500 text-center font-medium">
              ✓ All steps completed!
            </div>
          )}
        </div>
      </aside>
    );
  }

  return null;
}
