import { useState } from 'react';
import { 
  Download, Plus, Search, Radio, CheckCircle, XCircle, 
  BatteryWarning, MapPin, SlidersHorizontal, BatteryFull, 
  BatteryLow, BatteryMedium, Wifi, WifiOff, X 
} from 'lucide-react';

export default function AdminDevices() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);

  // Mock Data for the device fleet
  const devices = [
    {
      id: 'bd029365-16f2-4c79-a11a...', name: 'AeroNode — North Wing',
      status: 'Online', location: 'Academic Building — North Wing',
      pm25: 14, voc: 186, battery: 92, signal: 'Strong'
    },
    {
      id: '87ac19d4-6c24-48fd-969c...', name: 'AeroNode — Girls Bathroom',
      status: 'Offline', location: 'Ozanam Building — Girls Bathroom',
      pm25: null, voc: null, battery: 8, signal: 'None'
    },
    {
      id: '761a03ab-920f-432c-b4d8...', name: 'AeroNode — Main Hallway',
      status: 'Online', location: 'CS Building — Main Hallway',
      pm25: 11, voc: 142, battery: 78, signal: 'Good'
    },
    {
      id: 'a3fd09e2-df51-4391-ad20...', name: 'AeroNode — Fake Bathroom',
      status: 'Offline', location: 'Fake Bathroom',
      pm25: null, voc: null, battery: 2, signal: 'None'
    },
    {
      id: 'c91bfa73-384d-42f0-a371...', name: 'AeroNode — South Stairwell',
      status: 'Offline', location: 'ST Building — South Stairwell',
      pm25: null, voc: null, battery: 21, signal: 'Weak'
    },
    {
      id: '59f3fd7c-b1aa-41aa-a647...', name: 'AeroNode — Room 305',
      status: 'Online', location: 'FRC Building — Room 305',
      pm25: 17, voc: 203, battery: 65, signal: 'Good'
    }
  ];

  const openSettings = (device) => {
    setSelectedDevice(device);
    setIsModalOpen(true);
  };

  // Helper to render the right battery icon/color
  const getBatteryDisplay = (level) => {
    if (level > 50) return { icon: BatteryFull, color: 'text-emerald-500' };
    if (level > 20) return { icon: BatteryMedium, color: 'text-orange-500' };
    return { icon: BatteryLow, color: 'text-red-500' };
  };

  // Helper to render the right WiFi icon/color
  const getSignalDisplay = (signal) => {
    if (signal === 'None') return { icon: WifiOff, color: 'text-red-500' };
    if (signal === 'Weak') return { icon: Wifi, color: 'text-orange-500' };
    return { icon: Wifi, color: 'text-emerald-500' };
  };

  return (
    <>
    <main className="p-6 lg:p-10 max-w-350 mx-auto animate-page-in space-y-8 relative">
      
      {/* ================= HEADER ================= */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-1">Device Management</p>
          <h1 className="text-2xl lg:text-3xl font-bold text-[#002D62]">Sensor Fleet Management</h1>
          <p className="text-sm text-slate-500 mt-1">28 total sensors in the network</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto mt-2 sm:mt-0">
          <button className="flex-1 sm:flex-none flex justify-center items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold py-2.5 px-4 rounded-xl hover:bg-slate-50 transition shadow-sm cursor-pointer">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex-1 sm:flex-none flex justify-center items-center gap-2 bg-[#002D62] hover:bg-[#001f44] text-white font-bold py-2.5 px-5 rounded-xl shadow-md transition-colors cursor-pointer">
            <Plus className="w-5 h-5" />
            <span className="hidden sm:inline">Add Sensor</span>
            <span className="sm:hidden">Add</span>
          </button>
        </div>
      </header>

      {/* ================= KPI CARDS ================= */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-500 mb-1">Total Devices</p>
            <p className="text-3xl font-bold text-slate-800">28</p>
          </div>
          <div className="p-3 bg-slate-50 text-slate-400 rounded-xl"><Radio className="w-5 h-5" /></div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-500 mb-1">Online & Active</p>
            <p className="text-3xl font-bold text-emerald-600">3</p>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-500 rounded-xl"><CheckCircle className="w-5 h-5" /></div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-500 mb-1">Offline</p>
            <p className="text-3xl font-bold text-red-600">25</p>
          </div>
          <div className="p-3 bg-red-50 text-red-500 rounded-xl"><XCircle className="w-5 h-5" /></div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-500 mb-1">Needs Attention</p>
            <p className="text-3xl font-bold text-orange-500">27</p>
          </div>
          <div className="p-3 bg-orange-50 text-orange-500 rounded-xl"><BatteryWarning className="w-5 h-5" /></div>
        </div>
      </div>

      {/* ================= FILTERS & TABLE ================= */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col min-w-0 overflow-hidden">
        
        {/* Table Toolbar */}
        <div className="p-4 lg:p-6 border-b border-slate-100 flex flex-col lg:flex-row justify-between gap-4">
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search by ID, name, or location..." 
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-[#002D62] focus:bg-white w-full transition-all"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <select className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 outline-none cursor-pointer">
              <option>Status: All</option>
              <option>Online</option>
              <option>Offline</option>
            </select>
            <select className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 outline-none cursor-pointer">
              <option>Location: All</option>
              <option>Academic Building</option>
              <option>Ozanam Building</option>
            </select>
            <select className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 outline-none cursor-pointer">
              <option>Sort: Battery Low to High</option>
              <option>Sort: Name A-Z</option>
            </select>
          </div>
        </div>

        {/* Header Row */}
        <div className="px-6 py-4 flex justify-between items-center border-b border-slate-100">
          <div>
            <h2 className="text-lg font-bold text-slate-900">All Sensors</h2>
            <p className="text-xs text-slate-400">Showing 6 of 28 devices</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live network status
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-225">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="py-3 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Device Identity</th>
                <th className="py-3 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="py-3 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Location</th>
                <th className="py-3 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Readings</th>
                <th className="py-3 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Health</th>
                <th className="py-3 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device, idx) => {
                const BatteryIcon = getBatteryDisplay(device.battery).icon;
                const batteryColor = getBatteryDisplay(device.battery).color;
                const SignalIcon = getSignalDisplay(device.signal).icon;
                const signalColor = getSignalDisplay(device.signal).color;

                return (
                  <tr key={idx} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition group">
                    {/* Identity */}
                    <td className="py-4 px-6">
                      <p className="text-sm font-bold text-slate-900">{device.name}</p>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">{device.id}</p>
                    </td>

                    {/* Status */}
                    <td className="py-4 px-6">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${
                        device.status === 'Online' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {device.status}
                      </span>
                    </td>

                    {/* Location */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-xs font-semibold text-slate-600">{device.location}</span>
                      </div>
                    </td>

                    {/* Readings */}
                    <td className="py-4 px-6">
                      {device.status === 'Online' ? (
                        <div className="flex items-center gap-4">
                          <div>
                            <p className="text-[9px] font-bold text-slate-400 uppercase">PM2.5</p>
                            <p className="text-xs font-bold text-slate-900">{device.pm25} <span className="text-[9px] font-medium text-slate-500">µg/m³</span></p>
                          </div>
                          <div>
                            <p className="text-[9px] font-bold text-slate-400 uppercase">VOC</p>
                            <p className="text-xs font-bold text-slate-900">{device.voc} <span className="text-[9px] font-medium text-slate-500">ppb</span></p>
                          </div>
                        </div>
                      ) : (
                        <span className="text-slate-300 font-bold">—</span>
                      )}
                    </td>

                    {/* Health */}
                    <td className="py-4 px-6">
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2">
                          <BatteryIcon className={`w-3.5 h-3.5 ${batteryColor}`} />
                          <span className="text-[10px] font-bold text-slate-700">{device.battery}%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SignalIcon className={`w-3.5 h-3.5 ${signalColor}`} />
                          <span className="text-[10px] font-bold text-slate-500">{device.signal}</span>
                        </div>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-6 text-right">
                      <button 
                        onClick={() => openSettings(device)}
                        className="p-2 text-slate-400 hover:text-[#002D62] hover:bg-[#002D62]/10 rounded-lg transition-colors cursor-pointer inline-flex"
                      >
                        <SlidersHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="px-6 py-4 border-t border-slate-100 flex justify-between items-center bg-slate-50/50 rounded-b-2xl">
          <p className="text-xs text-slate-500">1-6 of 28 sensors</p>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 bg-white hover:bg-slate-50 transition cursor-pointer">&lt;</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 bg-white hover:bg-slate-50 transition cursor-pointer">&gt;</button>
          </div>
        </div>

      </div>

    </main>

      {/* ================= THRESHOLD SETTINGS MODAL ================= */}
      {/* Rendered outside <main> so animate-page-in's stacking context doesn't trap the fixed backdrop */}
      {isModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />
          
          <div className="relative bg-white rounded-3xl w-full max-w-md shadow-2xl p-8 animate-page-in">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">Detection thresholds</h3>
              <p className="text-xs text-slate-500 mt-1">
                <span className="font-semibold text-[#002D62]">{selectedDevice?.name}</span> — leave a field blank to use the system default.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  PM2.5 threshold (µg/m³)
                </label>
                <input 
                  type="number" 
                  placeholder="35 (default)"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-[#002D62] focus:bg-white transition-all"
                />
                <p className="text-[10px] text-slate-400 mt-1.5">Currently 35 µg/m³ (default)</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  VOC threshold (ppb)
                </label>
                <input 
                  type="number" 
                  placeholder="0.6 (default)"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-[#002D62] focus:bg-white transition-all"
                />
                <p className="text-[10px] text-slate-400 mt-1.5">Currently 0.6 (default)</p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 mt-8 pt-6 border-t border-slate-100">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-[#002D62] hover:bg-[#001f44] shadow-md transition-colors cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}