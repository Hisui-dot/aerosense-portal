import { useState } from 'react';
import { Save, Info, SlidersHorizontal, Database, Trash2 } from 'lucide-react';

export default function AdminSettings() {
  const [requireBoth, setRequireBoth] = useState(true);

  return (
    <main className="p-6 lg:p-10 max-w-250 mx-auto animate-page-in space-y-8 pb-20">
      
      {/* ================= HEADER ================= */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-1">Administration</p>
          <h1 className="text-2xl lg:text-3xl font-bold text-[#002D62]">System Settings</h1>
          <p className="text-sm text-slate-500 mt-1">Global detection defaults and data retention</p>
        </div>
        <button className="flex items-center gap-2 bg-[#002D62] hover:bg-[#001f44] text-white font-bold py-2.5 px-6 rounded-xl shadow-md transition-colors cursor-pointer shrink-0">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </header>

      {/* ================= INFO BANNER ================= */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3">
        <Info className="w-5 h-5 text-[#002D62] shrink-0 mt-0.5" />
        <p className="text-sm text-slate-700">
          These are <span className="font-bold">global defaults</span>. A device with its own threshold overrides them — set per-device values on the Sensor Devices page.
        </p>
      </div>

      {/* ================= CARD 1: DETECTION THRESHOLDS ================= */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 lg:p-8">
        <div className="flex items-start gap-4 mb-8">
          <div className="p-3 bg-slate-50 text-[#002D62] rounded-xl shrink-0">
            <SlidersHorizontal className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Detection Thresholds</h2>
            <p className="text-xs text-slate-500 mt-1">Thresholds used to flag a reading when a device has no override.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PM2.5 */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">PM2.5 threshold (µg/m³)</label>
            <input 
              type="number" 
              defaultValue={50}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-[#002D62] focus:bg-white transition-all"
            />
          </div>

          {/* VOC */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">VOC threshold (ppm)</label>
            <input 
              type="number" 
              defaultValue={300}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-[#002D62] focus:bg-white transition-all"
            />
          </div>

          {/* Sensitivity Dropdown */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">Sensitivity level</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-[#002D62] focus:bg-white transition-all appearance-none cursor-pointer">
              <option>Low</option>
              <option selected>Medium</option>
              <option>High</option>
            </select>
          </div>

          {/* Toggle Switch */}
          <div className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-xl p-4 mt-2 md:mt-0">
            <div>
              <p className="text-sm font-bold text-slate-900">Require both sensors</p>
              <p className="text-[10px] text-slate-500 mt-0.5">Flag only when PM2.5 and VOC both exceed threshold.</p>
            </div>
            <button 
              onClick={() => setRequireBoth(!requireBoth)}
              className={`w-12 h-6 rounded-full relative transition-colors duration-300 ease-in-out cursor-pointer shrink-0 ${
                requireBoth ? 'bg-[#002D62]' : 'bg-slate-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-300 ease-in-out shadow-sm ${
                requireBoth ? 'translate-x-6.5' : 'translate-x-0.5'
              }`} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= CARD 2: DATA RETENTION & DANGER ZONE ================= */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 lg:p-8">
        <div className="flex items-start gap-4 mb-8">
          <div className="p-3 bg-slate-50 text-[#002D62] rounded-xl shrink-0">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Data Retention</h2>
            <p className="text-xs text-slate-500 mt-1">How long activity logs are kept before cleanup.</p>
          </div>
        </div>

        <div className="mb-8 max-w-md">
          <label className="block text-xs font-bold text-slate-700 mb-2">Log retention (days)</label>
          <input 
            type="number" 
            defaultValue={30}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-[#002D62] focus:bg-white transition-all"
          />
          <p className="text-[10px] text-slate-400 mt-2">Logs older than this value are automatically removed.</p>
        </div>

        {/* DANGER ZONE */}
        <div className="bg-red-50 border border-red-100 rounded-xl p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-red-100 text-red-600 rounded-lg shrink-0 mt-0.5">
              <Trash2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-red-800">Clear all system logs</h3>
              <p className="text-xs text-red-600 mt-0.5">Permanently delete every log entry. This cannot be undone.</p>
            </div>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-2.5 px-6 rounded-xl shadow-sm transition-colors cursor-pointer shrink-0">
            Clear All Logs
          </button>
        </div>
      </div>

    </main>
  );
}