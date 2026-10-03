import { useState } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, TriangleAlert, User, FileText, Settings, Check, ChevronRight 
} from 'lucide-react';
import aeroSenseLogo from '../../assets/AEROSENSELOGO.png'; 
import QuickReportModal from './QuickReportModal';

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  // Sync the sliding notch with the current route
  let activeTab = 0;
  if (location.pathname === '/threats') activeTab = 1;
  else if (location.pathname === '/settings') activeTab = 3;
  else if (location.pathname === '/profile') activeTab = 4;

  return (
    <div className="min-h-screen bg-slate-100 flex font-sans text-slate-900 selection:bg-[#00B4D8]/20 relative">
      
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="hidden lg:flex flex-col w-72 bg-[#0B192C] text-white h-screen fixed left-0 top-0 border-r border-slate-800 z-20">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-10">
            <img src={aeroSenseLogo} alt="AeroSense" className="h-8 w-auto" />
            <div className="text-xl font-bold tracking-tight">Aero<span className="text-[#00B4D8]">Sense</span></div>
          </div>

          <div 
            onClick={() => navigate('/profile')}
            className="bg-[#112240] rounded-xl p-4 flex items-center justify-between border border-slate-800 mb-6 cursor-pointer hover:bg-[#1a315a] transition"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#00B4D8]/20 text-[#00B4D8] flex items-center justify-center font-bold">AG</div>
              <div>
                <p className="text-sm font-bold text-white">Alex Grant</p>
                <p className="text-xs text-slate-400">Night Shift Guard</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </div>

          {/* Trigger Modal from Desktop Sidebar */}
          <button 
            onClick={() => setIsReportModalOpen(true)}
            className="w-full bg-[#00B4D8] hover:bg-[#0096c7] text-[#050B14] font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 mb-8 transition cursor-pointer"
          >
            <FileText className="w-5 h-5" />
            File Manual Report
          </button>

          <nav className="space-y-1">
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-3 pl-2">Workspace</p>
            
            <button 
              onClick={() => navigate('/dashboard')} 
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold cursor-pointer transition ${activeTab === 0 ? 'bg-[#00B4D8]/10 text-[#00B4D8]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
            >
              <LayoutDashboard className="w-5 h-5" /> Command Center
            </button>
            
            <button 
              onClick={() => navigate('/threats')} 
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium cursor-pointer transition ${activeTab === 1 ? 'bg-[#00B4D8]/10 text-[#00B4D8]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
            >
              <div className="flex items-center gap-3"><TriangleAlert className="w-5 h-5" /> Active Threats</div>
              <span className={`${activeTab === 1 ? 'bg-[#00B4D8] text-[#050B14]' : 'bg-slate-800'} font-bold text-xs px-2 py-0.5 rounded-full`}>3</span>
            </button>
            
            <button 
  onClick={() => navigate('/settings')}
  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition cursor-pointer ${activeTab === 3 ? 'bg-[#00B4D8]/10 text-[#00B4D8]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
>
  <Settings className="w-5 h-5" /> Settings
</button>
          </nav>
        </div>

        <div className="mt-auto p-6 space-y-4">
          <div className="bg-[#112240] rounded-xl p-4 flex items-center justify-between border border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center"><Check className="w-4 h-4" /></div>
              <div><p className="text-xs font-bold text-white">Systems operational</p><p className="text-[10px] text-slate-400">24 sensors online</p></div>
            </div>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="bg-[#112240] rounded-xl p-4 border border-slate-800">
            <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Current Shift</p>
            <p className="text-sm font-bold text-white mb-2">10:00 PM — 6:00 AM</p>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#00B4D8] w-[60%] h-full rounded-full" />
            </div>
            <p className="text-right text-[10px] text-slate-400 mt-1">3h 28m remaining</p>
          </div>
        </div>
      </aside>

      {/* Dynamic Page Content */}
      <Outlet />

      {/* ================= MOBILE BOTTOM NAVIGATION ================= */}
      <nav className="lg:hidden fixed bottom-6 left-0 right-0 px-4 z-50 pointer-events-none">
        <div className="max-w-85 w-full mx-auto relative pointer-events-auto">
          <div className="absolute inset-0 bg-[#00B4D8]/20 blur-2xl rounded-full pointer-events-none" />
          <div className="bg-[#1C2331]/95 backdrop-blur-xl border border-white/5 rounded-full shadow-2xl relative h-14">
            
            <div className="absolute -top-px left-0 w-1/5 flex justify-center transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-20" style={{ transform: `translateX(${activeTab * 100}%)` }}>
              <svg width="24" height="6" viewBox="0 0 24 6" fill="none" className="text-[#00B4D8]"><path d="M0 0C4.8 0 7.2 6 12 6C16.8 6 19.2 0 24 0Z" fill="currentColor" /></svg>
              <div className="absolute top-0 w-6 h-4 bg-[#00B4D8] blur-[6px] opacity-50 rounded-full" />
            </div>

            <div className="grid grid-cols-5 h-full relative z-10">
              <button onClick={() => navigate('/dashboard')} className={`flex items-center justify-center transition-colors duration-300 ${activeTab === 0 ? 'text-[#00B4D8]' : 'text-slate-400 hover:text-white'}`}>
                <LayoutDashboard className="w-5 h-5 stroke-2" />
              </button>
              
              <button onClick={() => navigate('/threats')} className={`flex items-center justify-center transition-colors duration-300 ${activeTab === 1 ? 'text-[#00B4D8]' : 'text-slate-400 hover:text-white'}`}>
                <TriangleAlert className="w-5 h-5 stroke-2" />
              </button>
              
              {/* Trigger Modal from Mobile Floating Button */}
              <div className="relative flex justify-center items-center">
                <div className="absolute -top-5">
                  <button 
                    onClick={() => setIsReportModalOpen(true)}
                    className="bg-[#1C2331] p-3.5 rounded-full text-[#00B4D8] shadow-lg shadow-[#00B4D8]/30 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform border border-[#00B4D8]/20 ring-4 ring-[#1C2331] cursor-pointer"
                  >
                    <FileText className="w-6 h-6 stroke-2" />
                  </button>
                </div>
              </div>
              
              <button onClick={() => navigate('/settings')} className={`flex items-center justify-center transition-colors duration-300 ${activeTab === 3 ? 'text-[#00B4D8]' : 'text-slate-400 hover:text-white'}`}>
                <Settings className="w-5 h-5 stroke-2" />
              </button>
              
              <button onClick={() => navigate('/profile')} className={`flex items-center justify-center transition-colors duration-300 ${activeTab === 4 ? 'text-[#00B4D8]' : 'text-slate-400 hover:text-white'}`}>
                <User className="w-5 h-5 stroke-2" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Render the Quick Report Modal overlay */}
      <QuickReportModal 
        isOpen={isReportModalOpen} 
        onClose={() => setIsReportModalOpen(false)} 
      />

    </div>
  );
}