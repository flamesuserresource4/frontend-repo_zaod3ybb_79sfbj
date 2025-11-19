export default function DashboardNotifications(){
  return (
    <div className="space-y-3">
      {[1,2,3,4].map(i => (
        <div key={i} className="glass rounded-lg p-3">
          <div className="text-sm">New comment on Orbital Facade</div>
          <div className="text-xs text-slate-400">2h ago</div>
        </div>
      ))}
    </div>
  )
}
