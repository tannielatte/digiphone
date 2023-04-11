import React from 'react'
import DashboardOne from '../components/dashboard/DashboardOne'
import DashboardTwo from '../components/dashboard/DashboardTwo'

export default function Dashboard() {
  return (
    <div className="container-xl">
      <div className="text-center pb-5">
        <h2>Charts Example</h2>
        <p className="lead text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quaerat.
        </p>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <DashboardOne />
        </div>
        <div className="col-12 col-lg-6">
          <DashboardTwo />
        </div>
      </div>
    </div>
  )
}
