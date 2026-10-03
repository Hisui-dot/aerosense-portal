import { useState, useEffect } from 'react';
import { X, Building2, MapPin, Camera, Send } from 'lucide-react';

export default function QuickReportModal({ isOpen, onClose }) {
  const [severity, setSeverity] = useState('Medium');

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-end sm:items-center justify-center sm:p-4">
      
      {/* Dark Glassmorphic Backdrop (Fades in) */}
      <div 
        className="absolute inset-0 bg-[#0B192C]/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal Container (Slides up from bottom) */}
      <div className="relative bg-white w-full max-w-130 rounded-t-4xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 z-10 animate-modal-up">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Quick Report</h2>
            <p className="text-xs text-slate-500 mt-1">
              File an incident you witnessed in person — no sensor needed
            </p>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition cursor-pointer shrink-0"
          >
            <X className="w-4 h-4 stroke-3" />
          </button>
        </div>

        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          
          {/* Row 1: Floor & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Floor</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Building2 className="w-4 h-4 text-slate-400" />
                </div>
                <select className="w-full h-11 pl-10 pr-4 text-sm bg-[#F8FAFC] border border-slate-200 rounded-xl text-slate-700 outline-none transition focus:border-[#00B4D8] focus:ring-4 focus:ring-[#00B4D8]/15 appearance-none cursor-pointer defaultValue=''">
                  <option value="" disabled>Select floor</option>
                  <option value="ground">Ground Floor</option>
                  <option value="second">2nd Floor</option>
                  <option value="parking">Parking Level</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Location / Zone</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <MapPin className="w-4 h-4 text-slate-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Enter a location"
                  className="w-full h-11 pl-10 pr-4 text-sm bg-[#F8FAFC] border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 outline-none transition focus:border-[#00B4D8] focus:ring-4 focus:ring-[#00B4D8]/15"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Note */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Incident note</label>
            <textarea 
              placeholder="Briefly describe what you witnessed..."
              className="w-full h-24 p-3.5 text-sm bg-[#F8FAFC] border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 outline-none transition focus:border-[#00B4D8] focus:ring-4 focus:ring-[#00B4D8]/15 resize-none"
            />
          </div>

          {/* Row 3: Severity Segmented Control */}
          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Severity</label>
            <div className="flex bg-[#F8FAFC] p-1.5 rounded-2xl border border-slate-100">
              
              <button
                type="button"
                onClick={() => setSeverity('Low')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  severity === 'Low' ? 'bg-emerald-100 text-emerald-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${severity === 'Low' ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                Low
              </button>

              <button
                type="button"
                onClick={() => setSeverity('Medium')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  severity === 'Medium' ? 'bg-amber-100 text-amber-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${severity === 'Medium' ? 'bg-amber-500' : 'bg-slate-300'}`} />
                Medium
              </button>

              <button
                type="button"
                onClick={() => setSeverity('High')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  severity === 'High' ? 'bg-rose-100 text-rose-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${severity === 'High' ? 'bg-rose-500' : 'bg-slate-300'}`} />
                High
              </button>
            </div>
          </div>

          {/* Row 4: Photo Upload Zone */}
          <div className="mt-2">
            <button 
              type="button"
              className="w-full flex flex-col items-center justify-center py-6 bg-[#00B4D8]/5 border-2 border-dashed border-[#00B4D8]/30 rounded-2xl hover:bg-[#00B4D8]/10 transition-colors cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Camera className="w-5 h-5 text-[#00B4D8]" />
              </div>
              <span className="text-xs font-bold text-slate-800">Take live photo</span>
              <span className="text-[10px] text-slate-400 mt-1">Real-time camera only</span>
            </button>
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <button 
              type="submit"
              className="w-full h-12 bg-linear-to-b from-[#0B192C] to-[#112240] text-white rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg shadow-[#0B192C]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all active:translate-y-0 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              File Report
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}