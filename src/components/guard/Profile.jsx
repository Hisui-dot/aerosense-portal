import { LogOut, Activity } from 'lucide-react';

export default function Profile() {
  return (
    <main className="animate-page-in flex-1 lg:ml-72 w-full pb-32 lg:pb-12">
      
      {/* Dark Navy Header Background */}
      <div className="bg-[#0B192C] pt-12 pb-24 px-6 lg:px-10 lg:rounded-bl-3xl">
        <p className="text-[10px] text-[#00B4D8] font-bold tracking-widest uppercase mb-1">Account</p>
        <h1 className="text-3xl font-bold text-white">Guard Profile</h1>
      </div>

      <div className="px-6 lg:px-10 -mt-12 max-w-3xl mx-auto">
        
        {/* Identity Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200/60 p-8 flex flex-col items-center text-center mb-6">
          <div className="relative mb-4">
            <div className="w-20 h-20 rounded-full bg-[#0B192C] text-[#00B4D8] flex items-center justify-center text-2xl font-bold border-4 border-white shadow-md">
              AG
            </div>
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Alex Grant</h2>
          <p className="text-sm text-slate-500 mb-4">Night Shift Operator</p>
          <span className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-200">
            Guard ID: #AS-8942
          </span>
        </div>

        {/* Shift Details Section */}
        <div>
          <div className="flex items-center justify-between mb-3 px-2">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Current Assignment</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200/60 p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-900">Shift Details</h3>
              <span className="bg-emerald-50 text-emerald-600 border border-emerald-200 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                On duty
              </span>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-500 flex items-center justify-center shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Today's hours</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">10:00 PM — 6:00 AM</p>
                </div>
                <div className="text-xs font-bold text-slate-400">8 hrs</div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-2">
                <div className="bg-[#00B4D8] w-[55%] h-full rounded-full"></div>
              </div>
              <div className="flex justify-between text-[10px] font-medium">
                <span className="text-slate-400">4h 21m completed</span>
                <span className="text-[#00B4D8]">3h 39m remaining</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="border border-slate-100 rounded-2xl p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Assigned site</p>
                <p className="text-xs font-bold text-slate-900">AeroSense North Campus</p>
              </div>
              <div className="border border-slate-100 rounded-2xl p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Supervisor</p>
                <p className="text-xs font-bold text-slate-900">Maria Chen</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-[#BE123C] hover:bg-[#9F1239] text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-rose-900/20 transition-all active:scale-[0.98] cursor-pointer">
          <LogOut className="w-5 h-5" />
          End Shift & Sign Out
        </button>

      </div>
    </main>
  );
}