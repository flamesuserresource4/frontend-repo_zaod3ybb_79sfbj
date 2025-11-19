import { useState } from 'react'
import { marked } from 'marked'

export default function DashboardProjects(){
  const [md, setMd] = useState('# Project Title\n\nWrite your case study…')
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h2 className="font-medium">Project Editor (Markdown)</h2>
        <textarea value={md} onChange={e=>setMd(e.target.value)} rows={18} className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none" />
      </div>
      <div>
        <h2 className="font-medium">Preview</h2>
        <div className="mt-2 prose prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: marked(md) }} />
        </div>
      </div>
    </div>
  )
}
