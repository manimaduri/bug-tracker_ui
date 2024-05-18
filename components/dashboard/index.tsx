import React from "react";
import {
  AiOutlineBug,
  AiOutlineProject,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import BreadCrumb from "../common/BreadCrumb";
import Link from "next/link";

const Dashboard = () => {
  const issues = [
    { id: 1, title: "Login not working", source: "naukri" },
    { id: 2, title: "Logout not working", source: "naukri" },
  ];

  return (
    <div>
      <BreadCrumb title="Welcome Manikanta Maduri" />
      <div className="stats shadow" data-theme="light">
        <div className="stat">
          <div className="stat-figure text-primary">
            <AiOutlineBug className="inline-block w-8 h-8 text-current" />
          </div>
          <div className="stat-title">Total Bugs</div>
          <div className="stat-value ">
            <Link className="text-primary" href="all-bugs">
              1.2K
            </Link>
          </div>
          <div className="stat-desc">15% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <AiOutlineProject className="inline-block w-8 h-8 text-current" />
          </div>
          <div className="stat-title">Projects</div>
          <div className="stat-value ">
            <Link className="text-secondary" href="projects">
              36
            </Link>
          </div>
          <div className="stat-desc">3 new projects this month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <AiOutlineCheckCircle className="inline-block w-8 h-8 text-current" />
          </div>
          <div className="stat-value">
            <Link className="text-inherit" href="all-bugs">
              86%
            </Link>
          </div>
          <div className="stat-title">Bugs Resolved</div>
          <div className="stat-desc text-secondary">50 bugs still open</div>
        </div>
      </div>
      <div className="p-6 pl-0">
        <div className="card bordered">
          <div className="card-body">
            <h2 className="card-title">My Bugs</h2>
            <div className="divider divider-primary"></div>
            <div className="content">
              <ul>
                {issues.map((issue, index) => (
                  <li key={issue.id}>
                    <Link className="text-inherit" href={`/bug/${issue.id}`}>
                    <p>{issue.title}</p>
                    <p>{issue.source}</p>
                    </Link>
                    {index < issues.length - 1 && (
                      <div className="divider divider-accent"></div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
