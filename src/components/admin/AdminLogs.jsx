import { 
  Download, Search, ScrollText, Calendar, TriangleAlert, Clock, 
  Trash2, Radio, ShieldCheck, Wind, UserCheck 
} from 'lucide-react';

export default function AdminLogs() {
  
  // Mock Data for the Audit Trail
  const logs = [
    {
      id: 1, time: '11:33 AM', date: 'Oct 3, 2026',
      title: 'Device Offline — Test Room', desc: 'Lost connection (No heartbeat in 5 mins)',
      category: 'Device', severity: 'Critical', location: 'Test Room',
      icon: Radio, iconColor: 'text-red-500', iconBg: 'bg-red-50'
    },
    {
      id: 2, time: '11:28 AM', date: 'Oct 3, 2026',
      title: 'Vape / Smoke Detected', desc: 'PM2.5 spike exceeded configured threshold',
      category: 'Detection', severity: 'Critical', location: 'Girls Bathroom',
      icon: TriangleAlert, iconColor: 'text-red-500', iconBg: 'bg-red-50'
    },
    {
      id: 3, time: '11:16 AM', date: 'Oct 3, 2026',
      title: 'Sensor Battery Critically Low', desc: 'Battery level dropped below 10%',
      category: 'Device', severity: 'Warning', location: 'South Stairwell',
      icon: Radio, iconColor: 'text-orange-500', iconBg: 'bg-orange-50'
    },
    {
      id: 4, time: '10:51 AM', date: 'Oct 3, 2026',
      title: 'Administrator Signed In', desc: 'Successful authentication from recognized device',
      category: 'Access', severity: 'Info', location: 'Admin Console',
      icon: ShieldCheck, iconColor: 'text-[#00B4D8]', iconBg: 'bg-cyan-50'
    },
    {
      id: 5, time: '10:42 AM', date: 'Oct 3, 2026',
      title: 'Air Quality Threshold Exceeded', desc: 'VOC reading remained elevated for 3 minutes',
      category: 'Detection', severity: 'Critical', location: 'Room 305',
      icon: Wind, iconColor: 'text-red-500', iconBg: 'bg-red-50'
    },
    {
      id: 6, time: '10:09 AM', date: 'Oct 3, 2026',
      title: 'Device Tampering Detected', desc: 'Unexpected enclosure movement registered',
      category: 'Security', severity: 'Critical', location: 'Main Hallway',
      icon: TriangleAlert, iconColor: 'text-red-500', iconBg: 'bg-red-50'
    },
    {
      id: 7, time: '9:48 AM', date: 'Oct 3, 2026',
      title: 'Guard Assigned to Alert', desc: 'Alex Grant accepted the incident response',
      category: 'Personnel', severity: 'Info', location: 'North Wing',
      icon: UserCheck, iconColor: 'text-[#00B4D8]', iconBg: 'bg-cyan-50'
    },
    {
      id: 8, time: '9:37 AM', date: 'Oct 3, 2026',
      title: 'Device Connection Restored', desc: 'Sensor resumed normal heartbeat transmission',
      category: 'Device', severity: 'Info', location: 'Ozanam Building',
      icon: Radio, iconColor: 'text-[#00B4D8]', iconBg: 'bg-cyan-50'
    }
  ];

  // Helper for Severity Pills
  const getSeverityStyle = (severity) => {
    switch(severity) {
      case 'Critical': return 'bg-red-600 text-white';
      case 'Warning': return 'bg-orange-100 text-orange-700';
      case 'Info': return 'bg-cyan-100 text-[#00B4D8]';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  return (
    <main className="p-6 lg:p-10 max-w-350 mx-auto animate-page-in space-y-8 pb-20">
      
      {/* ================= HEADER ================= */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-1">System Audit</p>
          <h1 className="text-2xl lg:text-3xl font-bold text-[#002D62]">System Activity Logs</h1>
          <p className="text-sm text-slate-500 mt-1">82 system events and audit records</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-red-200 text-red-600 font-semibold py-2.5 px-4 rounded-xl hover:bg-red-50 transition shadow-sm cursor-pointer">
            <Trash2 className="w-4 h-4" />
            Clear All Logs
          </button>
          <button className="flex items-center gap-2 bg-[#002D62] hover:bg-[#001f44] text-white font-bold py-2.5 px-5 rounded-xl shadow-md transition-colors cursor-pointer">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </header>

      {/* ================= KPI CARDS ================= */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-500 mb-1">Total Logs</p>
            <p className="text-3xl font-bold text-slate-800">82</p>
          </div>
          <div className="p-3 bg-slate-50 text-slate-400 rounded-xl"><ScrollText className="w-5 h-5" /></div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-500 mb-1">Recorded Today</p>
            <p className="text-3xl font-bold text-[#002D62]">62</p>
          </div>
          <div className="p-3 bg-blue-50 text-[#002D62] rounded-xl"><Calendar className="w-5 h-5" /></div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-500 mb-1">Critical Events</p>
            <p className="text-3xl font-bold text-red-600">70</p>
          </div>
          <div className="p-3 bg-red-50 text-red-500 rounded-xl"><TriangleAlert className="w-5 h-5" /></div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center relative">
          <div className="absolute top-6 right-6 p-3 bg-slate-50 text-slate-400 rounded-xl"><Clock className="w-5 h-5" /></div>
          <p className="text-xs font-bold text-slate-500 mb-1">Latest Entry</p>
          <p className="text-2xl font-bold text-slate-800 tracking-tight">11:33 AM</p>
          <p className="text-[10px] font-semibold text-slate-400 mt-1">Oct 3, 2026</p>
        </div>
      </div>

      {/* ================= FILTERS & TABLE ================= */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-2">
        <div className="relative w-full lg:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search logs, events, or IDs..." 
            className="pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-[#002D62] w-full transition-all shadow-sm"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <select className="bg-white border border-slate-200 shadow-sm rounded-xl px-3 lg:px-4 py-2.5 text-xs font-semibold text-slate-700 outline-none cursor-pointer">
            <option>Category: All</option>
            <option>Device</option>
            <option>Detection</option>
          </select>
          <select className="bg-white border border-slate-200 shadow-sm rounded-xl px-3 lg:px-4 py-2.5 text-xs font-semibold text-slate-700 outline-none cursor-pointer">
            <option>Severity: Critical</option>
            <option>Severity: All</option>
          </select>
          <select className="bg-white border border-slate-200 shadow-sm rounded-xl px-3 lg:px-4 py-2.5 text-xs font-semibold text-slate-700 outline-none cursor-pointer">
            <option>Time: Last 24 Hours</option>
            <option>Time: Last 7 Days</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col">
        
        {/* Header Row */}
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Audit Trail</h2>
            <p className="text-xs text-slate-400 mt-0.5">Chronological record of system and security events</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-600">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live updates
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-250">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Timestamp</th>
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Event Details</th>
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Category</th>
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Severity</th>
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Source / Location</th>
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => {
                const Icon = log.icon;
                return (
                  <tr key={log.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition">
                    
                    {/* Timestamp */}
                    <td className="py-4 px-6">
                      <p className="text-xs font-bold text-slate-900">{log.time}</p>
                      <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{log.date}</p>
                    </td>

                    {/* Event Details */}
                    <td className="py-4 px-6 flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${log.iconBg} ${log.iconColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{log.title}</p>
                        <p className="text-[10px] font-medium text-slate-500 mt-0.5">{log.desc}</p>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-4 px-6">
                      <span className="bg-slate-100 text-slate-600 border border-slate-200 text-[10px] font-bold px-3 py-1 rounded-full">
                        {log.category}
                      </span>
                    </td>

                    {/* Severity */}
                    <td className="py-4 px-6">
                      <span className={`text-[10px] font-bold px-3 py-1 rounded-full tracking-wide ${getSeverityStyle(log.severity)}`}>
                        {log.severity}
                      </span>
                    </td>

                    {/* Source / Location */}
                    <td className="py-4 px-6">
                      <span className="text-xs font-semibold text-slate-500">{log.location}</span>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-6 text-right">
                      <button className="text-xs font-bold text-[#002D62] hover:underline cursor-pointer">
                        View Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        {/* Footer Pagination */}
        <div className="px-6 py-4 border-t border-slate-100 flex justify-between items-center bg-slate-50/50 rounded-b-2xl">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Showing 1-10 of 82 logs</p>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 flex items-center justify-center rounded-lg border border-slate-200 text-xs font-bold text-slate-600 bg-white hover:bg-slate-50 transition cursor-pointer">Previous</button>
            <button className="px-4 py-2 flex items-center justify-center rounded-lg border-transparent text-xs font-bold text-white bg-[#002D62] hover:bg-[#001f44] shadow-sm transition cursor-pointer">Next</button>
          </div>
        </div>
      </div>
    </main>
  );
}