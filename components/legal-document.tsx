import { Fragment, ReactNode } from "react";

import { LegalBlock, LegalDocument } from "@/lib/legal";

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    return <Fragment key={`${part}-${index}`}>{part}</Fragment>;
  });
}

function renderBlock(block: LegalBlock, index: number) {
  if (block.type === "heading") {
    if (block.depth === 2) {
      return (
        <h2
          key={`${block.text}-${index}`}
          className="pt-4 text-2xl font-semibold text-[var(--ink)]"
        >
          {renderInline(block.text)}
        </h2>
      );
    }

    return (
      <h3
        key={`${block.text}-${index}`}
        className="pt-2 text-lg font-semibold text-[var(--ink)]"
      >
        {renderInline(block.text)}
      </h3>
    );
  }

  if (block.type === "list") {
    return (
      <ul
        key={`${block.items[0]}-${index}`}
        className="list-disc space-y-2 pl-6 text-base leading-8 text-[var(--muted-ink)]"
      >
        {block.items.map((item) => (
          <li key={item}>{renderInline(item)}</li>
        ))}
      </ul>
    );
  }

  return (
    <p
      key={`${block.text}-${index}`}
      className="text-base leading-8 text-[var(--muted-ink)]"
    >
      {renderInline(block.text)}
    </p>
  );
}

type LegalDocumentViewProps = {
  document: LegalDocument;
};

export function LegalDocumentView({ document }: LegalDocumentViewProps) {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--line)] bg-white/85 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl">
            {document.title}
          </h1>
          <p className="mt-4 text-sm font-medium text-[var(--muted-ink)]">
            Effective date: {document.effectiveDate}
          </p>
          <p className="mt-6 text-lg leading-8 text-[var(--muted-ink)]">
            {document.intro}
          </p>

          <div className="mt-10 space-y-5">
            {document.blocks.map((block, index) => renderBlock(block, index))}
          </div>
        </div>
      </div>
    </section>
  );
}
