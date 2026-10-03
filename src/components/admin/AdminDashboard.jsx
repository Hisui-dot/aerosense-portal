import { Search, Bell, TriangleAlert, Radio, Activity, Wind } from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar
} from 'recharts';

export default function AdminDashboard() {
  
  // Mock Data for Area Chart (PM2.5)
  const airQualityData = [
    { time: '12 AM', value: 45 }, { time: '4 AM', value: 52 }, 
    { time: '8 AM', value: 120 }, { time: '12 PM', value: 110 }, 
    { time: '4 PM', value: 145 }, { time: '8 PM', value: 90 }
  ];

  // Mock Data for Bar Chart (Weekly Incidents)
  const activityData = [
    { day: 'Mon', incidents: 12 }, { day: 'Tue', incidents: 18 },
    { day: 'Wed', incidents: 15 }, { day: 'Thu', incidents: 25 },
    { day: 'Fri', incidents: 30 }, { day: 'Sat', incidents: 10 },
    { day: 'Sun', incidents: 8 }
  ];

  return (
    <main className="p-6 lg:p-10 max-w-7xl mx-auto animate-page-in space-y-6">
      
      {/* ================= HEADER ================= */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-1">Overview</p>
          <h1 className="text-2xl lg:text-3xl font-bold text-[#002D62]">System Dashboard</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="pl-9 pr-12 py-2 bg-white border border-slate-200 rounded-full text-sm outline-none focus:border-[#002D62] w-64 transition-all"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 text-[10px] font-sans font-medium text-slate-400 bg-slate-100 border border-slate-200 rounded">⌘</kbd>
              <kbd className="px-1.5 py-0.5 text-[10px] font-sans font-medium text-slate-400 bg-slate-100 border border-slate-200 rounded">K</kbd>
            </div>
          </div>
          
          <button className="relative p-2 bg-white border border-slate-200 rounded-full text-slate-600 hover:bg-slate-50 transition cursor-pointer shrink-0">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white text-white text-[9px] font-bold flex items-center justify-center rounded-full transform translate-x-1/4 -translate-y-1/4">16</span>
          </button>

          <button className="flex items-center gap-2 bg-white border border-slate-200 py-1.5 px-3 rounded-full hover:bg-slate-50 transition cursor-pointer">
            <div className="w-7 h-7 rounded-full bg-[#002D62] text-white flex items-center justify-center text-xs font-bold">SA</div>
            <div className="hidden sm:block text-left mr-1">
              <p className="text-xs font-bold text-slate-900 leading-none">System Admin</p>
              <p className="text-[10px] text-slate-500">Administrator</p>
            </div>
          </button>
        </div>
      </header>

      {/* ================= KPI CARDS ================= */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        
        {/* Active Alerts */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <p className="text-xs font-bold text-slate-500">Active Alerts</p>
            <div className="p-1.5 bg-red-50 text-red-500 rounded-lg"><TriangleAlert className="w-4 h-4" /></div>
          </div>
          <div>
            <p className="text-3xl font-bold text-red-600">7</p>
            <p className="text-[10px] font-medium text-slate-400 mt-1">14 total today</p>
          </div>
        </div>

        {/* Sensors Online */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <p className="text-xs font-bold text-slate-500">Sensors Online</p>
            <div className="p-1.5 bg-emerald-50 text-emerald-500 rounded-lg"><Radio className="w-4 h-4" /></div>
          </div>
          <div>
            <div className="flex items-baseline gap-1">
              <p className="text-3xl font-bold text-emerald-500">244</p>
              <p className="text-sm font-bold text-slate-400">/250</p>
            </div>
            <p className="text-[10px] font-medium text-slate-400 mt-1">6 offline</p>
          </div>
        </div>

        {/* Detections Today */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <p className="text-xs font-bold text-slate-500">Detections Today</p>
            <div className="p-1.5 bg-slate-50 text-slate-500 rounded-lg"><Activity className="w-4 h-4" /></div>
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-800">142</p>
            <p className="text-[10px] font-medium text-emerald-500 mt-1">↑ 12% vs yesterday</p>
          </div>
        </div>

        {/* Avg PM2.5 */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <p className="text-xs font-bold text-slate-500">Avg PM2.5</p>
            <div className="p-1.5 bg-rose-50 text-rose-500 rounded-lg"><Wind className="w-4 h-4" /></div>
          </div>
          <div>
            <div className="flex items-baseline gap-1">
              <p className="text-3xl font-bold text-rose-600">135</p>
              <p className="text-xs font-bold text-slate-500">µg/m³</p>
            </div>
            <p className="text-[10px] font-medium text-slate-400 mt-1">Threshold: 35</p>
          </div>
        </div>

      </div>

      {/* ================= MAIN CHART (AREA) ================= */}
      <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Air Quality Trends</h2>
            <p className="text-xs text-slate-500">PM2.5 levels over the last 24 hours</p>
          </div>
          <select className="text-xs font-bold text-slate-600 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 outline-none cursor-pointer">
            <option>Last 24 hours</option>
            <option>Last 7 days</option>
          </select>
        </div>
        
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={airQualityData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#002D62" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#002D62" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                itemStyle={{ color: '#002D62', fontWeight: 'bold' }}
              />
              <Area type="monotone" dataKey="value" stroke="#002D62" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ================= BOTTOM SPLIT VIEW ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        
        {/* Detection Activity (Bar Chart) */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-slate-900">Detection Activity</h2>
            <p className="text-xs text-slate-500">Incidents recorded this week</p>
          </div>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData} margin={{ top: 0, right: 0, left: -30, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="incidents" fill="#002D62" radius={[4, 4, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* High-Risk Areas (Custom Progress Bars) */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">High-Risk Areas</h2>
              <p className="text-xs text-slate-500">Locations requiring attention</p>
            </div>
            <button className="text-xs font-bold text-[#002D62] hover:underline">View all</button>
          </div>

          <div className="space-y-6 flex-1 justify-center flex flex-col">
            
            {/* Area 1 */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <p className="text-sm font-bold text-slate-900">Girls Bathroom</p>
                </div>
                <p className="text-xs font-bold text-slate-500">8 incidents</p>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 rounded-full" style={{ width: '65%' }} />
              </div>
            </div>

            {/* Area 2 */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <p className="text-sm font-bold text-slate-900">Unknown</p>
                </div>
                <p className="text-xs font-bold text-slate-500">6 incidents</p>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 rounded-full" style={{ width: '45%' }} />
              </div>
            </div>

          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between text-[10px] text-slate-400">
            <p>14 total high-risk incidents</p>
            <p>Last 7 days</p>
          </div>
        </div>

      </div>
    </main>
  );
}