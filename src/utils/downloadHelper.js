/**
 * Helper to trigger file download in browser with dummy content.
 */
export function triggerDownload(content, filename, mimeType = 'text/csv') {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function generateCSV(headers, data) {
  const csvRows = [];
  csvRows.push(headers.join(','));
  
  data.forEach(row => {
    const values = headers.map(header => {
      const val = row[header] || row[header.toLowerCase().replace(/ /g, '')] || '';
      const escaped = ('' + val).replace(/"/g, '\\"');
      return `"${escaped}"`;
    });
    csvRows.push(values.join(','));
  });
  
  return csvRows.join('\n');
}

export function downloadDummyPDF(title, content) {
  const text = `
========================================
             HOZIFY ENTERPRISE
             DOCUMENT EXPORT
========================================
TITLE: ${title}
EXPORTED AT: ${new Date().toLocaleString()}
STATUS: APPROVED & LIVE

CONTENT BRIEF:
${content}

========================================
This is a secure system generated report.
  `;
  triggerDownload(text, `${title.toLowerCase().replace(/ /g, '_')}_export.txt`, 'text/plain');
}
