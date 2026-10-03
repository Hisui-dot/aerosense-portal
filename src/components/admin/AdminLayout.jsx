import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, TriangleAlert, Activity, 
  Radio, Users, ScrollText, Settings, LogOut, 
  Menu, X
} from 'lucide-react';
import aeroSenseLogo from '../../assets/AEROSENSELOGO.png';

export default function AdminLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();



  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navGroups = [
    {
      title: "OVERVIEW",
      links: [
        { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
        { name: "Live Alerts", path: "/admin/alerts", icon: TriangleAlert },
        { name: "Analytics", path: "/admin/analytics", icon: Activity },
      ]
    },
    {
      title: "MANAGEMENT",
      links: [
        { name: "Sensor Devices", path: "/admin/sensors", icon: Radio },
        { name: "User Management", path: "/admin/users", icon: Users }
      ]
    },
    {
      title: "SYSTEM",
      links: [
        { name: "Activity Logs", path: "/admin/logs", icon: ScrollText },
        { name: "Settings", path: "/admin/settings", icon: Settings },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans text-slate-900 selection:bg-[#002D62]/20 relative">
      
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="hidden lg:flex flex-col w-72 bg-[#002D62] text-white h-screen fixed left-0 top-0 border-r border-[#001f44] z-20">
        <div className="p-6 pb-2">
          <div className="flex items-center gap-3 mb-10">
            <img src={aeroSenseLogo} alt="AeroSense" className="h-8 w-auto brightness-0 invert" />
            <div className="text-xl font-bold tracking-tight">AeroSense</div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 custom-scrollbar space-y-8">
          {navGroups.map((group, idx) => (
            <div key={idx}>
              <p className="text-[10px] font-bold text-slate-400/80 uppercase tracking-widest mb-3 pl-4">
                {group.title}
              </p>
              <nav className="space-y-1">
                {group.links.map((link) => {
                  const isActive = location.pathname === link.path;
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.name}
                      onClick={() => navigate(link.path)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                        isActive 
                          ? 'bg-white text-[#002D62] shadow-sm' 
                          : 'text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {link.name}
                    </button>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>

        <div className="p-4 mt-auto border-t border-white/10">
          <button 
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* ================= APPLE-STYLE MOBILE NAV ================= */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50">
        {/* Minimal Top Bar */}
        <div className="h-16 bg-[#002D62] flex items-center justify-between px-4 relative z-50">
          <img src={aeroSenseLogo} alt="AeroSense" className="h-6 w-auto brightness-0 invert" />
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white active:scale-95 transition-transform"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
          </button>
        </div>

        {/* Full Screen Overlay Menu */}
        <div 
          className={`fixed inset-0 bg-[#002D62] pt-16 transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          <div className="h-full overflow-y-auto px-6 pb-24 flex flex-col mt-4">
            {navGroups.map((group, gIdx) => (
              <div key={gIdx} className="mb-8 animate-modal-up" style={{ animationDelay: `${gIdx * 0.1}s` }}>
                <p className="text-[10px] font-bold text-slate-400/80 uppercase tracking-widest mb-2">
                  {group.title}
                </p>
                <div className="flex flex-col">
                  {group.links.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => { navigate(link.path); setIsMobileMenuOpen(false); }}
                      className={`py-4 text-left text-2xl font-bold transition-colors border-b border-white/10 ${
                        location.pathname === link.path ? 'text-white' : 'text-slate-400'
                      }`}
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            
            <button 
              onClick={() => navigate('/')}
              className="mt-auto py-4 text-left text-2xl font-bold text-rose-400 border-b border-white/10"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 lg:ml-72 pt-16 lg:pt-0 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}