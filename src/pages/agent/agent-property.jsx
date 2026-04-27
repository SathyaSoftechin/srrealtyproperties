import React from "react";
import "./agent-property.css";
import {
  FaSearch,
  FaFilter,
  FaCalendarAlt,
  FaBuilding,
  FaEye,
  FaEllipsisH,
  FaPlus
} from "react-icons/fa";
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';




const AgentProperty = () => {
  return (
    <div className="agent-property-wrapper">
<div>
<Sidebar />

</div>


      {/* Heading */}
      <div className="agent-property-heading">
            <TopNavbar />

        <h1>My Property Tasks</h1>
        <p>
          You have <span>12 pending</span> operations across 8 properties today.
        </p>
      </div>

      {/* Filters */}
      <div className="agent-property-filters">
        <div>
          <span>STATUS</span>
          <div className="agent-property-chip-group">
            <button className="active">All Tasks</button>
            <button>Open</button>
            <button>In Progress</button>
            <button>Completed</button>
          </div>
        </div>

        <div>
          <span>PRIORITY</span>
          <div className="agent-property-chip-group">
            <button>High</button>
            <button className="active">Medium</button>
            <button>Low</button>
          </div>
        </div>

        <div>
          <span>TASK TYPE</span>
          <div className="agent-property-chip-group">
            <button>Verification</button>
            <button>Site Visit</button>
            <button>Doc Check</button>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="agent-property-grid">

        {/* Card 1 */}
        <div className="agent-property-card">
          <div className="agent-property-card-top">
            <div className="agent-property-icon">
              <FaBuilding />
            </div>
            <span className="agent-property-badge high">HIGH PRIORITY</span>
          </div>

          <h3>2BHK Luxury Apartment</h3>
          <p>Skyline Heights, Dubai Marina</p>

          <div className="agent-property-info-row">
            <div>
              <span>TASK TYPE</span>
              <h4>Property Verification</h4>
            </div>
            <div>
              <span>DEADLINE</span>
              <h4>4h 22m</h4>
            </div>
          </div>

          <div className="agent-property-progress-label">
            <span>Verification Progress</span>
            <span>65%</span>
          </div>

          <div className="agent-property-progress">
            <div style={{ width: "65%" }}></div>
          </div>

          <div className="agent-property-bottom">
            <button>Start Visit</button>
            <FaEye />
            <FaEllipsisH />
          </div>
        </div>

        {/* Card 2 */}
        <div className="agent-property-card">
          <div className="agent-property-card-top">
            <div className="agent-property-icon">
              <FaBuilding />
            </div>
            <span className="agent-property-badge medium">MEDIUM</span>
          </div>

          <h3>Elite Garden Villa</h3>
          <p>Palm Jumeirah, Frond P</p>

          <div className="agent-property-info-row">
            <div>
              <span>TASK TYPE</span>
              <h4>Site Visit</h4>
            </div>
            <div>
              <span>VISIT DATE</span>
              <h4>Tomorrow</h4>
            </div>
          </div>

          <div className="agent-property-progress-label">
            <span>Preparation</span>
            <span>20%</span>
          </div>

          <div className="agent-property-progress">
            <div style={{ width: "20%" }}></div>
          </div>

          <div className="agent-property-bottom">
            <button>View Property</button>
            <FaEllipsisH />
          </div>
        </div>

        {/* Card 3 */}
        <div className="agent-property-card active-card">
          <div className="agent-property-card-top">
            <div className="agent-property-icon">
              <FaBuilding />
            </div>
            <span className="agent-property-badge progress">IN PROGRESS</span>
          </div>

          <h3>Penthouse Suite</h3>
          <p>Business Bay, Tower D</p>

          <div className="agent-property-info-row">
            <div>
              <span>TASK TYPE</span>
              <h4>Document Check</h4>
            </div>
            <div>
              <span>STATUS</span>
              <h4>Ongoing</h4>
            </div>
          </div>

          <div className="agent-property-progress-label">
            <span>Review Progress</span>
            <span>92%</span>
          </div>

          <div className="agent-property-progress">
            <div style={{ width: "92%" }}></div>
          </div>

          <div className="agent-property-bottom">
            <button>Mark Complete</button>
            <FaEllipsisH />
          </div>
        </div>

        {/* Card 4 */}
        <div className="agent-property-card">
          <div className="agent-property-card-top">
            <div className="agent-property-icon">
              <FaBuilding />
            </div>
            <span className="agent-property-badge overdue">OVERDUE</span>
          </div>

          <h3>Commercial Space 402</h3>
          <p>DIFC, Gate Village</p>

          <div className="agent-property-info-row">
            <div>
              <span>TASK TYPE</span>
              <h4>Customer Support</h4>
            </div>
            <div>
              <span>LAPSED</span>
              <h4>2 Days</h4>
            </div>
          </div>

          <div className="agent-property-progress-label">
            <span>Resolution Status</span>
            <span>Blocked</span>
          </div>

          <div className="agent-property-progress red">
            <div style={{ width: "15%" }}></div>
          </div>

          <div className="agent-property-bottom">
            <button>Prioritize Now</button>
            <FaEllipsisH />
          </div>
        </div>

        {/* Add New Task */}
        <div className="agent-property-add-task">
          <div className="agent-property-add-icon">
            <FaPlus />
          </div>
          <h3>Assign New Task</h3>
          <p>Add a new operational requirement to a property</p>
        </div>

        {/* Efficiency Card */}
        <div className="agent-property-efficiency">
          <h3>Efficiency Pulse</h3>

          <div className="agent-property-stats">
            <div>
              <h2>94.2%</h2>
              <p>ON-TIME COMPLETION</p>
            </div>
            <div>
              <h2>14</h2>
              <p>ACTIVE VISITS</p>
            </div>
            <div>
              <h2>2.4h</h2>
              <p>AVG RESPONSE</p>
            </div>
            <div>
              <h2>Premium</h2>
              <p>SERVICE LEVEL</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AgentProperty;