import { useAuth } from '../providers/AuthProvider'

export default function DashboardSettings(){
  const { user, logout } = useAuth()
  return (
    <div className="space-y-4">
      <div className="glass rounded-lg p-4">
        <div className="text-sm text-slate-400">Signed in as</div>
        <div className="font-medium">{user?.email}</div>
      </div>
      <button onClick={logout} className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20">Sign out</button>
    </div>
  )
}
