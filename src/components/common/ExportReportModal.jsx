import React, { useState } from 'react';
import { X, Check, Download } from 'lucide-react';
import { downloadDummyPDF, triggerDownload, generateCSV } from '../../utils/downloadHelper';

export default function ExportReportModal({ 
  isOpen, 
  onClose, 
  entityName = 'Report', 
  data = []
}) {
  const [selectedExportFormat, setSelectedExportFormat] = useState('PDF');

  if (!isOpen) return null;

  const handleExport = () => {
    if (selectedExportFormat === 'PDF') {
      downloadDummyPDF(`Export_${entityName.replace(/\s+/g, '_')}`, `This report contains data for ${entityName}.`);
    } else if (selectedExportFormat === 'Excel') {
      // Create some dummy headers based on data or generic ones
      const headers = data && data.length > 0 ? Object.keys(data[0]) : ['ID', 'Name', 'Status'];
      const dummyData = data && data.length > 0 ? data : [{ ID: 1, Name: 'Dummy', Status: 'Data' }];
      const csvContent = generateCSV(headers, dummyData);
      triggerDownload(csvContent, `${entityName.replace(/\s+/g, '_')}.xlsx`, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    } else if (selectedExportFormat === 'CSV') {
      const headers = data && data.length > 0 ? Object.keys(data[0]) : ['ID', 'Name', 'Status'];
      const dummyData = data && data.length > 0 ? data : [{ ID: 1, Name: 'Dummy', Status: 'Data' }];
      const csvContent = generateCSV(headers, dummyData);
      triggerDownload(csvContent, `${entityName.replace(/\s+/g, '_')}.csv`, 'text/csv');
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 px-6 py-4">
          <span className="text-xs font-bold tracking-widest text-indigo-500 uppercase">Export Report</span>
          <button onClick={onClose} className="rounded-full p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors">
            <X size={18} />
          </button>
        </div>
        
        {/* Body */}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <Download size={20} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Export {entityName}</h3>
          </div>
          
          <p className="mb-4 text-sm text-slate-500">
            Choose your preferred file format to download {entityName.toLowerCase()} records matching the current filters.
          </p>
          
          <p className="mb-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Select one of the available export formats below.
          </p>
          
          <div className="space-y-3">
            {/* Option PDF */}
            <div 
              onClick={() => setSelectedExportFormat('PDF')}
              className={`cursor-pointer rounded-2xl border-2 p-4 transition-all ${selectedExportFormat === 'PDF' ? 'border-indigo-500 bg-indigo-50/50' : 'border-slate-100 hover:border-slate-200 bg-white'}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`font-bold ${selectedExportFormat === 'PDF' ? 'text-indigo-700' : 'text-slate-700'}`}>PDF</span>
                {selectedExportFormat === 'PDF' && <Check size={18} className="text-indigo-600" />}
              </div>
              <p className="text-sm text-slate-500">Download a polished report with charts and summary cards.</p>
            </div>
            
            {/* Option Excel */}
            <div 
              onClick={() => setSelectedExportFormat('Excel')}
              className={`cursor-pointer rounded-2xl border-2 p-4 transition-all ${selectedExportFormat === 'Excel' ? 'border-indigo-500 bg-indigo-50/50' : 'border-slate-100 hover:border-slate-200 bg-white'}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`font-bold ${selectedExportFormat === 'Excel' ? 'text-indigo-700' : 'text-slate-700'}`}>Excel</span>
                {selectedExportFormat === 'Excel' && <Check size={18} className="text-indigo-600" />}
              </div>
              <p className="text-sm text-slate-500">Download tabular data for further analysis.</p>
            </div>
            
            {/* Option CSV */}
            <div 
              onClick={() => setSelectedExportFormat('CSV')}
              className={`cursor-pointer rounded-2xl border-2 p-4 transition-all ${selectedExportFormat === 'CSV' ? 'border-indigo-500 bg-indigo-50/50' : 'border-slate-100 hover:border-slate-200 bg-white'}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`font-bold ${selectedExportFormat === 'CSV' ? 'text-indigo-700' : 'text-slate-700'}`}>CSV</span>
                {selectedExportFormat === 'CSV' && <Check size={18} className="text-indigo-600" />}
              </div>
              <p className="text-sm text-slate-500">Download raw unformatted data for third-party tools.</p>
            </div>
          </div>
          
          <button 
            onClick={handleExport}
            className="mt-6 w-full rounded-2xl bg-[#4db6ac] py-4 font-bold text-white shadow-lg shadow-teal-500/20 hover:bg-[#26a69a] active:scale-[0.98] transition-all"
          >
            Generate Export
          </button>
        </div>
      </div>
    </div>
  );
}
