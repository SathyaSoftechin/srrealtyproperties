import React from "react";
import "./Investment.css";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";



const Investment = () => {
  return (
    <div className="investment-container">

      {/* TOP BAR */}
      <div className="investment-topbar">
        <div className="investment-title">
          <h2>Investment Terminal</h2>
          <span className="live-badge">LIVE MARKET DATA</span>
        </div>

        <div className="investment-right">
          <input
            type="text"
            placeholder="Search markets, assets..."
            className="investment-search"
          />
          <div className="investment-profile">
            <span>Alexander Vane</span>
            <img src="https://i.pravatar.cc/40" alt="profile" />
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="investment-stats">
        <div className="investment-card">
          <p>Luxury Real Estate Index</p>
          <h3>$4.82M <span className="investment-green">+2.4%</span></h3>
          <small>Global average for Tier-1 markets</small>
        </div>

        <div className="investment-card">
          <p>Average Portfolio Yield</p>
          <h3>7.15% <span className="investment-green">+0.8%</span></h3>
          <small>Net of management & tax fees</small>
        </div>

        <div className="investment-card">
          <p>5-Year Projected Appreciation</p>
          <h3>+28.4% <span className="investment-gray">Stable</span></h3>
          <small>Based on supply-demand delta</small>
        </div>
      </div>

      {/* MIDDLE SECTION */}
      <div className="investment-middle">

        {/* ROI */}
        <div className="investment-roi">
          <h3>ROI by Asset Class</h3>

          <div className="investment-bar">
            <span>Luxury Villas</span>
            <div className="bar">
              <div style={{ width: "90%" }}></div>
            </div>
            <span>9.2%</span>
          </div>

          <div className="investment-bar">
            <span>Premium Penthouses</span>
            <div className="bar">
              <div style={{ width: "75%" }}></div>
            </div>
            <span>7.8%</span>
          </div>

          <div className="investment-bar">
            <span>Prime Commercial Units</span>
            <div className="bar">
              <div style={{ width: "100%" }}></div>
            </div>
            <span>11.4%</span>
          </div>

         <div className="investment-bar-Data"><small>*Data audited by Deloitte Q3 2024</small>
          <span>View Full Table →</span></div> 
        </div>

        





<div className="investment-graph">
  <h3>Capital Growth Trends</h3>
  <div className="investment-graph-aggregated"><p>Aggregated global luxury segment</p>
  <span>

  <ul className="investment-graph-target">
<li>Target</li>

<li>Actual</li>


  </ul>


  </span></div>

  <div className="graph-placeholder">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={[
          { year: "2019", target: 5, actual: 3 },
          { year: "2020", target: 8, actual: 5 },
          { year: "2021", target: 15, actual: 10 },
          { year: "2022", target: 22, actual: 14 },
          { year: "2023", target: 28, actual: 18 },
          { year: "2024", target: 32, actual: 22 },
        ]}
      >
        {/* GRADIENT */}
        <defs>
          <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c9a94d" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#c9a94d" stopOpacity={0} />
          </linearGradient>
        </defs>

        {/* AXIS */}
        <XAxis dataKey="year" stroke="#666" />
        <Tooltip />

        {/* TARGET LINE (GOLD) */}
        <Area
          type="monotone"
          dataKey="target"
          stroke="#c9a94d"
          fill="url(#gold)"
          strokeWidth={3}
        />

        {/* ACTUAL LINE (DOTTED) */}
        <Area
          type="monotone"
          dataKey="actual"
          stroke="#888"
          fill="transparent"
          strokeDasharray="5 5"
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
</div>

</div>






      {/* BOTTOM */}
      <div className="investment-bottom">

        <div className="investment-info">
          <h4>Q4 Global Market Outlook</h4>
          <p>
            Deep dive into interest rate impacts on ultra-luxury cycles and emerging zones.
          </p>
          <div className="investment-info-download"><span>WHITEPAPER • 24 PAGES</span></div>
        </div>

        <div className="investment-info">
          <h4>Advisory Brief: Off-Market Assets</h4>
          <p>
            Exclusive access to unlisted properties in Monaco, Gstaad, Aspen.
          </p>
          <span>RESTRICTED • PDF</span>
        </div>

     

      </div>

    </div>
  );
};

export default Investment;