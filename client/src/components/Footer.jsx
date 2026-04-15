const Footer = () => (
  <footer className="border-t border-slate-200 bg-slate-50 px-6 py-8 text-sm text-slate-600">
    <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <p>© 2026 Job Portal. Built for developers.</p>
      <div className="flex flex-wrap gap-4">
        <a href="#jobs" className="hover:text-slate-900">Jobs</a>
        <a href="#companies" className="hover:text-slate-900">Companies</a>
        <a href="#contact" className="hover:text-slate-900">Contact</a>
      </div>
    </div>
  </footer>
)

export default Footer