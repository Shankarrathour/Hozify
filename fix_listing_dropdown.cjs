const fs = require('fs');
const file = 'src/pages/ReferralManagement/ReferralListingPage.jsx';
let code = fs.readFileSync(file, 'utf8');

// 1. Add state for dropdown
code = code.replace(
  /const \[endDate, setEndDate\] = useState\(""\);/,
  `const [endDate, setEndDate] = useState("");\n  const [openDropdownId, setOpenDropdownId] = useState(null);`
);

// 2. Replace the 3-dot button cell
const originalCell = `<td className="px-4 py-4 text-right pr-6" onClick={(e) => e.stopPropagation()}>
                      <button 
                        onClick={() => addToast(\`Opening configuration menu for referral \${row.id}\`, "success")}
                        className="hover:text-indigo-900 cursor-pointer"
                        aria-label={\`Actions for referral \${row.id}\`}
                      >
                        <MoreVertical size={14} />
                      </button>
                    </td>`;

const newCell = `<td className="px-4 py-4 text-right pr-6 relative" onClick={(e) => e.stopPropagation()}>
                      <button 
                        onClick={() => setOpenDropdownId(openDropdownId === row.id ? null : row.id)}
                        className="hover:text-indigo-900 cursor-pointer p-1 rounded hover:bg-slate-100"
                        aria-label={\`Actions for referral \${row.id}\`}
                      >
                        <MoreVertical size={16} />
                      </button>
                      
                      {openDropdownId === row.id && (
                        <div className="absolute right-6 mt-1 w-36 bg-white border border-slate-200 rounded-lg shadow-xl z-50 py-1 text-left">
                          <button onClick={() => { addToast("Viewing details...", "success"); setOpenDropdownId(null); }} className="w-full px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 font-semibold text-left">View Details</button>
                          <button onClick={() => { addToast("Approving referral...", "success"); setOpenDropdownId(null); }} className="w-full px-4 py-2 text-xs text-emerald-600 hover:bg-slate-50 font-semibold text-left">Approve</button>
                          <button onClick={() => { addToast("Rejecting referral...", "error"); setOpenDropdownId(null); }} className="w-full px-4 py-2 text-xs text-rose-600 hover:bg-slate-50 font-semibold text-left">Reject</button>
                        </div>
                      )}
                    </td>`;

code = code.replace(originalCell, newCell);

fs.writeFileSync(file, code);
console.log('ReferralListingPage dropdown updated.');
