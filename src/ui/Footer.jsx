export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10 mt-16">
      <div className="max-w-7xl mx-auto container-px flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Projection & Design Club</p>
        <div className="flex items-center gap-4">
          <a href="https://instagram.com" className="hover:text-white" aria-label="Instagram">Instagram</a>
          <a href="https://twitter.com" className="hover:text-white" aria-label="Twitter">Twitter</a>
          <a href="mailto:hello@projection.design" className="hover:text-white" aria-label="Email">Email</a>
        </div>
      </div>
    </footer>
  )
}
