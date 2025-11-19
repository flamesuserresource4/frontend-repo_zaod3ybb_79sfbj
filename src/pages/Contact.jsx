import { useForm } from 'react-hook-form'

export default function Contact(){
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    // TODO: send to backend endpoint
    await new Promise(r => setTimeout(r, 600))
    alert('Thanks! We will reply soon.')
    reset()
  }

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm text-slate-300">Name</span>
          <input {...register('name', { required: true })} className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none" aria-invalid={!!errors.name} />
        </label>
        <label className="block">
          <span className="text-sm text-slate-300">Email</span>
          <input type="email" {...register('email', { required: true })} className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none" aria-invalid={!!errors.email} />
        </label>
        <label className="block">
          <span className="text-sm text-slate-300">Message</span>
          <textarea rows={6} {...register('message', { required: true, minLength: 10 })} className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none" aria-invalid={!!errors.message} />
        </label>
        <button disabled={isSubmitting} className="px-5 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white">
          {isSubmitting ? 'Sending…' : 'Send'}
        </button>
      </form>
    </div>
  )
}
