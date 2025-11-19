import { useAuth } from '../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const { login } = useAuth()
  const navigate = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault()
    const email = new FormData(e.currentTarget).get('email')
    login(String(email))
    navigate('/dashboard')
  }
  return (
    <div className="max-w-md mx-auto py-16">
      <h1 className="text-3xl font-semibold">Login</h1>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <input name="email" type="email" required placeholder="you@example.com" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none" />
        <button className="px-5 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white">Continue</button>
      </form>
    </div>
  )
}
