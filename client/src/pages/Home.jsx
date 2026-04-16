import React, { useState } from 'react'
import JobCard from '../components/JobCard'
import { jobs } from '../data/jobs'
import { companies } from '../data/companies'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredJobs = jobs.filter((job) => {
    const query = searchTerm.toLowerCase()
    return (
      job.title.toLowerCase().includes(query) ||
      job.company.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query) ||
      job.tag.toLowerCase().includes(query)
    )
  })

  return (
    <main className="px-6 py-10">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-700">
              Featured jobs
            </span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
              Build your next career move
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">
              Search jobs, explore companies, and apply to the role that fits your skills.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700">
                Browse jobs
              </button>
              <button className="rounded-full border border-slate-300 px-6 py-3 text-slate-700 transition hover:bg-slate-100">
                See hiring companies
              </button>
            </div>
          </div>

          <div className="rounded-[2rem] bg-indigo-50 p-8">
            <div className="aspect-[4/3] rounded-[1.75rem] bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-400 shadow-xl" />
          </div>
        </div>

        <div className="mt-16 space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
                Latest openings
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                Top jobs for developers
              </h2>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3"
            >
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="search"
                placeholder="Search by role, company or location"
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Search
              </button>
            </form>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
            ) : (
              <div className="col-span-full rounded-3xl border border-slate-200 bg-white p-8 text-center text-slate-600">
                No jobs found. Try a different keyword.
              </div>
            )}
          </div>
        </div>

        <section className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
                Trusted by teams
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                Companies hiring top developers
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {companies.map((company) => (
                <div
                  key={company.id}
                  className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-center text-sm font-semibold text-slate-700 shadow-sm"
                >
                  {company.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
                Jobs posted
              </p>
              <p className="mt-4 text-4xl font-semibold text-slate-900">256+</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
                Company partners
              </p>
              <p className="mt-4 text-4xl font-semibold text-slate-900">52</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
                Applications sent
              </p>
              <p className="mt-4 text-4xl font-semibold text-slate-900">1.2k</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Home