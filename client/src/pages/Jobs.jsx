import { useState } from 'react'
import JobCard from '../components/JobCard'
import { jobs } from '../data/jobs'

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('All')

  const jobTypes = ['All', 'Full-time', 'Hybrid', 'Remote', 'On-site']

  const filteredJobs = jobs.filter((job) => {
    const query = searchTerm.toLowerCase()
    const matchesSearch =
      job.title.toLowerCase().includes(query) ||
      job.company.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query)
    const matchesType = selectedType === 'All' || job.type === selectedType
    return matchesSearch && matchesType
  })

  return (
    <main className="px-6 py-10">
      <section className="mx-auto max-w-7xl">
        <h1 className="text-5xl font-semibold text-slate-900">All Jobs</h1>
        <p className="mt-2 text-lg text-slate-600">Find your next opportunity</p>

        <div className="mt-8 space-y-6">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="search"
            placeholder="Search jobs..."
            className="w-full rounded-full border border-slate-200 bg-white px-6 py-3 text-sm outline-none placeholder:text-slate-400"
          />

          <div className="flex flex-wrap gap-3">
            {jobTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`rounded-full px-5 py-2 font-semibold transition ${
                  selectedType === type
                    ? 'bg-indigo-600 text-white'
                    : 'border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
            ) : (
              <div className="col-span-full rounded-3xl border border-slate-200 bg-white p-8 text-center text-slate-600">
                No jobs found.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Jobs