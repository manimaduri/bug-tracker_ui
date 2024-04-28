import React from "react";
import {
  AiOutlineBug,
  AiOutlineProject,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import BreadCrumb from "../common/BreadCrumb";

const Dashboard = () => {
  return (
    <div>
      <BreadCrumb title="Welcome Manikanta Maduri" />
      <div className="stats shadow" data-theme="light">
        <div className="stat">
          <div className="stat-figure text-primary">
            <AiOutlineBug className="inline-block w-8 h-8 text-current" />
          </div>
          <div className="stat-title">Total Bugs</div>
          <div className="stat-value text-primary">1.2K</div>
          <div className="stat-desc">15% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <AiOutlineProject className="inline-block w-8 h-8 text-current" />
          </div>
          <div className="stat-title">Projects</div>
          <div className="stat-value text-secondary">36</div>
          <div className="stat-desc">3 new projects this month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <AiOutlineCheckCircle className="inline-block w-8 h-8 text-current" />
          </div>
          <div className="stat-value">86%</div>
          <div className="stat-title">Bugs Resolved</div>
          <div className="stat-desc text-secondary">50 bugs still open</div>
        </div>
      </div>
      <div className="p-6 pl-0" >
      <div className="card bordered">
        <div className="card-body">
          <h2 className="card-title">My Bugs</h2>
          <div className="divider divider-primary"></div>
          <div className="content" >
            {/* Add your content here */}
            <ul>
                <li>
                    <p>Login not working</p>
                    <p>naukri</p>
                </li>
          <div className="divider divider-accent"></div>

                <li>
                    <p>Logout not working</p>
                    <p>naukri</p>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
