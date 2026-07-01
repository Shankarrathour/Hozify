const fs = require('fs');
const file = 'src/pages/RevenueManagement/Targets.jsx';
let code = fs.readFileSync(file, 'utf8');

const dropdownToAdd = `
            {/* Filter Selection Dropdown */}
            {showFilterDropdown && (
              <div 
                className="absolute top-full left-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl p-1.5 min-w-[150px] z-[60] space-y-0.5"
                onClick={(e) => e.stopPropagation()}
              >
                {["All", "Exceeded", "Near Target", "At Risk"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setActiveFilter(opt);
                      setShowFilterDropdown(false);
                    }}
                    className={\`w-full text-left px-2.5 py-1.5 rounded-md text-xs font-semibold block transition-colors \${
                      activeFilter === opt ? 'bg-indigo-950 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-50'
                    }\`}
                  >
                    {opt} {opt === "All" ? "Status" : ""}
                  </button>
                ))}
              </div>
            )}`;

// Replace right before the New Target button so it is inside the relative container
code = code.replace(
  /<button\s+type="button"\s+onClick=\{\(\) => setShowNewTargetModal\(true\)\}/g,
  dropdownToAdd + '\n            <button \n              type="button"\n              onClick={() => setShowNewTargetModal(true)}'
);

fs.writeFileSync(file, code);
console.log('Fixed filter button correctly part 2.');
