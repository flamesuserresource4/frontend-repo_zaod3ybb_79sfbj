import { motion } from 'framer-motion'

export default function About(){
  const items = [
    { year: '2021', text: 'Founded by artists and engineers to bridge light, code, and space.' },
    { year: '2022', text: 'Built our first touring projection mapping toolkit.' },
    { year: '2023', text: 'Launched residency program and collaborated with festivals.' },
    { year: '2024', text: 'Expanded to immersive architecture and live tooling.' },
  ]
  return (
    <div className="max-w-5xl mx-auto py-12">
      <h1 className="text-3xl md:text-4xl font-semibold">About</h1>
      <p className="mt-3 text-slate-300 max-w-3xl">We explore the intersection of projection design, computational art, and physical fabrication. Our mission is to build open tools and spaces that invite participation.</p>

      <div className="mt-10 relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
        <ul className="space-y-8">
          {items.map((it,idx) => (
            <motion.li key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative pl-12">
              <span className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-400" />
              <div className="text-sm text-slate-400">{it.year}</div>
              <div className="text-base">{it.text}</div>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="mt-12 flex gap-3">
        <a className="px-5 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white" href="/teams">Meet the Teams</a>
        <a className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white" href="/projects">Browse Projects</a>
      </div>
    </div>
  )
}
