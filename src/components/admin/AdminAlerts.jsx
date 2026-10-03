import { 
  Download, Bell, TriangleAlert, Activity, CheckCircle, 
  Plus, Search, MapPin, ChevronRight 
} from 'lucide-react';

export default function AdminAlerts() {
  
  // Mock Data for the alerts list
  const alerts = [
    {
      id: 'ALT-318987', type: 'Vape / Smoke Detected',
      location: 'Academic Building — 2nd Floor Restroom',
      time: 'Oct 3, 11:28 AM', status: 'Active', assignee: null
    },
    {
      id: 'ALT-318954', type: 'High PM2.5 Concentration',
      location: 'Ozanam Building — Girls Bathroom',
      time: 'Oct 3, 11:16 AM', status: 'Responding', assignee: { name: 'Alex Grant', initials: 'AG' }
    },
    {
      id: 'ALT-318921', type: 'Vape / Smoke Detected',
      location: 'ST Building — 3rd Floor Restroom',
      time: 'Oct 3, 10:42 AM', status: 'Active', assignee: null
    },
    {
      id: 'ALT-318886', type: 'Sensor Tampering Detected',
      location: 'CS Building — Ground Floor Hallway',
      time: 'Oct 3, 10:09 AM', status: 'Responding', assignee: { name: 'Maria Santos', initials: 'MS' }
    },
    {
      id: 'ALT-318842', type: 'Air Quality Threshold Exceeded',
      location: 'FRC Building — Room 305',
      time: 'Oct 3, 9:37 AM', status: 'Active', assignee: null
    }
  ];

  return (
    <main className="p-6 lg:p-10 max-w-350 mx-auto animate-page-in space-y-8">
      
      {/* ================= HEADER ================= */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-1">Security Center</p>
          <h1 className="text-2xl lg:text-3xl font-bold text-[#002D62]">Alert Management</h1>
          <p className="text-sm text-slate-500 mt-1">32 total alerts recorded today</p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold py-2 px-4 rounded-xl hover:bg-slate-50 transition shadow-sm cursor-pointer">
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </header>

      {/* ================= KPI CARDS ================= */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-500 mb-1">Total Alerts</p>
            <p className="text-3xl font-bold text-slate-800">32</p>
          </div>
          <div className="p-3 bg-slate-50 text-slate-400 rounded-xl"><Bell className="w-5 h-5" /></div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-500 mb-1">Active Threats</p>
            <p className="text-3xl font-bold text-red-600">23</p>
          </div>
          <div className="p-3 bg-red-50 text-red-500 rounded-xl"><TriangleAlert className="w-5 h-5" /></div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-500 mb-1">Responding</p>
            <p className="text-3xl font-bold text-orange-500">2</p>
          </div>
          <div className="p-3 bg-orange-50 text-orange-500 rounded-xl"><Activity className="w-5 h-5" /></div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-500 mb-1">Resolved / False</p>
            <p className="text-3xl font-bold text-emerald-600">6</p>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-500 rounded-xl"><CheckCircle className="w-5 h-5" /></div>
        </div>
      </div>

      {/* ================= FILTERS & ACTIONS ================= */}
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <button className="bg-[#002D62] hover:bg-[#001f44] text-white font-bold py-3 px-5 rounded-xl flex items-center gap-2 shadow-md transition-colors cursor-pointer w-full lg:w-auto justify-center">
          <Plus className="w-5 h-5" />
          Log Manual Incident
        </button>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search alerts..." 
              className="pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-[#002D62] w-full sm:w-64 transition-all"
            />
          </div>
          
          <select className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 outline-none cursor-pointer">
            <option>Status: All</option>
            <option>Active</option>
            <option>Responding</option>
          </select>

          <select className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 outline-none cursor-pointer">
            <option>Location: All</option>
            <option>Academic Building</option>
            <option>Ozanam Building</option>
          </select>
        </div>
      </div>

      {/* ================= ALERT LIST ================= */}
      <div>
        <div className="flex justify-between items-center mb-4 px-1">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Live Alerts <span className="text-slate-400 font-normal ml-2 lowercase">25 requiring attention</span></p>
          <p className="text-xs text-slate-400">Updated just now</p>
        </div>

        <div className="space-y-3">
          {alerts.map((alert, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col xl:flex-row xl:items-center p-5 gap-6 transition hover:shadow-md cursor-pointer border-l-4 ${
                alert.status === 'Active' ? 'border-l-red-500' : 'border-l-orange-500'
              }`}
            >
              {/* ID & Type */}
              <div className="xl:w-1/4">
                <p className="text-[10px] font-bold text-slate-400 mb-0.5">{alert.id}</p>
                <p className="text-sm font-bold text-slate-900">{alert.type}</p>
              </div>

              {/* Location */}
              <div className="xl:w-1/4 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <p className="text-xs font-semibold text-slate-500">{alert.location}</p>
              </div>

              {/* Time & Status */}
              <div className="xl:w-1/6 flex flex-col items-start xl:items-center">
                <p className="text-[10px] font-bold text-slate-400 mb-1.5">{alert.time}</p>
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full text-white ${
                  alert.status === 'Active' ? 'bg-red-500' : 'bg-orange-500'
                }`}>
                  {alert.status}
                </span>
              </div>

              {/* Assignee */}
              <div className="xl:w-1/4 flex items-center justify-start xl:justify-center">
                {alert.assignee ? (
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#002D62] text-white flex items-center justify-center text-[10px] font-bold">
                      {alert.assignee.initials}
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">Assigned to</p>
                      <p className="text-xs font-bold text-slate-900">{alert.assignee.name}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs font-semibold text-slate-300 italic">Unassigned</p>
                )}
              </div>

              {/* Action Link */}
              <div className="xl:w-1/12 flex justify-end">
                <button className="text-xs font-bold text-[#002D62] flex items-center gap-1 hover:underline">
                  View Details
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}