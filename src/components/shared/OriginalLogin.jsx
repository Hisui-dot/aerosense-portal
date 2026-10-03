import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Activity, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import aeroSenseLogo from '../../assets/AEROSENSELOGO.png'; // Adjust path if needed

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
    // This jumps to the dashboard when you click Sign In
    navigate('/dashboard'); 
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-white selection:bg-brand-cyan/20 selection:text-brand-dark">
      
      {/* ================= LEFT HERO PANEL (DESKTOP ONLY) ================= */}
      <section className="hidden lg:flex lg:w-1/2 relative bg-[#041427] flex-col justify-between p-12 xl:p-16 overflow-hidden select-none">
        
        {/* Subtle Radar / Concentric Rings & Grid Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-size-[4rem_4rem]" />
          <div className="absolute -top-24 -right-24 w-175 h-175 rounded-full border border-cyan-500/10" />
          <div className="absolute -top-8 -right-8 w-135 h-135 rounded-full border border-cyan-500/10" />
          <div className="absolute top-16 right-16 w-90 h-90 rounded-full border border-cyan-500/15" />
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 left-16 w-2 h-2 rounded-full bg-cyan-400/60 shadow-[0_0_8px_#00b4d8]" />
          <div className="absolute bottom-1/2 right-1/3 w-1.5 h-1.5 rounded-full bg-cyan-300/40 shadow-[0_0_6px_#00b4d8]" />
        </div>

        {/* Top: Brand Logo with PNG */}
        <div className="relative z-10 flex items-center gap-3">
          <img 
            src={aeroSenseLogo} 
            alt="AeroSense Logo" 
            className="h-10 w-auto object-contain drop-shadow" 
          />
          <div>
            <div className="text-xl font-bold tracking-tight text-white flex items-center">
              Aero<span className="text-[#00B4D8]">Sense</span>
            </div>
            <p className="text-[10px] tracking-widest text-slate-400 font-semibold uppercase">
              Intelligent Environments
            </p>
          </div>
        </div>

        {/* Center / Bottom: Info Card + Main Typography */}
        <div className="relative z-10 max-w-lg mt-auto mb-10">
          <div className="inline-flex items-center gap-4 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-xl">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-[#00b4d8]">
              <Activity className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">Sensor Network Active</span>
              <span className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                <span>99.8% Uptime</span>
                <span className="w-1 h-1 rounded-full bg-slate-500" />
                <span>24 Nodes Online</span>
                <span className="w-1 h-1 rounded-full bg-slate-500" />
                <span className="text-emerald-400 font-medium">0 Alerts</span>
              </span>
            </div>
            <div className="ml-3 pl-3 border-l border-white/10">
              <svg className="w-12 h-6 text-[#00b4d8]" viewBox="0 0 48 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 18 L12 14 L22 19 L32 7 L46 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <div className="text-xs font-bold uppercase tracking-wider text-[#00b4d8] mb-3 flex items-center gap-2">
            <span className="w-4 h-0.5 bg-[#00b4d8]" />
            Environmental Intelligence
          </div>

          <h1 className="text-4xl xl:text-5xl font-bold tracking-tight text-white leading-tight">
            Advanced IoT <br />Detection System
          </h1>

          <p className="mt-4 text-base text-slate-300 font-normal leading-relaxed">
            Real-time vape, acoustic, and air quality telemetry for secure premises.
          </p>
        </div>

        {/* Footer features */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex items-center gap-6 text-xs text-slate-400">
          <span>Enterprise-grade security</span>
          <span>•</span>
          <span>Live telemetry</span>
          <span>•</span>
          <span>Always-on monitoring</span>
        </div>
      </section>

      {/* ================= RIGHT PANEL: FORM (DESKTOP + IPHONE) ================= */}
      <section className="flex-1 flex flex-col justify-between items-center px-6 sm:px-12 py-8 lg:py-16 min-h-screen">
        
        {/* Mobile Header (Safe Area clearance + Big Centered Brand PNG) */}
        <div className="w-full flex flex-col items-center pt-8 pb-4 lg:hidden">
          <div className="w-16 h-16 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center p-2 mb-3">
            <img 
              src={aeroSenseLogo} 
              alt="AeroSense Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Aero<span className="text-[#00B4D8]">Sense</span>
          </h2>
          <p className="text-[10px] tracking-widest text-slate-400 font-semibold uppercase mt-0.5">
            Intelligent Environments
          </p>
        </div>

        {/* Center Container */}
        <div className="w-full max-w-105 my-auto">
          {/* Header */}
          <div className="text-center lg:text-left mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Welcome back
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Enter your credentials to access the console
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Username/Email Input */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Username or Work Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@organization.com"
                  className="w-full h-12 pl-10 pr-4 text-base sm:text-sm bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 outline-none transition duration-150 focus:border-[#00b4d8] focus:ring-4 focus:ring-[#00b4d8]/15"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full h-12 pl-10 pr-11 text-base sm:text-sm bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 outline-none transition duration-150 focus:border-[#00b4d8] focus:ring-4 focus:ring-[#00b4d8]/15"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-xs sm:text-sm pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <div 
                  onClick={() => setRememberMe(!rememberMe)}
                  className={`w-4 h-4 rounded border flex items-center justify-center transition ${
                    rememberMe ? 'bg-[#0084d1] border-[#0084d1] text-white' : 'border-slate-300 bg-white'
                  }`}
                >
                  {rememberMe && <Check className="w-3 h-3 stroke-3" />}
                </div>
                <span className="text-slate-600 text-xs sm:text-sm">Remember this device</span>
              </label>

              <a href="#forgot" className="text-xs sm:text-sm font-medium text-[#0084d1] hover:text-[#00b4d8] transition">
                Forgot password?
              </a>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-linear-to-r from-[#0077b6] to-[#0096c7] hover:from-[#0084d1] hover:to-[#00a6d6] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 transition active:scale-[0.99] cursor-pointer"
            >
              <span>Sign In</span>
              <span className="text-base leading-none">→</span>
            </button>
          </form>

          {/* Registration Hint */}
          <div className="text-center mt-8 text-xs text-slate-500">
            <span>Don't have an organization account?</span>
            <div className="mt-1">
              <a href="#contact" className="text-slate-900 font-semibold hover:underline">Contact Administrator</a>
              <span className="mx-1.5 text-slate-300">or</span>
              <a href="#register" className="text-[#0084d1] font-semibold hover:underline">Register</a>
            </div>
          </div>
        </div>

        {/* Security / Compliance Badges Footer */}
        <div className="w-full max-w-105 pt-6 flex items-center justify-center gap-4 text-[10px] tracking-wider text-slate-400 font-medium uppercase border-t border-slate-100">
          <span>Encrypted</span>
          <span>•</span>
          <span>SOC 2 Compliant</span>
          <span>•</span>
          <span>Secure Access</span>
        </div>
      </section>
    </div>
  );
}