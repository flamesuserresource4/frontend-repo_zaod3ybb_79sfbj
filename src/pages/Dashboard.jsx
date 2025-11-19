import { NavLink, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import DashboardProjects from '../sections/DashboardProjects'
import DashboardMembers from '../sections/DashboardMembers'
import DashboardNotifications from '../sections/DashboardNotifications'
import DashboardSettings from '../sections/DashboardSettings'

export default function Dashboard(){
  const { user } = useAuth()
  if(!user) return <Navigate to="/login" replace />
  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="mt-4 flex gap-2 overflow-x-auto">
        {['projects','members','notifications','settings'].map(t => (
          <NavLink key={t} to={t} className={({isActive})=>`px-3 py-1.5 rounded-full border ${isActive?'bg-indigo-500 text-white border-indigo-500':'border-white/10 text-slate-300 hover:bg-white/10'}`}>{t[0].toUpperCase()+t.slice(1)}</NavLink>
        ))}
      </div>

      <div className="mt-6">
        <Routes>
          <Route index element={<Navigate to="projects" replace />} />
          <Route path="projects" element={<DashboardProjects />} />
          <Route path="members" element={<DashboardMembers />} />
          <Route path="notifications" element={<DashboardNotifications />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Routes>
      </div>
    </div>
  )
}
