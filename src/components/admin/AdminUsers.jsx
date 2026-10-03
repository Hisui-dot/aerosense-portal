import { useState } from 'react';
import { 
  Download, Plus, Search, Users, Shield, CheckCircle, 
  UserMinus, MoreHorizontal, Pencil, Ban, UserX, Trash2 
} from 'lucide-react';

export default function AdminUsers() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  // User Data matching the Figma mockup
  const users = [
    {
      id: 1, name: 'Adrianne Montero', email: 'adrianne.montero@aerosense.ph',
      badge: 'ADM-001', role: 'Admin', status: 'Active',
      contact: '+63 917 482 0193', initials: 'AM', color: 'bg-[#002D62]'
    },
    {
      id: 2, name: 'Alex Grant', email: 'alex.grant@aerosense.ph',
      badge: 'GRD-104', role: 'Guard', status: 'Active',
      contact: '+63 905 338 7241', initials: 'AG', color: 'bg-emerald-600'
    },
    {
      id: 3, name: 'Anette Daligcon', email: 'anette.daligcon@aerosense.ph',
      badge: 'GRD-118', role: 'Guard', status: 'Active',
      contact: '+63 919 671 4085', initials: 'AD', color: 'bg-purple-600'
    },
    {
      id: 4, name: 'Marcus Reyes', email: 'marcus.reyes@aerosense.ph',
      badge: 'GRD-126', role: 'Guard', status: 'Suspended',
      contact: '+63 928 550 1632', initials: 'MR', color: 'bg-orange-500'
    }
  ];

  return (
    <main className="p-6 lg:p-10 max-w-350 mx-auto animate-page-in space-y-8 relative pb-32">
      
      {/* ================= HEADER ================= */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-1">Access Control</p>
          <h1 className="text-2xl lg:text-3xl font-bold text-[#002D62]">User Management</h1>
          <p className="text-sm text-slate-500 mt-1">4 accounts registered in the system</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold py-2.5 px-4 rounded-xl hover:bg-slate-50 transition shadow-sm cursor-pointer">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center gap-2 bg-[#002D62] hover:bg-[#001f44] text-white font-bold py-2.5 px-5 rounded-xl shadow-md transition-colors cursor-pointer">
            <Plus className="w-5 h-5" />
            Add User
          </button>
        </div>
      </header>

      {/* ================= KPI CARDS ================= */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-500 mb-1">Total Users</p>
            <p className="text-3xl font-bold text-slate-800">4</p>
          </div>
          <div className="p-3 bg-slate-50 text-slate-400 rounded-xl"><Users className="w-5 h-5" /></div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-500 mb-1">System Admins</p>
            <p className="text-3xl font-bold text-[#002D62]">1</p>
          </div>
          <div className="p-3 bg-blue-50 text-[#002D62] rounded-xl"><Shield className="w-5 h-5" /></div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-500 mb-1">Active Personnel</p>
            <p className="text-3xl font-bold text-emerald-600">3</p>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-500 rounded-xl"><CheckCircle className="w-5 h-5" /></div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-500 mb-1">Inactive / Suspended</p>
            <p className="text-3xl font-bold text-orange-500">0</p>
          </div>
          <div className="p-3 bg-orange-50 text-orange-500 rounded-xl"><UserMinus className="w-5 h-5" /></div>
        </div>
      </div>

      {/* ================= FILTERS & TABLE ================= */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-2">
        <div className="relative w-full lg:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search by name, email, or badge..." 
            className="pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-[#002D62] w-full transition-all shadow-sm"
          />
        </div>
        <div className="flex items-center gap-3">
          <select className="bg-white border border-slate-200 shadow-sm rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 outline-none cursor-pointer">
            <option>Role: All</option>
            <option>Admin</option>
            <option>Guard</option>
          </select>
          <select className="bg-white border border-slate-200 shadow-sm rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 outline-none cursor-pointer">
            <option>Status: All</option>
            <option>Active</option>
            <option>Suspended</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col relative z-10">
        
        {/* Header Row */}
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Users Directory</h2>
            <p className="text-xs text-slate-400 mt-0.5">Manage system access and personnel accounts</p>
          </div>
          <p className="text-xs font-semibold text-slate-500">4 registered users</p>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-225">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">User</th>
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Badge ID</th>
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Role</th>
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Contact</th>
                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition">
                  {/* User Profile */}
                  <td className="py-4 px-6 flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full text-white flex items-center justify-center text-xs font-bold shrink-0 ${user.color}`}>
                      {user.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{user.name}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{user.email}</p>
                    </div>
                  </td>

                  {/* Badge */}
                  <td className="py-4 px-6">
                    <span className="text-xs font-mono font-semibold text-slate-600">{user.badge}</span>
                  </td>

                  {/* Role */}
                  <td className="py-4 px-6">
                    {user.role === 'Admin' ? (
                      <span className="bg-[#002D62] text-white text-[10px] font-bold px-3 py-1 rounded-full">Admin</span>
                    ) : (
                      <span className="bg-slate-100 text-slate-600 border border-slate-200 text-[10px] font-bold px-3 py-1 rounded-full">Guard</span>
                    )}
                  </td>

                  {/* Status */}
                  <td className="py-4 px-6">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${
                      user.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {user.status}
                    </span>
                  </td>

                  {/* Contact */}
                  <td className="py-4 px-6">
                    <span className="text-xs font-medium text-slate-500">{user.contact}</span>
                  </td>

                  {/* Actions (Dropdown) */}
                  <td className="py-4 px-6 text-right relative">
                    <button 
                      onClick={() => toggleDropdown(user.id)}
                      className={`p-2 rounded-lg transition-colors cursor-pointer inline-flex ${
                        activeDropdown === user.id ? 'bg-[#002D62]/10 text-[#002D62]' : 'text-slate-400 hover:text-[#002D62] hover:bg-[#002D62]/10'
                      }`}
                    >
                      <MoreHorizontal className="w-5 h-5" />
                    </button>

                    {/* Popover Menu */}
                    {activeDropdown === user.id && (
                      <>
                        {/* Invisible overlay to close dropdown when clicking outside */}
                        <div 
                          className="fixed inset-0 z-40" 
                          onClick={() => setActiveDropdown(null)}
                        />
                        <div className="absolute right-8 top-10 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 text-left animate-in fade-in slide-in-from-top-2">
                          <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
                            <Pencil className="w-4 h-4 text-slate-400" /> Edit
                          </button>
                          <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-orange-600 hover:bg-orange-50 transition-colors">
                            <Ban className="w-4 h-4 text-orange-400" /> Suspend
                          </button>
                          <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
                            <UserX className="w-4 h-4 text-slate-400" /> Deactivate
                          </button>
                          <div className="w-full h-px bg-slate-100 my-1" />
                          <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors">
                            <Trash2 className="w-4 h-4 text-red-400" /> Delete
                          </button>
                        </div>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 flex justify-between items-center bg-slate-50/50 rounded-b-2xl">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Showing all 4 accounts</p>
          <p className="text-[10px] text-slate-400">Last updated today at 11:32 AM</p>
        </div>
      </div>
    </main>
  );
}