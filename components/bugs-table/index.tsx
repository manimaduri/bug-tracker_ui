import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const BugsTable = () => {
  const bugs = [
    {
      id: 1,
      name: "Bug 1",
      assignee: { firstName: "John", lastName: "Doe", avatar: null },
      reporter: { firstName: "Jane", lastName: "Doe", avatar: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" },
      status: "Open",
      priority: "High",
      createdAt: "2022-01-01",
    },
    {
      id: 2,
      name: "Bug 2",
      assignee: { firstName: "John", lastName: "Doe", avatar: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" },
      reporter: { firstName: "Jane", lastName: "Doe", avatar: null },
      status: "In Progress",
      priority: "Medium",
      createdAt: "2022-01-02",
    },
    // Add more bugs as needed
  ];

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className='text-center'>
            <th>#</th>
            <th>Bug</th>
            <th>Assignee</th>
            <th>Reporter</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {bugs.map((bug) => (
            <tr className="hover" key={bug.id}>
              <th>{bug.id}</th>
              <td><Link href={`bug/${bug.id}`} className='text-white'>{bug.name}</Link></td>
              <td>
                <div className="avatar flex items-center justify-center">
                  {bug.assignee.avatar ? (
                    <div className= "w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                      <Image height={40} width={40} className="object-cover" src={bug.assignee.avatar} alt="avatar" />
                    </div>
                  ) : (
                    <div className="avatar placeholder">
                      <div className="bg-neutral text-neutral-content rounded-full  w-10 h-10">
                        <span className="text-xs">{bug.assignee.firstName[0]}{bug.assignee.lastName[0]}</span>
                      </div>
                    </div>
                  )}
                  <span className="ml-2">{bug.assignee.firstName} {bug.assignee.lastName}</span>
                </div>
              </td>
              <td>
                <div className="avatar flex items-center justify-center">
                  {bug.reporter.avatar ? (
                    <div className= "w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                      <Image height={40} width={40} className="object-cover" src={bug.reporter.avatar} alt="avatar" />
                    </div>
                  ) : (
                    <div className="avatar placeholder">
                      <div className="bg-neutral text-neutral-content rounded-full  w-10 h-10">
                        <span className="text-xs">{bug.reporter.firstName[0]}{bug.reporter.lastName[0]}</span>
                      </div>
                    </div>
                  )}
                  <span className="ml-2">{bug.reporter.firstName} {bug.reporter.lastName}</span>
                </div>
              </td>
              <td>{bug.status}</td>
              <td>{bug.priority}</td>
              <td>{bug.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BugsTable