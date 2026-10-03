import { useState } from 'react';
import { Activity, User, FileText, ChevronRight } from 'lucide-react';

// Moved outside to fix the nested component error
const Toggle = ({ enabled, setEnabled }) => (
  <div 
    onClick={() => setEnabled(!enabled)}
    className={`w-12 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${enabled ? 'bg-[#00B4D8]' : 'bg-slate-200'}`}
  >
    <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${enabled ? 'translate-x-5' : 'translate-x-0'}`} />
  </div>
);

export default function Settings() {
  const [criticalAlerts, setCriticalAlerts] = useState(true);
  const [haptic, setHaptic] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(true);

  return (
    <main className="animate-page-in flex-1 lg:ml-72 w-full pb-32 lg:pb-12">
      
      {/* Dark Navy Header Background */}
      <div className="bg-[#0B192C] pt-12 pb-24 px-6 lg:px-10 lg:rounded-bl-3xl">
        <p className="text-[10px] text-[#00B4D8] font-bold tracking-widest uppercase mb-1">Preferences</p>
        <h1 className="text-3xl font-bold text-white">App Settings</h1>
      </div>

      <div className="px-6 lg:px-10 -mt-12 max-w-3xl mx-auto lg:mx-0">
        
        {/* Notifications Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200/60 p-6 mb-6">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-4">Alert Preferences</p>
          <h2 className="text-lg font-bold text-slate-900 mb-6">Notifications</h2>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-slate-900">Critical Alert Overrides</p>
                <p className="text-xs text-slate-500 mt-0.5">Play sound even when device is silent</p>
              </div>
              <Toggle enabled={criticalAlerts} setEnabled={setCriticalAlerts} />
            </div>
            
            <div className="w-full h-px bg-slate-100" />
            
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-slate-900">Haptic Vibrations</p>
              <Toggle enabled={haptic} setEnabled={setHaptic} />
            </div>

            <div className="w-full h-px bg-slate-100" />
            
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-slate-900">Background Push Notifications</p>
              <Toggle enabled={pushNotifs} setEnabled={setPushNotifs} />
            </div>
          </div>
        </div>

        {/* System & Support Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200/60 p-6 mb-8">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-4">Support & Resources</p>
          <h2 className="text-lg font-bold text-slate-900 mb-4">System</h2>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-2xl transition cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Check System Connection</p>
                  <p className="text-xs text-slate-500 mt-0.5">All systems online</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition" />
            </div>

            <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-2xl transition cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Contact Administrator</p>
                  <p className="text-xs text-slate-500 mt-0.5">Get help from your supervisor</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition" />
            </div>

            <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-2xl transition cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">View Protocol (SOP)</p>
                  <p className="text-xs text-slate-500 mt-0.5">Security response procedures</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition" />
            </div>
          </div>
        </div>

        <p className="text-center text-[10px] text-slate-400 font-medium pb-8">
          AeroSense Guard - Version 1.0.0
        </p>
      </div>
    </main>
  );
}