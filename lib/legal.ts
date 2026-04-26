import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

export type LegalDocumentId =
  | "kritr-terms"
  | "kritr-privacy"
  | "mylabstory-terms"
  | "mylabstory-privacy";

export type LegalBlock =
  | {
      type: "heading";
      depth: 2 | 3;
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };

export type LegalDocument = {
  id: LegalDocumentId;
  title: string;
  effectiveDate: string;
  description: string;
  intro: string;
  blocks: LegalBlock[];
};

const registry: Record<LegalDocumentId, string> = {
  "kritr-terms": "content/legal/kritr/terms.md",
  "kritr-privacy": "content/legal/kritr/privacy.md",
  "mylabstory-terms": "content/legal/mylabstory/terms.md",
  "mylabstory-privacy": "content/legal/mylabstory/privacy.md"
};

type Frontmatter = {
  title: string;
  effectiveDate: string;
  description: string;
  intro: string;
};

function stripQuotes(value: string) {
  return value.replace(/^["']|["']$/g, "").trim();
}

function parseFrontmatter(raw: string): { frontmatter: Frontmatter; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    throw new Error("Legal document is missing frontmatter.");
  }

  const [, frontmatterBlock, body] = match;
  const fields = frontmatterBlock.split(/\r?\n/).reduce<Record<string, string>>(
    (acc, line) => {
      const separatorIndex = line.indexOf(":");

      if (separatorIndex === -1) {
        return acc;
      }

      const key = line.slice(0, separatorIndex).trim();
      const value = stripQuotes(line.slice(separatorIndex + 1));
      acc[key] = value;
      return acc;
    },
    {}
  );

  return {
    frontmatter: {
      title: fields.title ?? "Legal Document",
      effectiveDate: fields.effectiveDate ?? "",
      description: fields.description ?? "",
      intro: fields.intro ?? ""
    },
    body: body.trim()
  };
}

function pushParagraph(blocks: LegalBlock[], paragraphLines: string[]) {
  if (paragraphLines.length === 0) {
    return;
  }

  blocks.push({
    type: "paragraph",
    text: paragraphLines.join(" ").trim()
  });
  paragraphLines.length = 0;
}

function parseMarkdown(body: string): LegalBlock[] {
  const blocks: LegalBlock[] = [];
  const lines = body.split(/\r?\n/);
  const paragraphLines: string[] = [];

  for (let index = 0; index < lines.length; index += 1) {
    const trimmed = lines[index].trim();

    if (!trimmed) {
      pushParagraph(blocks, paragraphLines);
      continue;
    }

    const headingMatch = trimmed.match(/^(#{2,3})\s+(.*)$/);
    if (headingMatch) {
      pushParagraph(blocks, paragraphLines);
      blocks.push({
        type: "heading",
        depth: headingMatch[1].length as 2 | 3,
        text: headingMatch[2].trim()
      });
      continue;
    }

    const listMatch = trimmed.match(/^[-*]\s+(.*)$/);
    if (listMatch) {
      pushParagraph(blocks, paragraphLines);
      const items = [listMatch[1].trim()];

      while (index + 1 < lines.length) {
        const nextLine = lines[index + 1].trim();
        const nextListItem = nextLine.match(/^[-*]\s+(.*)$/);

        if (!nextListItem) {
          break;
        }

        items.push(nextListItem[1].trim());
        index += 1;
      }

      blocks.push({
        type: "list",
        items
      });
      continue;
    }

    if (trimmed === "---") {
      pushParagraph(blocks, paragraphLines);
      continue;
    }

    paragraphLines.push(trimmed);
  }

  pushParagraph(blocks, paragraphLines);
  return blocks;
}

export const getLegalDocument = cache(async (id: LegalDocumentId) => {
  const filePath = path.join(process.cwd(), registry[id]);
  const raw = await readFile(filePath, "utf8");
  const { frontmatter, body } = parseFrontmatter(raw);

  return {
    id,
    ...frontmatter,
    blocks: parseMarkdown(body)
  } satisfies LegalDocument;
});
