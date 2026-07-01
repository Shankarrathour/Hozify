import React, { useEffect, useState } from "react";
import { Download, X, Check } from "lucide-react";

const exportOptions = [
  {
    id: "PDF",
    label: "PDF",
    summary: "Download a polished report with charts and summary cards.",
  },
  {
    id: "Excel",
    label: "Excel",
    summary: "Download tabular data for further analysis.",
  },
  {
    id: "CSV",
    label: "CSV",
    summary: "Download raw export data for spreadsheets.",
  },
];

export default function PartnerExportModal({
  open,
  onClose,
  onExport,
  title = "Export Report",
  description = "Choose your export format to download the current partner dataset.",
  helper,
  confirmLabel = "Generate Export",
}) {
  const [selectedFormat, setSelectedFormat] = useState("PDF");

  useEffect(() => {
    if (open) {
      setSelectedFormat("PDF");
    }
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm animate-fade-in p-4">
      <div className="w-full max-w-md max-h-[95vh] overflow-y-auto rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-2xl">
        <div className="overflow-hidden rounded-[24px] border border-sky-100 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sky-500">Export report</p>
              <div className="mt-3 flex items-center gap-2 text-lg font-semibold text-slate-900">
                <Download className="h-5 w-5 text-sky-500" />
                <span>{title}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-600">{description}</p>
          {helper && <p className="mt-3 text-xs text-slate-500">{helper}</p>}

          <div className="mt-5 grid gap-3 max-h-[30vh] overflow-y-auto pr-2 custom-scrollbar">
            {exportOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelectedFormat(option.id)}
                className={`rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition ${
                  selectedFormat === option.id
                    ? "border-sky-500 bg-sky-50 text-slate-900"
                    : "border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span>{option.label}</span>
                  {selectedFormat === option.id && <Check className="h-4 w-4 text-sky-500" />}
                </div>
                <p className="mt-1 text-xs text-slate-500">{option.summary}</p>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => onExport?.(selectedFormat)}
            className="mt-5 w-full rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-400 transition"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
