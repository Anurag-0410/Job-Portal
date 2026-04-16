import { useParams, useNavigate } from 'react-router-dom'
import { jobs } from '../data/jobs'

const JobDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const job = jobs.find((j) => j.id === parseInt(id))

  if (!job) {
    return (
      <main className="px-6 py-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-semibold text-slate-900">Job not found</h1>
          <button
            onClick={() => navigate('/jobs')}
            className="mt-6 rounded-full bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
          >
            Back to Jobs
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="px-6 py-10">
      <section className="mx-auto max-w-4xl">
        <button
          onClick={() => navigate('/jobs')}
          className="mb-6 text-indigo-600 hover:text-indigo-700 font-semibold"
        >
          ← Back to Jobs
        </button>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-700">
                {job.type}
              </span>
              <h1 className="mt-4 text-4xl font-semibold text-slate-900">{job.title}</h1>
              <p className="mt-2 text-lg text-slate-600">{job.company}</p>
              <p className="mt-1 text-slate-500">{job.location}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Salary</p>
              <p className="mt-2 font-semibold text-slate-900">{job.salary}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Job Type</p>
              <p className="mt-2 font-semibold text-slate-900">{job.type}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Skills</p>
              <p className="mt-2 font-semibold text-slate-900">{job.tag}</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-slate-900">About the role</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We're looking for a talented {job.title} to join our team at {job.company}. 
              You'll work on exciting projects, collaborate with experienced professionals, 
              and grow your skills in {job.tag}.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-slate-900">Requirements</h2>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>• 2+ years of experience in {job.tag}</li>
              <li>• Strong problem-solving skills</li>
              <li>• Experience with modern development practices</li>
              <li>• Excellent communication skills</li>
            </ul>
          </div>

          <button className="mt-8 rounded-full bg-indigo-600 px-8 py-4 text-lg font-semibold text-white hover:bg-indigo-700">
            Apply Now
          </button>
        </div>
      </section>
    </main>
  )
}

export default JobDetail