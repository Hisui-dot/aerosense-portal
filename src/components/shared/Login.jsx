import { useNavigate } from 'react-router-dom';
import { Shield, Briefcase } from 'lucide-react';
import aeroSenseLogo from '../../assets/AEROSENSELOGO.png';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0B192C] flex flex-col items-center justify-center p-6 text-white font-sans selection:bg-[#00B4D8]/20">
      
      {/* Branding */}
      <div className="mb-12 flex flex-col items-center gap-4">
        <img src={aeroSenseLogo} alt="AeroSense" className="h-16 w-auto drop-shadow-xl" />
        <div className="text-4xl font-extrabold tracking-tight">
          Aero<span className="text-[#00B4D8]">Sense</span>
        </div>
        <p className="text-slate-400 text-sm font-medium mt-2">
          Development Mode: Select your role
        </p>
      </div>

      {/* Login Actions */}
      <div className="w-full max-w-sm space-y-4">
        
        {/* Guard Path */}
        <button
          onClick={() => navigate('/dashboard')}
          className="w-full bg-[#00B4D8] hover:bg-[#0096c7] text-[#050B14] font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-[#00B4D8]/20 transition-all active:scale-[0.98] cursor-pointer"
        >
          <Shield className="w-5 h-5 stroke-[2.5]" />
          Login as Guard
        </button>

        {/* Admin Path */}
        <button
          onClick={() => navigate('/admin')}
          className="w-full bg-[#112240] hover:bg-[#1a315a] text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-3 border border-slate-700 shadow-lg transition-all active:scale-[0.98] cursor-pointer"
        >
          <Briefcase className="w-5 h-5 text-slate-400" />
          Login as Admin
        </button>
        
      </div>
    </div>
  );
}