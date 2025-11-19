import { projects } from '../stub/data'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Projects(){
  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p,idx) => (
          <motion.div key={p.id} initial={{opacity:0, y: 16}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{ delay: idx*0.05 }} className="glass rounded-xl overflow-hidden">
            <Link to={`/projects/${p.id}`} className="block">
              <img src={p.cover} alt="" className="w-full h-44 object-cover" />
              <div className="p-5">
                <h3 className="font-medium">{p.title}</h3>
                <p className="text-sm text-slate-400">{p.summary}</p>
                <div className="mt-3 h-2 rounded-full bg-white/10">
                  <div className="h-2 rounded-full bg-indigo-500" style={{ width: `${p.progress}%` }} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
