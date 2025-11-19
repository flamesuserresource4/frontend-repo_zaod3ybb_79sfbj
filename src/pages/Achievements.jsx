export default function Achievements(){
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-semibold">Achievements</h1>
      <div className="mt-6 columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:balance]
      ">
        {[...Array(12)].map((_,i) => (
          <div key={i} className="break-inside-avoid glass rounded-xl p-4 mb-6">
            <div className="h-44 rounded-lg bg-gradient-to-br from-purple-500/30 to-fuchsia-500/30" />
            <h3 className="mt-3 font-medium">Case Study #{i+1}</h3>
            <p className="text-sm text-slate-400">A collection of installations, residencies, and awards.</p>
          </div>
        ))}
      </div>
    </div>
  )
}
