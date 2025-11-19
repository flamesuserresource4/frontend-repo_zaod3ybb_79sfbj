import { Outlet } from 'react-router-dom'
import { Navbar } from '../ui/Navbar'
import { Footer } from '../ui/Footer'

export const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      <main className="flex-1 container-px">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
