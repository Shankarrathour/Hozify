const fs = require('fs');
const file = 'src/pages/ReferralManagement/CampaignListingPage.jsx';
let code = fs.readFileSync(file, 'utf8');

// 1. Add state for dropdown
code = code.replace(
  /const \[statusFilter, setStatusFilter\] = useState\("All Statuses"\);/,
  `const [statusFilter, setStatusFilter] = useState("All Statuses");\n  const [openDropdownId, setOpenDropdownId] = useState(null);`
);

// We need to pass openDropdownId and setOpenDropdownId down to the CampaignRow component, or manage it inside CampaignRow.
// Let's manage it inside CampaignRow since it's an isolated component.

// 2. Change CampaignRow signature
code = code.replace(
  /function CampaignRow\(\{ title, timeframe, limit, usage, status, onEditClick, onMoreClick \}\) \{/,
  `function CampaignRow({ title, timeframe, limit, usage, status, onEditClick, onMoreClick }) {\n  const [isMenuOpen, setIsMenuOpen] = useState(false);`
);

// 3. Import useState at top if missing. It's already there (import React, { useState } from "react";)

// 4. Update the 3-dot button in CampaignRow
const originalButtonCell = `<td className="p-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-end gap-3">
          <button 
            onClick={onEditClick}
            className="hover:text-indigo-900 cursor-pointer"
            aria-label={\`Edit \${title}\`}
          >
            <Edit size={14} />
          </button>

          <button 
            onClick={onMoreClick}
            className="hover:text-indigo-900 cursor-pointer"
            aria-label={\`More actions for \${title}\`}
          >
            <MoreVertical size={14} />
          </button>
        </div>
      </td>`;

const newButtonCell = `<td className="p-4 relative" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-end gap-3 items-center">
          <button 
            onClick={onEditClick}
            className="hover:text-indigo-900 cursor-pointer"
            aria-label={\`Edit \${title}\`}
          >
            <Edit size={14} />
          </button>

          <div className="relative">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:text-indigo-900 cursor-pointer p-1 rounded hover:bg-slate-100 transition-colors"
              aria-label={\`More actions for \${title}\`}
            >
              <MoreVertical size={14} />
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-1 w-32 bg-white border border-slate-200 rounded-lg shadow-xl z-50 py-1 text-left">
                <button onClick={() => { setIsMenuOpen(false); alert("View Details clicked"); }} className="w-full px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 font-medium text-left">View Details</button>
                <button onClick={() => { setIsMenuOpen(false); alert("Duplicate clicked"); }} className="w-full px-3 py-1.5 text-xs text-indigo-600 hover:bg-slate-50 font-medium text-left">Duplicate</button>
                <button onClick={() => { setIsMenuOpen(false); alert("Delete clicked"); }} className="w-full px-3 py-1.5 text-xs text-rose-600 hover:bg-slate-50 font-medium text-left">Delete</button>
              </div>
            )}
          </div>
        </div>
      </td>`;

code = code.replace(originalButtonCell, newButtonCell);

fs.writeFileSync(file, code);
console.log('CampaignListingPage dropdown updated.');
