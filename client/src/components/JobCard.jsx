import React from 'react'

const JobCard = ({ job }) => {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-indigo-600">{job.type}</p>
          <h3 className="mt-3 text-xl font-semibold text-slate-900">{job.title}</h3>
          <p className="mt-2 text-sm text-slate-500">{job.company}</p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
          {job.location}
        </span>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
        <span className="rounded-full border border-slate-200 px-3 py-1">
          {job.tag}
        </span>
        <span className="rounded-full border border-slate-200 px-3 py-1">
          {job.salary}
        </span>
      </div>

      <button className="mt-6 inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
        Apply now
      </button>
    </article>
  )
}

export default JobCard