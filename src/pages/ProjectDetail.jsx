import { useParams } from 'react-router-dom'
import { projects, members } from '../stub/data'

export default function ProjectDetail(){
  const { id } = useParams()
  const p = projects.find(pr => pr.id === id)
  if(!p) return <div className="max-w-5xl mx-auto py-10">Not found</div>
  const team = members.filter(m => p.contributors.includes(m.id))
  return (
    <div className="max-w-5xl mx-auto py-10">
      <img src={p.cover} alt="" className="w-full h-72 object-cover rounded-xl" />
      <h1 className="mt-6 text-3xl font-semibold">{p.title}</h1>
      <p className="mt-2 text-slate-300">{p.summary}</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="font-medium">Timeline</h2>
          <ul className="mt-3 space-y-3">
            {[1,2,3,4].map(i => (
              <li key={i} className="glass rounded-lg p-3">Milestone {i}</li>
            ))}
          </ul>
        </div>
        <aside>
          <h2 className="font-medium">Contributors</h2>
          <ul className="mt-3 space-y-2">
            {team.map(t => (
              <li key={t.id} className="flex items-center gap-3">
                <img src={t.photo} alt="" className="w-8 h-8 rounded-full object-cover" />
                <div>
                  <div className="text-sm">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  )
}
