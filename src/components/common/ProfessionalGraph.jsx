import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';

const dummyData = {
  Weekly: [
    { name: 'Mon', value: 4000 },
    { name: 'Tue', value: 3000 },
    { name: 'Wed', value: 2000 },
    { name: 'Thu', value: 2780 },
    { name: 'Fri', value: 1890 },
    { name: 'Sat', value: 2390 },
    { name: 'Sun', value: 3490 },
  ],
  Monthly: [
    { name: 'Week 1', value: 14000 },
    { name: 'Week 2', value: 23000 },
    { name: 'Week 3', value: 19000 },
    { name: 'Week 4', value: 27800 },
  ],
  Yearly: [
    { name: 'Jan', value: 44000 },
    { name: 'Feb', value: 33000 },
    { name: 'Mar', value: 52000 },
    { name: 'Apr', value: 47800 },
    { name: 'May', value: 68900 },
    { name: 'Jun', value: 43900 },
    { name: 'Jul', value: 54900 },
    { name: 'Aug', value: 64900 },
    { name: 'Sep', value: 74900 },
    { name: 'Oct', value: 64900 },
    { name: 'Nov', value: 84900 },
    { name: 'Dec', value: 94900 },
  ]
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl border border-slate-100 bg-white/95 p-3 shadow-xl backdrop-blur-sm">
        <p className="mb-1 text-xs font-semibold text-slate-500 uppercase">{label}</p>
        <p className="text-lg font-bold text-indigo-700">
          ₹{payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export default function ProfessionalGraph({ title = "Performance Overview", initialData = dummyData }) {
  const [timeframe, setTimeframe] = useState('Monthly');

  const currentData = initialData[timeframe] || dummyData[timeframe];

  return (
    <div className="flex h-full w-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        <select 
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 outline-none ring-indigo-500/20 focus:ring-4 transition-all"
        >
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>
      
      <div className="h-[280px] w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={currentData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }} 
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f8fafc' }} />
            <Bar dataKey="value" radius={[6, 6, 6, 6]} barSize={32}>
              {currentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="url(#colorGradient)" />
              ))}
            </Bar>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={1} />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.8} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
