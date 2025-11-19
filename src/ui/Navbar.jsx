import { NavLink, Link } from 'react-router-dom'
import { Menu, Stars, Palette } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto container-px py-3 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2 font-semibold text-white">
          <Stars className="w-5 h-5 text-indigo-400" />
          <span>Projection & Design Club</span>
        </Link>
        <nav className="ml-auto hidden md:flex items-center gap-6 text-sm text-slate-200">
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-indigo-400' : 'hover:text-white'}>About</NavLink>
          <NavLink to="/teams" className={({isActive}) => isActive ? 'text-indigo-400' : 'hover:text-white'}>Teams</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? 'text-indigo-400' : 'hover:text-white'}>Projects</NavLink>
          <NavLink to="/achievements" className={({isActive}) => isActive ? 'text-indigo-400' : 'hover:text-white'}>Achievements</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-indigo-400' : 'hover:text-white'}>Contact</NavLink>
          <NavLink to="/dashboard" className={({isActive}) => isActive ? 'text-indigo-400' : 'hover:text-white'}>Dashboard</NavLink>
        </nav>
        <div className="ml-2 flex items-center gap-2">
          <ThemeToggle />
          <button className="md:hidden glass rounded-lg p-2" aria-label="Open menu">
            <Menu className="w-5 h-5 text-slate-200" />
          </button>
        </div>
      </div>
    </header>
  )
}
