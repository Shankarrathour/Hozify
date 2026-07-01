const fs = require('fs');
const file = 'src/pages/RevenueManagement/ExecutiveDashboard.jsx';
let code = fs.readFileSync(file, 'utf8');

const modalToAdd = `
      {/* SELECT TEMPLATE MODAL */}
      {showTemplateModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm" onClick={() => setShowTemplateModal(false)}>
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <LayoutTemplate className="h-5 w-5 text-indigo-600" />
                Select Report Template
              </h3>
              <button type="button" onClick={() => setShowTemplateModal(false)} className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              {templatesPool.map((template) => (
                <div key={template.id} className="p-4 border border-slate-200 rounded-xl hover:border-indigo-600 hover:bg-indigo-50/50 transition-colors cursor-pointer group" onClick={() => applyTemplate(template.title)}>
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-indigo-950">{template.title}</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 group-hover:bg-indigo-100 group-hover:text-indigo-700">Use Template</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{template.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
`;

code = code.replace(/(\s*\{\/\* ========================================== \*\/\}\s*\{\/\*           6\. FOOTER SECTION                \*\/\}\s*\{\/\* ========================================== \*\/\}\s*<div className="flex flex-col sm:flex-row justify-between items-center text-\[10px\] text-slate-400 font-medium py-6 border-t border-slate-100">\s*<span>© 2026 Hozify Enterprise BI\. All rights reserved\.<\/span>\s*<div className="flex items-center gap-4">\s*<a href="#terms" className="hover:text-slate-600">Terms of Service<\/a>\s*<a href="#privacy" className="hover:text-slate-600">Data Privacy Policy<\/a>\s*<a href="#compliance" className="hover:text-slate-600">Compliance<\/a>\s*<\/div>\s*<\/div>)\s*<\/AdminShell>/m, '\n$1\n' + modalToAdd + '\n    </AdminShell>');

fs.writeFileSync(file, code);
console.log('Template modal injected successfully.');
