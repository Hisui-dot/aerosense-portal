import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 1. Shared
import Login from './components/shared/Login'; // Your temporary login screen

// 2. Guard Imports
import Layout from './components/guard/Layout';
import GuardDashboard from './components/guard/GuardDashboard';
import ActiveThreats from './components/guard/ActiveThreats';
import Profile from './components/guard/Profile';
import Settings from './components/guard/Settings';

// 3. Admin Imports
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminAlerts from './components/admin/AdminAlerts';
import AdminAnalytics from './components/admin/AdminAnalytics';
import AdminDevices from './components/admin/AdminDevices';
import AdminUsers from './components/admin/AdminUsers';
import AdminLogs from './components/admin/AdminLogs';
import AdminSettings from './components/admin/AdminSettings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Login Route */}
        <Route path="/" element={<Login />} />
        
        {/* ================= GUARD ROUTES ================= */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<GuardDashboard />} />
          <Route path="/threats" element={<ActiveThreats />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* ================= ADMIN ROUTES ================= */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* 
            The 'index' route means when you visit /admin exactly, 
            it will load the AdminDashboard inside the AdminLayout. 
          */}
          <Route index element={<AdminDashboard />} /> 
          <Route path="alerts" element={<AdminAlerts />} />
          <Route path="analytics" element={<AdminAnalytics />} />
          <Route path="sensors" element={<AdminDevices />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="logs" element={<AdminLogs />} />
          <Route path="settings" element={<AdminSettings />} />
          {/* Later, you can add more admin pages here like: */}
          {/* <Route path="alerts" element={<AdminAlerts />} /> */}
          {/* <Route path="sensors" element={<AdminSensors />} /> */}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}