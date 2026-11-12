import React from 'react';

interface SvgChartsProps {
  type?: 'line' | 'bar' | 'pie' | 'table' | 'map' | 'process' | 'mixed';
  title?: string;
}

export const SvgCharts: React.FC<SvgChartsProps> = ({ type = 'line', title = 'Task Visual Data' }) => {
  if (type === 'line') {
    return (
      <div className="bg-white p-5 rounded-xl border border-slate-200">
        <h4 className="text-sm font-semibold text-slate-800 mb-3">{title}</h4>
        <svg viewBox="0 0 500 240" className="w-full h-auto">
          {/* Grid lines */}
          <line x1="50" y1="20" x2="480" y2="20" stroke="#f1f5f9" strokeWidth="1" />
          <line x1="50" y1="65" x2="480" y2="65" stroke="#f1f5f9" strokeWidth="1" />
          <line x1="50" y1="110" x2="480" y2="110" stroke="#f1f5f9" strokeWidth="1" />
          <line x1="50" y1="155" x2="480" y2="155" stroke="#f1f5f9" strokeWidth="1" />
          <line x1="50" y1="200" x2="480" y2="200" stroke="#cbd5e1" strokeWidth="1.5" />
          
          {/* Y Axis Labels */}
          <text x="40" y="24" textAnchor="end" className="text-[10px] fill-slate-400 font-mono-tabular">10k</text>
          <text x="40" y="69" textAnchor="end" className="text-[10px] fill-slate-400 font-mono-tabular">7.5k</text>
          <text x="40" y="114" textAnchor="end" className="text-[10px] fill-slate-400 font-mono-tabular">5.0k</text>
          <text x="40" y="159" textAnchor="end" className="text-[10px] fill-slate-400 font-mono-tabular">2.5k</text>
          <text x="40" y="204" textAnchor="end" className="text-[10px] fill-slate-400 font-mono-tabular">0</text>
          
          {/* X Axis Labels */}
          <text x="60" y="218" textAnchor="middle" className="text-[10px] fill-slate-500 font-mono-tabular">2000</text>
          <text x="140" y="218" textAnchor="middle" className="text-[10px] fill-slate-500 font-mono-tabular">2005</text>
          <text x="220" y="218" textAnchor="middle" className="text-[10px] fill-slate-500 font-mono-tabular">2010</text>
          <text x="300" y="218" textAnchor="middle" className="text-[10px] fill-slate-500 font-mono-tabular">2015</text>
          <text x="380" y="218" textAnchor="middle" className="text-[10px] fill-slate-500 font-mono-tabular">2020</text>
          <text x="460" y="218" textAnchor="middle" className="text-[10px] fill-slate-500 font-mono-tabular">2025</text>

          {/* Line 1: Coal (slate) */}
          <polyline fill="none" stroke="#475569" strokeWidth="2.5" points="60,95 140,75 220,45 300,30 380,40 460,60" />
          {/* Line 2: Natural Gas (blue) */}
          <polyline fill="none" stroke="#0284c7" strokeWidth="2.5" points="60,150 140,135 220,115 300,100 380,90 460,80" />
          {/* Line 3: Nuclear (amber) */}
          <polyline fill="none" stroke="#f59e0b" strokeWidth="2.5" points="60,155 140,153 220,150 300,156 380,153 460,150" />
          {/* Line 4: Renewables (emerald) */}
          <polyline fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="4 2" points="60,185 140,175 220,160 300,130 380,75 460,32" />
        </svg>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#475569]"></span>
            <span>Coal</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#0284c7]"></span>
            <span>Natural Gas</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#f59e0b]"></span>
            <span>Nuclear</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#10b981]"></span>
            <span className="font-medium text-emerald-800">Renewables</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'bar') {
    return (
      <div className="bg-white p-5 rounded-xl border border-slate-200">
        <h4 className="text-sm font-semibold text-slate-800 mb-3">{title}</h4>
        <svg viewBox="0 0 500 240" className="w-full h-auto">
          <line x1="60" y1="30" x2="480" y2="30" stroke="#f1f5f9" strokeWidth="1" />
          <line x1="60" y1="85" x2="480" y2="85" stroke="#f1f5f9" strokeWidth="1" />
          <line x1="60" y1="140" x2="480" y2="140" stroke="#f1f5f9" strokeWidth="1" />
          <line x1="60" y1="195" x2="480" y2="195" stroke="#cbd5e1" strokeWidth="1.5" />
          
          <text x="50" y="34" textAnchor="end" className="text-[10px] fill-slate-400 font-mono-tabular">100%</text>
          <text x="50" y="89" textAnchor="end" className="text-[10px] fill-slate-400 font-mono-tabular">75%</text>
          <text x="50" y="144" textAnchor="end" className="text-[10px] fill-slate-400 font-mono-tabular">50%</text>
          <text x="50" y="199" textAnchor="end" className="text-[10px] fill-slate-400 font-mono-tabular">0%</text>

          {/* Group 1: Central Asia */}
          <rect x="75" y="32" width="16" height="163" fill="#1e3a8a" rx="2" />
          <rect x="94" y="34" width="16" height="161" fill="#3b82f6" rx="2" />
          <rect x="113" y="30" width="16" height="165" fill="#047857" rx="2" />
          <rect x="132" y="32" width="16" height="163" fill="#10b981" rx="2" />

          {/* Group 2: East Asia */}
          <rect x="175" y="42" width="16" height="153" fill="#1e3a8a" rx="2" />
          <rect x="194" y="53" width="16" height="142" fill="#3b82f6" rx="2" />
          <rect x="213" y="35" width="16" height="160" fill="#047857" rx="2" />
          <rect x="232" y="38" width="16" height="157" fill="#10b981" rx="2" />

          {/* Group 3: South Asia */}
          <rect x="275" y="83" width="16" height="112" fill="#1e3a8a" rx="2" />
          <rect x="294" y="122" width="16" height="73" fill="#3b82f6" rx="2" />
          <rect x="313" y="60" width="16" height="135" fill="#047857" rx="2" />
          <rect x="332" y="86" width="16" height="109" fill="#10b981" rx="2" />

          {/* Group 4: Sub-Saharan Africa */}
          <rect x="375" y="93" width="16" height="102" fill="#1e3a8a" rx="2" />
          <rect x="394" y="121" width="16" height="74" fill="#3b82f6" rx="2" />
          <rect x="413" y="73" width="16" height="122" fill="#047857" rx="2" />
          <rect x="432" y="98" width="16" height="97" fill="#10b981" rx="2" />

          <text x="112" y="215" textAnchor="middle" className="text-[10px] fill-slate-700 font-medium">Central Asia</text>
          <text x="212" y="215" textAnchor="middle" className="text-[10px] fill-slate-700 font-medium">East Asia</text>
          <text x="312" y="215" textAnchor="middle" className="text-[10px] fill-slate-700 font-medium">South Asia</text>
          <text x="412" y="215" textAnchor="middle" className="text-[10px] fill-slate-700 font-medium">Sub-Saharan Africa</text>
        </svg>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-3 text-xs text-slate-600">
          <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-[#1e3a8a] rounded-sm"></span><span>2000 Male</span></div>
          <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-[#3b82f6] rounded-sm"></span><span>2000 Female</span></div>
          <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-[#047857] rounded-sm"></span><span>2020 Male</span></div>
          <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-[#10b981] rounded-sm"></span><span>2020 Female</span></div>
        </div>
      </div>
    );
  }

  if (type === 'pie') {
    return (
      <div className="bg-white p-5 rounded-xl border border-slate-200">
        <h4 className="text-sm font-semibold text-slate-800 mb-3">{title}</h4>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <svg viewBox="0 0 160 160" className="w-40 h-40">
            {/* Pie slices: 45%, 25%, 20%, 10% */}
            <circle r="40" cx="80" cy="80" fill="transparent"
              stroke="#0284c7" strokeWidth="40"
              strokeDasharray="113 251.2" strokeDashoffset="0" />
            <circle r="40" cx="80" cy="80" fill="transparent"
              stroke="#10b981" strokeWidth="40"
              strokeDasharray="62.8 251.2" strokeDashoffset="-113" />
            <circle r="40" cx="80" cy="80" fill="transparent"
              stroke="#f59e0b" strokeWidth="40"
              strokeDasharray="50.2 251.2" strokeDashoffset="-175.8" />
            <circle r="40" cx="80" cy="80" fill="transparent"
              stroke="#64748b" strokeWidth="40"
              strokeDasharray="25.1 251.2" strokeDashoffset="-226" />
          </svg>
          <div className="space-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#0284c7]"></span><span>Agriculture & Irrigation (45%)</span></div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#10b981]"></span><span>Industrial Manufacturing (25%)</span></div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#f59e0b]"></span><span>Domestic & Residential (20%)</span></div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#64748b]"></span><span>Commercial & Service (10%)</span></div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'process') {
    return (
      <div className="bg-white p-5 rounded-xl border border-slate-200">
        <h4 className="text-sm font-semibold text-slate-800 mb-3">{title}</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-slate-700">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <span className="font-semibold text-slate-900 block mb-1">1. Harvesting</span>
            <span>Manual picking of mature blossoms in early summer.</span>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <span className="font-semibold text-slate-900 block mb-1">2. Washing & Drying</span>
            <span>Clean water rinse followed by 48-hour solar desiccation.</span>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <span className="font-semibold text-slate-900 block mb-1">3. Steam Sterilizing</span>
            <span>Flash thermal vapor sterilization to preserve aromatics.</span>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <span className="font-semibold text-slate-900 block mb-1">4. Packaging & Export</span>
            <span>Hermetic foil sealing and container palletization.</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'map') {
    return (
      <div className="bg-white p-5 rounded-xl border border-slate-200">
        <h4 className="text-sm font-semibold text-slate-800 mb-3">{title}</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
            <span className="text-xs font-semibold text-slate-800 block mb-2">Campus in 2005</span>
            <div className="h-32 border border-dashed border-slate-300 rounded flex flex-col justify-between p-2 text-[11px] text-slate-600">
              <div className="bg-slate-200 p-1 rounded text-center">Surface Car Park (North)</div>
              <div className="bg-amber-100 p-1 rounded text-center">Central Transit Road</div>
              <div className="flex justify-between gap-1">
                <span className="bg-blue-100 p-1 rounded w-1/2 text-center">Admin Block</span>
                <span className="bg-green-100 p-1 rounded w-1/2 text-center">Small Library</span>
              </div>
            </div>
          </div>
          <div className="border border-slate-200 rounded-lg p-3 bg-emerald-50/50">
            <span className="text-xs font-semibold text-emerald-900 block mb-2">Campus in 2025 (Redeveloped)</span>
            <div className="h-32 border border-emerald-200 rounded flex flex-col justify-between p-2 text-[11px] text-slate-700">
              <div className="bg-blue-100 p-1 rounded text-center font-medium">New Tech Research Institute</div>
              <div className="bg-emerald-100 p-1 rounded text-center font-medium">Pedestrianized Green Walkway</div>
              <div className="flex justify-between gap-1">
                <span className="bg-purple-100 p-1 rounded w-1/2 text-center font-medium">Student Union Hub</span>
                <span className="bg-green-200 p-1 rounded w-1/2 text-center font-medium">Expanded Library (2x)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fallback / Table view
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 overflow-x-auto">
      <h4 className="text-sm font-semibold text-slate-800 mb-3">{title}</h4>
      <table className="w-full text-xs text-left text-slate-700">
        <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-semibold">
          <tr>
            <th className="py-2 px-3">Metric Category</th>
            <th className="py-2 px-3 font-mono-tabular">2010</th>
            <th className="py-2 px-3 font-mono-tabular">2015</th>
            <th className="py-2 px-3 font-mono-tabular">2020</th>
            <th className="py-2 px-3 font-mono-tabular">2025 (Projected)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr>
            <td className="py-2 px-3 font-medium">Solar Power Output</td>
            <td className="py-2 px-3 font-mono-tabular">32 TWh</td>
            <td className="py-2 px-3 font-mono-tabular">256 TWh</td>
            <td className="py-2 px-3 font-mono-tabular">835 TWh</td>
            <td className="py-2 px-3 font-mono-tabular">2,140 TWh</td>
          </tr>
          <tr>
            <td className="py-2 px-3 font-medium">Wind Generation</td>
            <td className="py-2 px-3 font-mono-tabular">342 TWh</td>
            <td className="py-2 px-3 font-mono-tabular">838 TWh</td>
            <td className="py-2 px-3 font-mono-tabular">1,592 TWh</td>
            <td className="py-2 px-3 font-mono-tabular">3,050 TWh</td>
          </tr>
          <tr>
            <td className="py-2 px-3 font-medium">Hydroelectric</td>
            <td className="py-2 px-3 font-mono-tabular">3,430 TWh</td>
            <td className="py-2 px-3 font-mono-tabular">3,880 TWh</td>
            <td className="py-2 px-3 font-mono-tabular">4,350 TWh</td>
            <td className="py-2 px-3 font-mono-tabular">4,720 TWh</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
