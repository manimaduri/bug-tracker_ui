import React from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Project 1",
      progress: 70,
      owner: "John Doe",
      status: "In Progress",
      totalBugs: 5,
      resolvedBugs: 3,
      startDate: "2022-01-01",
      endDate: "2022-12-31",
    },
    {
      id: 2,
      name: "Project 2",
      progress: 30,
      owner: "Jane Doe",
      status: "Not Started",
      totalBugs: 0,
      resolvedBugs: 0,
      startDate: "2022-02-01",
      endDate: "2022-12-31",
    },
    {
      id: 3,
      name: "Project 3",
      progress: 30,
      owner: "Jane MAry",
      status: "Not Started",
      totalBugs: 0,
      resolvedBugs: 0,
      startDate: "2022-02-01",
      endDate: "2022-12-31",
    },
    {
      id: 4,
      name: "Project 4",
      progress: 30,
      owner: "Spidrman",
      status: "Not Started",
      totalBugs: 0,
      resolvedBugs: 0,
      startDate: "2022-02-01",
      endDate: "2022-12-31",
    },
    // Add more projects as needed
  ];
  return (
    <>
      <h3 className="mb-4 text-2xl flex  justify-between">
        <span>Projects</span>
        <Link
          href="/projects/create-project"
          className="text-white text-sm flex justify-center items-center"
        >
          Create Projects
          <FaPlus className="mx-1" />
        </Link>
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Project Name</th>
              <th>Progress%</th>
              <th>Owner</th>
              <th>Status</th>
              <th>Bugs</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <th>{project.id}</th>
                <td>
                  <Link
                    className="text-inherit"
                    href={`/projects/${project.id}`}
                  >
                    {project.name}
                  </Link>
                </td>
                <td>{project.progress}%</td>
                <td>{project.owner}</td>
                <td>{project.status}</td>
                <td>
                  {project.resolvedBugs}
                  <progress
                    className="progress progress-success w-16 mx-2"
                    value={project.resolvedBugs}
                    max={project.totalBugs}
                  ></progress>
                  {project.totalBugs}
                </td>
                <td>{project.startDate}</td>
                <td>{project.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Projects;
