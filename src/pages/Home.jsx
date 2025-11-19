import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { useThreePerf } from '../providers/ThreeSceneProvider'
import { Link } from 'react-router-dom'

export default function Home() {
  const { performance } = useThreePerf()
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <section className="relative h-[80vh] w-full overflow-hidden rounded-2xl mt-6">
        <div className="absolute inset-0">
          {performance === 'high' ? (
            <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          ) : (
            <LowPolyFallback />
          )}
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto container-px w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="glass elevate rounded-2xl p-8 md:p-12 max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Projection & Design Club</h1>
              <p className="mt-4 text-slate-300">A collective exploring cinematic projection, interactive spaces, and engineering-driven design.</p>
              <div className="mt-6 flex gap-3">
                <Link className="px-5 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white" to="/projects">Explore Projects</Link>
                <Link className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white" to="/about">Learn More</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto container-px py-16">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl text-slate-300">Featured</motion.h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-xl p-6">
              <div className="h-40 rounded-lg bg-gradient-to-br from-indigo-500/30 to-purple-500/30" />
              <h3 className="mt-4 font-medium">Kinetic Architecture {i}</h3>
              <p className="text-sm text-slate-400">Exploring motion systems and procedural visuals.</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

function LowPolyFallback() {
  return (
    <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.25),transparent_60%),linear-gradient(to_bottom,#020617,#0b1220)]" aria-hidden />
  )
}
