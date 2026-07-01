const fs = require('fs');
const file = 'src/pages/RevenueManagement/Targets.jsx';
let code = fs.readFileSync(file, 'utf8');

// 1. Make the top button container relative
code = code.replace(
  '<div className="flex items-center gap-2 self-end sm:self-auto">',
  '<div className="flex items-center gap-2 self-end sm:self-auto relative">'
);

// 2. Remove the dropdown from the table header
const dropdownToRemove = `            {/* Filter Selection Dropdown Popover layout */}
            {showFilterDropdown && (
              <div 
                className="absolute top-14 right-6 bg-white border border-slate-200 rounded-xl shadow-xl p-1.5 min-w-[150px] z-30 space-y-0.5"
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

code = code.replace(dropdownToRemove, '');

// 3. Add the dropdown right after the filter button
const filterButtonEnd = `              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span>Filter: {activeFilter}</span>
            </button>`;

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

code = code.replace(filterButtonEnd, filterButtonEnd + dropdownToAdd);

fs.writeFileSync(file, code);
console.log('Fixed filter button correctly.');
