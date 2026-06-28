import React, { useState } from "react";
import AdminShell from "../../components/layouts/AdminShell";
import { Building2, Network, Filter, Download, Save } from "lucide-react";

export default function FraudInvestigation() {
  const [note, setNote] = useState("");

  // --- Handlers ---
  const handleFlagFalsePositive = () => alert("Action: Flagged as False Positive.");
  const handleEscalate = () => alert("Action: Escalated to Senior Admin.");
  const handleFullAnalysis = () => alert("Action: Opening Network Graph Analysis...");
  const handleSaveNote = () => {
    if (!note.trim()) return alert("Note is empty!");
    alert(`Action: Note saved: ${note}`);
  };

  const handleDownloadLogs = () => {
    const logs = "Evidence Log Data: \n1. Withdrawal Attempt - USD 12,500\n2. MFA Failure - 3 attempts\n3. New Device - Android 11";
    const blob = new Blob([logs], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "evidence-logs.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AdminShell activeTab="Fraud Investigation" searchPlaceholder="Search investigations...">
      <div className="space-y-4">
        
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-gray-500 text-sm font-medium mb-1">Risk Center › Fraud Investigations</div>
            <h1 className="text-2xl font-bold text-gray-900">Fraud Investigation Case</h1>
            <p className="text-gray-500 text-sm">Review evidence, analyze entity relationships, and manage workflows.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={handleFlagFalsePositive} className="h-10 px-4 border rounded-lg text-sm font-medium hover:bg-gray-50">Flag False Positive</button>
            <button onClick={handleEscalate} className="h-10 px-4 bg-indigo-700 text-white rounded-lg text-sm font-medium hover:bg-indigo-800">Escalate to Senior Admin</button>
          </div>
        </div>

        {/* TOP SECTION */}
        <div className="grid grid-cols-12 gap-4">
          
          {/* RISK SCORE - Compacted */}
          <div className="col-span-3 bg-white border rounded-lg p-4">
            <h3 className="text-center text-gray-500 uppercase tracking-widest text-xs font-bold">Risk Score</h3>
            <div className="flex justify-center mt-4">
              <div className="w-32 h-32 rounded-full border-8 border-red-600 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600">82</div>
                  <div className="text-xs text-gray-500 font-bold">CRITICAL</div>
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between border-b pb-1"><span>Identity Match</span><span className="font-semibold">24%</span></div>
              <div className="flex justify-between border-b pb-1"><span>Velocity Score</span><span className="font-semibold text-red-600">91%</span></div>
              <div className="flex justify-between"><span>IP Reputation</span><span className="font-semibold text-red-600">88%</span></div>
            </div>
          </div>

          {/* CASE INTELLIGENCE - Compacted */}
          <div className="col-span-6 bg-white border rounded-lg p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Case Intelligence</h2>
              <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded font-bold">ACTION REQUIRED</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="uppercase text-gray-500 text-[10px] font-bold">Subject Entity</p>
                <div className="flex gap-2 mt-2 items-center">
                  <Building2 size={24} className="text-indigo-600" />
                  <div>
                    <h3 className="font-semibold">Quantum Dynamics LLC</h3>
                    <p className="text-gray-500 text-xs">PRT-8820</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="uppercase text-gray-500 text-[10px] font-bold">Detection Timestamp</p>
                <h3 className="font-semibold mt-1">Oct 24, 2023 • 14:22 UTC</h3>
                <p className="text-gray-500 text-xs">Rule: VEL_092_BURST</p>
              </div>
            </div>
            <div className="bg-gray-50 mt-4 p-3 border-l-4 border-red-600 text-sm text-gray-700">
              <span className="font-bold block mb-1">Trigger Summary</span>
              Unusually high frequency of payout requests (14 within 60 seconds) to 3 distinct IBANs.
            </div>
          </div>

          {/* NETWORK GRAPH - Compacted */}
          <div className="col-span-3 bg-white border rounded-lg p-4">
            <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center mb-3">
              <Network size={48} className="text-blue-200" />
            </div>
            <h3 className="text-lg font-medium">Network Graph</h3>
            <p className="text-gray-500 text-xs mb-4">2nd-degree connections identified.</p>
            <button onClick={handleFullAnalysis} className="w-full h-10 bg-indigo-700 text-white rounded-lg text-sm font-medium hover:bg-indigo-800">Full Analysis</button>
          </div>
        </div>

        {/* EVIDENCE & TIMELINE */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8 bg-white border rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <h2 className="text-xl font-bold">Evidence Logs</h2>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded"><Filter size={16} /></button>
                <button onClick={handleDownloadLogs} className="p-2 hover:bg-gray-100 rounded text-indigo-600"><Download size={16} /></button>
              </div>
            </div>
            <div className="p-5 space-y-3">
              {['Withdrawal Attempt', 'MFA Failure', 'New Device'].map((item, i) => (
                <div key={i} className="border rounded-md p-3 text-sm hover:border-indigo-200 transition-colors">
                  <div className="font-semibold">{item}</div>
                  <div className="text-gray-500 text-xs">Details regarding {item.toLowerCase()}...</div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-4 bg-white border rounded-lg p-5">
            <h2 className="text-xl font-bold mb-4">Investigation Timeline</h2>
            <div className="space-y-4 text-sm mb-6">
              <div><h4 className="font-semibold text-xs text-gray-500 uppercase">Case Created</h4><p>Oct 24, 14:22</p></div>
              <div><h4 className="font-semibold text-xs text-gray-500 uppercase">Review Started</h4><p>Oct 24, 14:45</p></div>
            </div>
            <textarea 
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3} 
              className="w-full border rounded-lg p-2 text-sm mb-3" 
              placeholder="Add internal analyst note..." 
            />
            <button onClick={handleSaveNote} className="w-full h-10 bg-slate-800 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2">
              <Save size={16} /> Save Note
            </button>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}