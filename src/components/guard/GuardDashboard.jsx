import { 
  TriangleAlert, 
  Activity,
  Check,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function GuardDashboard() {
  const navigate = useNavigate();

  return (
    <main className="animate-page-in flex-1 lg:ml-72 w-full pb-32 lg:pb-0">
      
      {/* TOP DARK HEADER & STATS SECTION */}
      <section className="bg-[#0B192C] px-6 py-8 lg:px-10 lg:py-10 lg:rounded-bl-3xl shadow-lg relative z-10">
        
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-[10px] lg:text-xs text-[#00B4D8] font-bold tracking-widest uppercase mb-1">Command Center</p>
            <h1 className="text-3xl lg:text-4xl font-bold text-white">Hi, Guard!</h1>
            <p className="text-sm text-slate-400 mt-1 hidden lg:block">Here's what's happening across your site tonight.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#112240] border border-slate-700/50 px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-400">Active Monitoring</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 lg:gap-6">
          <div 
            onClick={() => navigate('/threats')} 
            className="bg-[#112240] border border-slate-700/50 rounded-2xl p-4 lg:p-5 flex flex-col justify-between cursor-pointer hover:border-[#00B4D8]/50 transition"
          >
            <div className="flex justify-between items-start">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">3</h2>
              <TriangleAlert className="w-4 h-4 lg:w-5 lg:h-5 text-[#00B4D8]" />
            </div>
            <p className="text-[10px] lg:text-xs text-slate-400 mt-2">Active Alerts</p>
          </div>

          <div className="bg-[#112240] border border-slate-700/50 rounded-2xl p-4 lg:p-5 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">0</h2>
              <Activity className="w-4 h-4 lg:w-5 lg:h-5 text-amber-500" />
            </div>
            <p className="text-[10px] lg:text-xs text-slate-400 mt-2">In Progress</p>
          </div>

          <div className="bg-[#112240] border border-slate-700/50 rounded-2xl p-4 lg:p-5 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">6</h2>
              <Check className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-400" />
            </div>
            <p className="text-[10px] lg:text-xs text-slate-400 mt-2">Resolved Today</p>
          </div>
        </div>
      </section>

      {/* LIGHT CONTENT AREA: ACTIVE ALERTS & HISTORY */}
      <section className="p-6 lg:p-10 grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-10">
        
        {/* Box 1: Active Alerts Container (Glassy Grey) */}
        <div className="bg-slate-200/40 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-sm border border-white/60">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg lg:text-xl font-bold text-slate-900">Active Alerts</h3>
            <span className="bg-emerald-50 text-emerald-600 border border-emerald-200 text-[10px] font-bold px-3 py-1 rounded-full">0 ACTIVE</span>
          </div>

          {/* Radar / All Clear Graphic - Popping out in white */}
          <div className="bg-white/70 border border-white shadow-sm rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-75">
            <div className="relative flex items-center justify-center w-32 h-32 mb-6">
              <div className="absolute inset-0 border-2 border-emerald-100 rounded-full animate-[ping_3s_linear_infinite]" />
              <div className="absolute inset-4 border border-emerald-200 rounded-full" />
              <div className="absolute inset-8 border border-emerald-300 rounded-full" />
              <div className="relative z-10 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <Check className="w-6 h-6 text-white stroke-3" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">All clear</h4>
            <p className="text-sm text-slate-500 max-w-xs mb-6">No active alerts detected across all monitored zones.</p>
            
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg">
              <Activity className="w-3.5 h-3.5" />
              Last scan 12 seconds ago
            </div>
          </div>
        </div>

        {/* Box 2: Response History Container (Glassy Grey) */}
        <div className="bg-slate-200/40 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-sm border border-white/60">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg lg:text-xl font-bold text-slate-900">My Response History</h3>
            <a href="#" className="text-sm font-semibold text-[#00B4D8] hover:underline">View all</a>
          </div>

          <div className="space-y-3">
            {[
              { title: 'False Alarm', loc: '2nd Floor Restroom', time: 'Today, 02:38 AM' },
              { title: 'Door Held Open', loc: 'West Service Entrance', time: 'Yesterday, 11:42 PM' },
              { title: 'Unusual Activity', loc: 'Parking Level B2', time: 'Yesterday, 09:18 PM' },
              { title: 'False Alarm', loc: 'East Wing Stairwell', time: 'Yesterday, 07:04 PM' }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white/50 hover:bg-white/90 border border-white/60 shadow-sm rounded-2xl transition cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{item.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.loc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-[10px] text-slate-400 hidden sm:block">{item.time}</p>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}