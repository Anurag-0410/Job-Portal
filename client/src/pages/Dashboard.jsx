import { useState } from 'react'
import { useUser } from '../context/UserContext'
import { Link } from 'react-router-dom'
import { jobs } from '../data/jobs'

const Dashboard = () => {
  const { user, savedJobs } = useUser()
  
  const [applications] = useState([
    { id: 1, job: 'Frontend Engineer', company: 'Nova Labs', status: 'Pending', date: '2026-04-10' },
    { id: 2, job: 'Backend Developer', company: 'Bluewave', status: 'Interview', date: '2026-04-08' },
  ])

  const savedJobsList = jobs.filter(job => savedJobs.includes(job.id))

  return (
    <main className="px-6 py-10">
      <section className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-semibold text-slate-900">My Dashboard</h1>
        <p className="mt-2 text-lg text-slate-600">Welcome back, {user?.name}</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Profile Card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-2xl font-semibold text-indigo-600">
                {user?.name?.charAt(0)}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900">{user?.name}</h2>
                <p className="text-slate-600">{user?.email}</p>
              </div>
            </div>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Total Applications</span>
                <span className="font-semibold text-slate-900">{applications.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Saved Jobs</span>
                <span className="font-semibold text-slate-900">{savedJobs.length}</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Pending</h3>
            <p className="mt-4 text-4xl font-semibold text-slate-900">1</p>
            <p className="mt-2 text-sm text-slate-500">Applications awaiting response</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Interview</h3>
            <p className="mt-4 text-4xl font-semibold text-slate-900">1</p>
            <p className="mt-2 text-sm text-slate-500">Active interview processes</p>
          </div>
        </div>

        {/* Saved Jobs */}
        {savedJobsList.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-slate-900">Saved Jobs</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {savedJobsList.map((job) => (
                <Link
                  key={job.id}
                  to={`/job/${job.id}`}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-sm font-semibold text-indigo-600">{job.type}</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{job.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{job.company}</p>
                  <div className="mt-4 flex gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                      {job.location}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                      {job.salary}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Applications List */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-slate-900">My Applications</h2>
          <div className="mt-6 space-y-4">
            {applications.map((app) => (
              <div
                key={app.id}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{app.job}</h3>
                  <p className="text-slate-600">{app.company}</p>
                  <p className="mt-1 text-sm text-slate-500">Applied on {app.date}</p>
                </div>
                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    app.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {app.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-slate-900">Quick Actions</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              to="/jobs"
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center transition hover:border-indigo-500 hover:shadow-lg"
            >
              <p className="text-lg font-semibold text-slate-900">Browse Jobs</p>
              <p className="mt-2 text-sm text-slate-500">Find new opportunities</p>
            </Link>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center cursor-pointer hover:border-indigo-500 hover:shadow-lg">
              <p className="text-lg font-semibold text-slate-900">Edit Profile</p>
              <p className="mt-2 text-sm text-slate-500">Update your info</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center cursor-pointer hover:border-indigo-500 hover:shadow-lg">
              <p className="text-lg font-semibold text-slate-900">Saved Jobs</p>
              <p className="mt-2 text-sm text-slate-500">Jobs you've bookmarked</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center cursor-pointer hover:border-indigo-500 hover:shadow-lg">
              <p className="text-lg font-semibold text-slate-900">Settings</p>
              <p className="mt-2 text-sm text-slate-500">Account preferences</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Dashboard