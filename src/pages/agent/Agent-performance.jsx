import React from "react";
import "./Agent-performance.css";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import {
  FaExclamationTriangle,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

const AgentPerformance = () => {
  return (
    <div className="Agent-performance-wrapper">
      <Sidebar />

      <div className="Agent-performance-main">
        <TopNavbar />

        <div className="Agent-performance-container">
          {/* HEADER */}
          <div className="Agent-performance-header">
            <div>
              <h1>Agent Performance</h1>
              <p>Real-time terminal for Aureum Onyx operations.</p>
            </div>

            <div className="Agent-performance-alerts">
              <div className="Agent-performance-alert red">
                <span></span> High overdue tasks in London district
              </div>
              <div className="Agent-performance-alert green">
                <span></span> High performance badge: Agent Alexander
              </div>
            </div>
          </div>

          {/* FILTERS */}
          <div className="Agent-performance-filters">
            <button>Current</button>
            <button>All Agent</button>
            <button>Verific ▼</button>

            <button className="Agent-performance-export">
              Export Data
            </button>
          </div>

          {/* STATS */}
          <div className="Agent-performance-stats">
            <div className="Agent-performance-stat-card">
              <h4>Tasks Completed</h4>
              <h2>1,284</h2>
              <span className="green">+12.5%</span>
            </div>

            <div className="Agent-performance-stat-card">
              <h4>Tasks In Progress</h4>
              <h2>42</h2>
              <span className="yellow">ACTIVE</span>
            </div>

            <div className="Agent-performance-stat-card">
              <h4>Avg Completion</h4>
              <h2>38m</h2>
              <span className="green">-5%</span>
            </div>

            <div className="Agent-performance-stat-card">
              <h4>Accuracy Rate</h4>
              <h2>98.4%</h2>
            </div>

            <div className="Agent-performance-stat-card danger">
              <h4>Overdue Tasks</h4>
              <h2>3</h2>
              <FaExclamationTriangle />
            </div>
          </div>

          {/* CHART SECTION */}
          <div className="Agent-performance-chart-grid">
            <div className="Agent-performance-line-chart">
              <h3>Tasks Completed Over Time</h3>

              <div className="Agent-performance-fake-chart">
                <svg viewBox="0 0 500 180" preserveAspectRatio="none">
                  <path
                    d="M0,150 C60,130 90,160 140,110 C180,60 220,40 260,120 C300,180 350,20 410,60 C450,90 480,170 500,110"
                    fill="none"
                    stroke="#FFD700"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <div className="Agent-performance-donut-card">
              <h3>Task Distribution</h3>

              <div className="Agent-performance-donut">
                <div className="Agent-performance-donut-inner">
                  <h2>1.2k</h2>
                  <span>TOTAL</span>
                </div>
              </div>

              <div className="Agent-performance-legend">
                <span>Verification</span>
                <span>Reports</span>
                <span>Support</span>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="Agent-performance-bottom-grid">
            <div className="Agent-performance-leaderboard">
              <h3>Agent Leaderboard</h3>

              {[
                ["1", "Alexander Pierce", "482", "99.8%", "24m"],
                ["2", "Sarah Jenkins", "415", "98.2%", "31m"],
                ["3", "Liam O'Connor", "398", "97.5%", "34m"],
                ["12", "David Chen", "112", "84.1%", "52m"],
              ].map((agent, i) => (
                <div className="Agent-performance-agent-row" key={i}>
                  <span>{agent[0]}</span>
                  <span>{agent[1]}</span>
                  <span>{agent[2]}</span>
                  <span>{agent[3]}</span>
                  <span>{agent[4]}</span>
                </div>
              ))}
            </div>

            <div className="Agent-performance-insights">
              <h3>Task Priority Insights</h3>

              <div className="Agent-performance-progress-block">
                <p>Completed vs Pending</p>
                <div className="bar">
                  <div style={{ width: "96%" }}></div>
                </div>
              </div>

              <div className="Agent-performance-progress-block">
                <p>High-Priority Resolution</p>
                <div className="bar green">
                  <div style={{ width: "82%" }}></div>
                </div>
              </div>

              <div className="Agent-performance-mini-circles">
                <div>74%</div>
                <div>26%</div>
              </div>

              <div className="Agent-performance-note">
                System Recommendation: Optimize allocation for High-Priority
                tasks in the coming shift to increase resolution speed by an
                estimated 14%.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentPerformance;