/**
 * Lightweight, zero-dependency Markdown to HTML parser tailored for Somu Holidays travel blog.
 * Properly handles tables, lists, links, headings, blockquotes, and inline formatting.
 */

function parseInline(text: string): string {
  if (!text) return "";
  return text
    // Inline code
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    // Bold **text**
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    // Italic *text*
    .replace(/(^|[^\*])\*([^\*]+)\*([^\*]|$)/g, "$1<em>$2</em>$3")
    // Markdown links [title](url)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="articleLink">$1</a>');
}

export function renderMarkdown(md: string): string {
  if (!md) return "";

  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const htmlChunks: string[] = [];

  let i = 0;
  while (i < lines.length) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    // Skip empty lines
    if (!trimmed) {
      i++;
      continue;
    }

    // Horizontal Rule: --- or ***
    if (/^(---|---|\*\*\*)$/.test(trimmed)) {
      htmlChunks.push('<hr class="articleHr" />');
      i++;
      continue;
    }

    // Headings
    if (trimmed.startsWith("#### ")) {
      htmlChunks.push(`<h4>${parseInline(trimmed.slice(5))}</h4>`);
      i++;
      continue;
    }
    if (trimmed.startsWith("### ")) {
      htmlChunks.push(`<h3>${parseInline(trimmed.slice(4))}</h3>`);
      i++;
      continue;
    }
    if (trimmed.startsWith("## ")) {
      htmlChunks.push(`<h2>${parseInline(trimmed.slice(3))}</h2>`);
      i++;
      continue;
    }
    if (trimmed.startsWith("# ")) {
      htmlChunks.push(`<h2>${parseInline(trimmed.slice(2))}</h2>`);
      i++;
      continue;
    }

    // Blockquote
    if (trimmed.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("> ")) {
        quoteLines.push(lines[i].trim().slice(2));
        i++;
      }
      const quoteContent = parseInline(quoteLines.join(" "));
      htmlChunks.push(`<blockquote><p>${quoteContent}</p></blockquote>`);
      continue;
    }

    // Markdown Table Detection
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|") && lines[i].trim().endsWith("|")) {
        tableLines.push(lines[i].trim());
        i++;
      }

      if (tableLines.length >= 2) {
        // Extract headers
        const headerCols = tableLines[0]
          .split("|")
          .slice(1, -1)
          .map((c) => c.trim());

        // Check if line 1 is separator (:---, ---, ---:)
        const isSeparator = /^\|?(\s*:?-+:?\s*\|?)+$/.test(tableLines[1]);
        const startRowIndex = isSeparator ? 2 : 1;

        const thead = `<thead><tr>${headerCols
          .map((col) => `<th>${parseInline(col)}</th>`)
          .join("")}</tr></thead>`;

        const rows: string[] = [];
        for (let r = startRowIndex; r < tableLines.length; r++) {
          const cells = tableLines[r]
            .split("|")
            .slice(1, -1)
            .map((c) => c.trim());

          const renderedCells = cells.map((cell) => {
            const inline = parseInline(cell);
            // Badge styling for duration like "3 Days", "4 Days", "10 Days"
            if (/^\d+\s*Days?$/i.test(cell.replace(/<[^>]+>/g, "").trim())) {
              const numMatch = cell.match(/\d+/);
              const num = numMatch ? parseInt(numMatch[0], 10) : 3;
              const badgeClass = num >= 10 ? "badgeMega" : num >= 4 ? "badgeLong" : "badgeNormal";
              return `<td><span class="tableBadge ${badgeClass}">${inline}</span></td>`;
            }
            // Highlight Leave Strategy
            if (/Take Leave/i.test(cell)) {
              return `<td><span class="tableStrategy">${inline}</span></td>`;
            }
            // Highlight Pricing/Tariff
            if (/₹\d+/i.test(cell) && (cell.includes("/ km") || cell.includes("/ day") || cell.includes("₹"))) {
              return `<td><span class="tablePrice">${inline}</span></td>`;
            }
            return `<td>${inline}</td>`;
          });

          rows.push(`<tr>${renderedCells.join("")}</tr>`);
        }

        const tbody = `<tbody>${rows.join("")}</tbody>`;
        htmlChunks.push(
          `<div class="tableResponsive"><table class="articleTable">${thead}${tbody}</table></div>`
        );
        continue;
      }
    }

    // Unordered List (* or -)
    if (/^[\*\-]\s+/.test(trimmed)) {
      const listItems: string[] = [];
      while (i < lines.length && /^[\*\-]\s+/.test(lines[i].trim())) {
        const itemText = lines[i].trim().replace(/^[\*\-]\s+/, "");
        listItems.push(`<li>${parseInline(itemText)}</li>`);
        i++;
      }
      htmlChunks.push(`<ul>${listItems.join("")}</ul>`);
      continue;
    }

    // Ordered List (1. or 2.)
    if (/^\d+\.\s+/.test(trimmed)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        const itemText = lines[i].trim().replace(/^\d+\.\s+/, "");
        listItems.push(`<li>${parseInline(itemText)}</li>`);
        i++;
      }
      htmlChunks.push(`<ol>${listItems.join("")}</ol>`);
      continue;
    }

    // Regular Paragraph
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trim().startsWith("##") &&
      !lines[i].trim().startsWith("###") &&
      !lines[i].trim().startsWith("####") &&
      !lines[i].trim().startsWith("> ") &&
      !lines[i].trim().startsWith("|") &&
      !/^[\*\-]\s+/.test(lines[i].trim()) &&
      !/^\d+\.\s+/.test(lines[i].trim()) &&
      !/^(---|---|\*\*\*)$/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i].trim());
      i++;
    }

    if (paraLines.length > 0) {
      const pText = parseInline(paraLines.join(" "));
      htmlChunks.push(`<p>${pText}</p>`);
    }
  }

  return htmlChunks.join("\n");
}
