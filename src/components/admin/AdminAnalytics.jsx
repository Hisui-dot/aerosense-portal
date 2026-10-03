import { Calendar, Download, Activity } from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

export default function AdminAnalytics() {
  
  // Mock Data for Detection Trend Bar Chart
  const trendData = [
    { day: 'Mon', detections: 4 }, { day: 'Tue', detections: 10 },
    { day: 'Wed', detections: 3 }, { day: 'Thu', detections: 11 },
    { day: 'Fri', detections: 8 }, { day: 'Sat', detections: 2 },
    { day: 'Sun', detections: 3 }
  ];

  // Mock Data for High-Risk Zones Table
  const highRiskData = [
    { zone: 'Girls Bathroom', detections: 8, offline: 2, status: 'Watch', statusColor: 'bg-orange-100 text-orange-600', dot: 'bg-orange-500' },
    { zone: 'Unknown', detections: 24, offline: 6, status: 'High', statusColor: 'bg-red-100 text-red-600', dot: 'bg-red-500' },
    { zone: 'Main Hallway', detections: 1, offline: 0, status: '', statusColor: '', dot: 'bg-[#002D62]' }
  ];

  // Mock Data for Officer Activity Table
  const officerData = [
    { name: 'Alex Grant', initials: 'AG', handled: 12, responseTime: '3m 42s' },
    { name: 'Anette Daligcon', initials: 'AD', handled: 9, responseTime: '4m 18s', color: 'bg-emerald-600' },
    { name: 'Maria Santos', initials: 'MS', handled: 7, responseTime: '5m 03s', color: 'bg-purple-600' }
  ];

  // Helper to render heatmap blocks
  const renderHeatmapRow = (label) => (
    <div className="flex items-center gap-3 mb-2">
      <span className="text-[10px] text-slate-400 w-12">{label}</span>
      <div className="flex-1 flex gap-1">
        {Array.from({ length: 24 }).map((_, i) => {
          // Generate pseudo-random intensity for the heatmap look
          const intensity = Math.random();
          const opacity = intensity > 0.8 ? 'opacity-100' : intensity > 0.5 ? 'opacity-60' : intensity > 0.2 ? 'opacity-30' : 'opacity-10';
          return (
            <div key={i} className={`flex-1 h-6 rounded-sm bg-[#00B4D8] ${opacity}`}></div>
          )
        })}
      </div>
    </div>
  );

  return (
    <main className="p-6 lg:p-10 max-w-350 mx-auto animate-page-in space-y-8">
      
      {/* ================= HEADER ================= */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-1">Reporting Center</p>
          <h1 className="text-2xl lg:text-3xl font-bold text-[#002D62]">Analytics & Insights</h1>
          <p className="text-sm text-slate-500 mt-1">System performance for the current week</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold py-2 px-4 rounded-xl hover:bg-slate-50 transition shadow-sm cursor-pointer">
            <Calendar className="w-4 h-4" />
            Oct 1 – Oct 7
          </button>
          <button className="flex items-center gap-2 bg-[#002D62] hover:bg-[#001f44] text-white font-bold py-2 px-4 rounded-xl shadow-md transition-colors cursor-pointer">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </header>

      {/* ================= KPI CARDS ================= */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-xs font-bold text-slate-500 mb-2">Total Detections</p>
          <p className="text-3xl font-bold text-slate-800">32</p>
          <p className="text-[10px] text-slate-400 mt-2">This week</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-xs font-bold text-slate-500 mb-2">Confirmed Incidents</p>
          <p className="text-3xl font-bold text-emerald-600">0</p>
          <p className="text-[10px] text-slate-400 mt-2">No confirmed cases</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-xs font-bold text-slate-500 mb-2">False Alarms</p>
          <p className="text-3xl font-bold text-orange-500">6</p>
          <p className="text-[10px] text-slate-400 mt-2">18.75% of total</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-xs font-bold text-slate-500 mb-2">Avg PM2.5 Peak</p>
          <p className="text-3xl font-bold text-red-600 flex items-baseline gap-1">147.5 <span className="text-sm font-semibold">µg/m³</span></p>
          <p className="text-[10px] text-slate-400 mt-2">Weekly average</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-xs font-bold text-slate-500 mb-2">Avg VOC Peak</p>
          <p className="text-3xl font-bold text-[#002D62]">257.26</p>
          <p className="text-[10px] text-slate-400 mt-2">Weekly average</p>
        </div>
      </div>

      {/* ================= MIDDLE CHARTS SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Detection Trend */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-80">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Detection Trend</h2>
              <p className="text-xs text-slate-500">Daily detections throughout the week</p>
            </div>
            <span className="bg-slate-50 text-slate-600 border border-slate-200 text-[10px] font-bold px-2 py-1 rounded-md">32 total</span>
          </div>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trendData} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="detections" fill="#002D62" radius={[4, 4, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Peak Hours Heatmap */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-80">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Peak Hours</h2>
              <p className="text-xs text-slate-500">Incident frequency by time of day</p>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              Low <div className="w-2 h-2 bg-[#00B4D8] opacity-20 ml-1"></div><div className="w-2 h-2 bg-[#00B4D8] opacity-60"></div><div className="w-2 h-2 bg-[#00B4D8]"></div> High
            </div>
          </div>
          
          <div className="mb-6 mt-4">
            {renderHeatmapRow("Weekday")}
            {renderHeatmapRow("Weekend")}
            <div className="flex justify-between text-[10px] text-slate-400 mt-2 ml-14">
              <span>12 AM</span>
              <span>6 AM</span>
              <span>12 PM</span>
              <span>6 PM</span>
              <span>11 PM</span>
            </div>
          </div>

          <div className="mt-auto bg-slate-50 rounded-xl p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center shrink-0">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Peak activity: 2 PM – 4 PM</p>
              <p className="text-[10px] text-slate-500 mt-0.5">38% of weekly detections occur during this window.</p>
            </div>
          </div>
        </div>

      </div>

      {/* ================= BOTTOM TABLES SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* High Risk Zones */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">High-Risk Zones</h2>
              <p className="text-xs text-slate-500">Areas with recurring detections</p>
            </div>
            <button className="text-xs font-bold text-[#002D62] hover:underline">View all</button>
          </div>
          
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="pb-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Zone / Location</th>
                <th className="pb-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Detections</th>
                <th className="pb-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-right">Offline Events</th>
              </tr>
            </thead>
            <tbody>
              {highRiskData.map((row, i) => (
                <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition">
                  <td className="py-4 flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full ${row.dot}`}></div>
                    <span className="text-xs font-bold text-slate-800">{row.zone}</span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900">{row.detections}</span>
                      {row.status && (
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wider ${row.statusColor}`}>
                          {row.status}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 text-xs text-slate-500 font-medium text-right pr-4">{row.offline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Officer Activity */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Officer Activity</h2>
              <p className="text-xs text-slate-500">Response performance this week</p>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-slate-500 uppercase">3 on duty</span>
            </div>
          </div>
          
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="pb-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Officer Name</th>
                <th className="pb-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Alerts Handled</th>
                <th className="pb-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-right">Avg Response Time</th>
              </tr>
            </thead>
            <tbody>
              {officerData.map((officer, i) => (
                <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition">
                  <td className="py-3 flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full text-white flex items-center justify-center text-[10px] font-bold ${officer.color || 'bg-[#002D62]'}`}>
                      {officer.initials}
                    </div>
                    <span className="text-xs font-bold text-slate-800">{officer.name}</span>
                  </td>
                  <td className="py-3 text-sm font-bold text-slate-600 pl-4">{officer.handled}</td>
                  <td className="py-3 text-xs text-slate-500 font-medium text-right pr-4">{officer.responseTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </main>
  );
}