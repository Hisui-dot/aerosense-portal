import { useState } from 'react';
import { 
  TriangleAlert, 
  Search, 
  ChevronDown 
} from 'lucide-react';

export default function ActiveThreats() {
  const [searchQuery, setSearchQuery] = useState('');

  const threats = [
    {
      id: 1,
      zone: 'Academic Building • Zone 2',
      location: 'Girls Bathroom - 2nd Floor',
      detected: 'Oct 1, 10:33 PM',
      sensor: 'Sensor #4 (Vape/Smoke)',
    },
    {
      id: 2,
      zone: 'Main Building • Zone 1',
      location: 'West Hallway - Ground Floor',
      detected: 'Oct 1, 10:21 PM',
      sensor: 'Sensor #11 (Air Quality)',
    },
    {
      id: 3,
      zone: 'Athletics Center • Zone 4',
      location: 'Locker Room - East Wing',
      detected: 'Oct 1, 9:58 PM',
      sensor: 'Sensor #7 (Vape/Smoke)',
    },
  ];

  return (
    <main className="animate-page-in flex-1 lg:ml-72 w-full p-6 lg:p-12 pb-32 lg:pb-12">
      
      {/* Header Block */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pt-4 lg:pt-0">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[#0096C7] mb-1">
            Security Monitoring
          </p>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Active Threats
            </h1>
            <span className="bg-red-50 text-red-600 border border-red-200 text-xs font-bold px-2.5 py-0.5 rounded-full">
              3 New
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Review and acknowledge incidents that require your attention.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Search Input */}
          <div className="relative flex-1 sm:flex-none">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full sm:w-48 pl-9 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-full text-slate-800 placeholder-slate-400 outline-none focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/15 transition"
            />
          </div>

          {/* Date Filter */}
          <div className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-full text-xs text-slate-600 font-medium cursor-pointer hover:border-slate-300">
            <span>Date: <strong>All</strong></span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>

          {/* Location Filter */}
          <div className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-full text-xs text-slate-600 font-medium cursor-pointer hover:border-slate-300">
            <span>Location: <strong>All</strong></span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>

          {/* Status Filter */}
          <div className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-full text-xs text-slate-600 font-medium cursor-pointer hover:border-slate-300">
            <span>Status: <strong>Active</strong></span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>
      </div>

      {/* Live Alerts Status Header */}
      <div className="flex items-center justify-between text-xs font-semibold mb-4">
        <div className="flex items-center gap-2 text-slate-700">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
          <span>Live alerts</span>
        </div>
        <span className="text-slate-400 font-normal">
          Showing 3 incidents across 3 locations
        </span>
      </div>

      {/* Threat Cards Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
        {threats.map((threat) => (
          <div
            key={threat.id}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Left Red Accent Line */}
            <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-red-500 rounded-r-full" />

            {/* Card Header */}
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                    <TriangleAlert className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate-400 leading-tight">
                      {threat.zone}
                    </p>
                    <h3 className="text-base font-bold text-slate-900 mt-0.5">
                      {threat.location}
                    </h3>
                  </div>
                </div>
                <span className="bg-red-50 text-red-500 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md border border-red-100">
                  NEW
                </span>
              </div>

              {/* Details Container */}
              <div className="bg-slate-50/80 rounded-2xl p-4 mb-6 border border-slate-100 grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Detected
                  </span>
                  <span className="text-xs font-semibold text-slate-800 mt-1 block">
                    {threat.detected}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Triggered By
                  </span>
                  <span className="text-xs font-semibold text-slate-800 mt-1 block">
                    {threat.sensor}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button className="py-2.5 px-4 text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl transition cursor-pointer">
                View Details
              </button>
              <button className="py-2.5 px-4 text-xs font-bold text-white bg-[#0084D1] hover:bg-[#0073B8] rounded-xl shadow-md shadow-[#0084D1]/20 transition cursor-pointer">
                Acknowledge
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}