// -----------------------------------------------------------

type TableAlign = "left" | "center" | "right";

// -----------------------------------------------------------

function splitTableRow(line: string): string[] {
  const cleaned = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  return cleaned.split("|").map((cell) => cell.trim());
}

function parseTableAlignments(separatorLine: string): TableAlign[] | null {
  const columns = splitTableRow(separatorLine);
  const alignments: TableAlign[] = [];

  for (const col of columns) {
    if (!/^:?-{3,}:?$/.test(col)) {
      return null;
    }

    const startsWithColon = col.startsWith(":");
    const endsWithColon = col.endsWith(":");

    if (startsWithColon && endsWithColon) {
      alignments.push("center");
    } else if (endsWithColon) {
      alignments.push("right");
    } else {
      alignments.push("left");
    }
  }

  return alignments;
}

function renderTableAsHtml(lines: string[]): string | null {
  if (lines.length < 2) return null;

  const headers = splitTableRow(lines[0]);
  const alignments = parseTableAlignments(lines[1]);
  if (!alignments || headers.length !== alignments.length) return null;

  const rows = lines
    .slice(2)
    .map(splitTableRow)
    .filter((r) => r.length > 0);

  const thead = `<thead><tr>${headers
    .map((header, i) => `<th align="${alignments[i]}">${header}</th>`)
    .join("")}</tr></thead>`;

  const tbody = rows.length
    ? `<tbody>${rows
        .map((row) => {
          const padded = [...row];
          while (padded.length < headers.length) padded.push("");
          return `<tr>${padded
            .slice(0, headers.length)
            .map((cell, i) => `<td align="${alignments[i]}">${cell}</td>`)
            .join("")}</tr>`;
        })
        .join("")}</tbody>`
    : "";

  return `<table>${thead}${tbody}</table>`;
}

// -----------------------------------------------------------

export function normalizeMarkdownTables(markdown: string): string {
  const lines = markdown.split("\n");
  const output: string[] = [];

  let i = 0;
  while (i < lines.length) {
    const maybeHeader = lines[i];
    const maybeSeparator = lines[i + 1];

    if (
      maybeHeader?.includes("|") &&
      maybeSeparator?.includes("|") &&
      parseTableAlignments(maybeSeparator)
    ) {
      const tableBlock: string[] = [maybeHeader, maybeSeparator];
      i += 2;

      while (i < lines.length && lines[i].includes("|")) {
        tableBlock.push(lines[i]);
        i += 1;
      }

      const tableHtml = renderTableAsHtml(tableBlock);
      if (tableHtml) {
        output.push(tableHtml);
        continue;
      }

      output.push(...tableBlock);
      continue;
    }

    output.push(lines[i]);
    i += 1;
  }

  return output.join("\n");
}
