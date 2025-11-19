import { members } from '../stub/data'

export default function DashboardMembers(){
  return (
    <div>
      <h2 className="font-medium">Members</h2>
      <ul className="mt-3 space-y-2">
        {members.map(m => (
          <li key={m.id} className="glass rounded-lg p-3 flex items-center gap-3">
            <img src={m.photo} alt="" className="w-10 h-10 rounded-full object-cover" />
            <div className="flex-1">
              <div className="text-sm">{m.name}</div>
              <div className="text-xs text-slate-400">{m.role}</div>
            </div>
            <button className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20">Message</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
