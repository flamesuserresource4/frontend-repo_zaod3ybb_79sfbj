import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored) setTheme(stored)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      className="glass rounded-lg p-2 hover:scale-105 transition"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  )
}
