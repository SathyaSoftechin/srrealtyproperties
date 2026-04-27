import React from 'react';
import './AgentDashboard.css';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';
import { FaClipboardList, FaTasks, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'




const stats = [
  { icon: <FaClipboardList />, title: 'Tasks Assigned', value: '148' },
  { icon: <FaTasks />, title: 'In Progress', value: '32' },
  { icon: <FaCheckCircle />, title: 'Completed Today', value: '24' },
  { icon: <FaExclamationTriangle />, title: 'Overdue Tasks', value: '03' },
];

const AgentDashboard = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <TopNavbar />

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div className="stat-card" key={i}>
              <div className="stat-icon">{stat.icon}</div>
              <p>{stat.title}</p>
              <h2>{stat.value}</h2>
            </div>
          ))}
        </div>

        <div className="dashboard-content-grid">
          <div className="efficiency-card">
            <h3>Daily Efficiency</h3>
            <div className="progress-ring">70%</div>
            <div className="efficiency-stats">
              <span>24 DONE</span>
              <span>08 ACTIVE</span>
              <span>12 WAIT</span>
            </div>
          </div>

          <div className="verification-card">
            <h3>Critical Verifications</h3>
            <div className="verification-item">
              <span>Penthouse Alpha-9 Verification</span>
              <button>Start Task</button>
            </div>
            <div className="verification-item">
              <span>Estate Review: Harbor Marina</span>
              <button>Start Task</button>
            </div>
            <div className="verification-item">
              <span>Internal Verification Audit</span>
              <button>Start Task</button>
            </div>
          </div>
        </div>

        <div className="recent-activity-section">
                
            <h3>Daily Efficiency</h3>
          



          <div className="recent-activity-grid">
            <div className="activity-card success">
              <h4>Listing #V-9928 Approved</h4>
              <p>Agent 042 successfully verified the property documents.</p>
            </div>
            <div className="activity-card progress">
              <h4>Metadata Audit #M-01</h4>
              <p>System-wide audit of listing metadata for high-value properties.</p>
            </div>
            <div className="activity-card dispute">
              <h4>Escrow Alert #E-99</h4>
              <p>User reported inconsistencies in transaction timeline.</p>
            </div>
            <div className="activity-card scheduled">
              <h4>Q4 Performance Review</h4><p>Annual board presentation on agent performance metrics.</p>
            </div>
          </div>
        </div>


                <div className="bottom-dashboard-grid">
          <div className="quick-actions-card">
            <h3>Quick Actions</h3>
            <button>Add New Listing</button>
            <button>Assign Verification</button>
            <button>Generate Report</button>
          </div>

          <div className="performance-index-card">
            <h3>Performance Index</h3>
            <div className="performance-score">92%</div>
            <p>Excellent Agent Productivity Rating</p>
          </div>

          <div className="security-log-card">
            <h3>Security Log</h3>
            <div className="security-item">2FA Updated - 10 mins ago</div>
            <div className="security-item">Password Changed - Yesterday</div>
            <div className="security-item">New Device Login - 3 days ago</div>
          </div>
        </div>



      </main>
    </div>
  );
};

export default AgentDashboard;