const fs = require('fs');
const file = 'src/pages/NotificationCenter/PushNotifications.jsx';
let code = fs.readFileSync(file, 'utf8');

// 1. Add state for dropdown
code = code.replace(
  /const \[searchQuery, setSearchQuery\] = useState\(''\);/,
  `const [searchQuery, setSearchQuery] = useState('');\n  const [openDropdownId, setOpenDropdownId] = useState(null);`
);

// 2. Replace the 3-dot button cell
const originalCell = `<td style={{ padding: '16px', textAlign: 'right' }}>
                          <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }}>
                            <MoreVertical size={16} />
                          </button>
                        </td>`;

const newCell = `<td style={{ padding: '16px', textAlign: 'right', position: 'relative' }}>
                          <button 
                            onClick={(e) => { e.stopPropagation(); setOpenDropdownId(openDropdownId === i ? null : i); }}
                            style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted)' }}
                          >
                            <MoreVertical size={16} />
                          </button>
                          {openDropdownId === i && (
                            <div style={{ position: 'absolute', right: '40px', top: '16px', width: '140px', background: '#fff', border: '1px solid var(--line)', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 50, padding: '4px 0', textAlign: 'left' }}>
                              <button onClick={(e) => { e.stopPropagation(); setOpenDropdownId(null); alert('View Details clicked'); }} style={{ display: 'block', width: '100%', padding: '8px 16px', border: 'none', background: 'transparent', textAlign: 'left', fontSize: '12px', fontWeight: '600', cursor: 'pointer', color: 'var(--text)' }}>View Details</button>
                              <button onClick={(e) => { e.stopPropagation(); setOpenDropdownId(null); alert('Resend Notification'); }} style={{ display: 'block', width: '100%', padding: '8px 16px', border: 'none', background: 'transparent', textAlign: 'left', fontSize: '12px', fontWeight: '600', cursor: 'pointer', color: '#07956f' }}>Resend</button>
                              <button onClick={(e) => { e.stopPropagation(); setOpenDropdownId(null); alert('Delete Campaign'); }} style={{ display: 'block', width: '100%', padding: '8px 16px', border: 'none', background: 'transparent', textAlign: 'left', fontSize: '12px', fontWeight: '600', cursor: 'pointer', color: '#e11d48' }}>Delete</button>
                            </div>
                          )}
                        </td>`;

code = code.replace(originalCell, newCell);

fs.writeFileSync(file, code);
console.log('PushNotifications dropdown updated.');
