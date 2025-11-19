import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import { members } from '../stub/data'

export default function Teams(){
  const [q, setQ] = useState('')
  const [skill, setSkill] = useState('All')

  const skills = useMemo(() => ['All', ...Array.from(new Set(members.flatMap(m => m.skills)))], [])
  const filtered = members.filter(m =>
    (skill === 'All' || m.skills.includes(skill)) &&
    (m.name.toLowerCase().includes(q.toLowerCase()) || m.role.toLowerCase().includes(q.toLowerCase()))
  )

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-3xl font-semibold">Teams</h1>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <div className="glass rounded-lg px-3 py-2 flex items-center gap-2">
          <Search className="w-4 h-4 text-slate-400" />
          <input aria-label="Search members" className="bg-transparent outline-none" placeholder="Search" value={q} onChange={e=>setQ(e.target.value)} />
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {skills.map(s => (
            <button key={s} onClick={()=>setSkill(s)} className={`px-3 py-1.5 rounded-full border ${skill===s?'bg-indigo-500 text-white border-indigo-500':'border-white/10 text-slate-300 hover:bg-white/10'}`}>{s}</button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map((m) => (
            <motion.div key={m.id} initial={{opacity:0, y: 16}} animate={{opacity:1, y:0}} exit={{opacity:0}} className="glass rounded-xl p-5">
              <img src={m.photo} alt={m.name} className="w-full h-44 object-cover rounded-lg" />
              <h3 className="mt-3 font-medium">{m.name}</h3>
              <p className="text-sm text-slate-400">{m.role}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {m.skills.map(s => <span key={s} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">{s}</span>)}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
