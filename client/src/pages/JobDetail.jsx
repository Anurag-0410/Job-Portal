import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { jobs } from '../data/jobs'
import { useUser } from '../context/UserContext'

const JobDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useUser()
  const [showApply, setShowApply] = useState(false)
  const [applied, setApplied] = useState(false)
  
  const job = jobs.find((j) => j.id === parseInt(id))

  const handleApply = (e) => {
    e.preventDefault()
    setApplied(true)
    setTimeout(() => {
      setShowApply(false)
      setApplied(false)
    }, 2000)
  }

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

          <button 
            onClick={() => user ? setShowApply(true) : navigate('/login')}
            className="mt-8 rounded-full bg-indigo-600 px-8 py-4 text-lg font-semibold text-white hover:bg-indigo-700"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* Apply Modal */}
      {showApply && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
            {!applied ? (
              <>
                <h2 className="text-2xl font-semibold text-slate-900">Apply for {job.title}</h2>
                <p className="mt-2 text-slate-600">at {job.company}</p>
                
                <form onSubmit={handleApply} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Full Name</label>
                    <input
                      type="text"
                      defaultValue={user?.name}
                      className="mt-2 w-full rounded-full border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Email</label>
                    <input
                      type="email"
                      defaultValue={user?.email}
                      className="mt-2 w-full rounded-full border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Phone</label>
                    <input
                      type="tel"
                      className="mt-2 w-full rounded-full border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Cover Letter</label>
                    <textarea
                      rows="4"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500"
                      placeholder="Tell us why you're a great fit..."
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setShowApply(false)}
                      className="flex-1 rounded-full border border-slate-200 py-3 font-semibold text-slate-700 hover:bg-slate-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 rounded-full bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-slate-900">Application Sent!</h2>
                <p className="mt-2 text-slate-600">We'll review your application and get back to you soon.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  )
}

export default JobDetail