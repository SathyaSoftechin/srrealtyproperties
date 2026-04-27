import React from 'react';
import './Sidebar.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="sidebar">
      <h2 className="logo">SR REALTY</h2>

      <ul>
        <li
          className={location.pathname === '/dashboard' ? 'active' : ''}
          onClick={() => navigate('/agent-dashboard')}
        >
          Dashboard
        </li>

        <li
          className={location.pathname === '/tasks' ? 'active' : ''}
          onClick={() => navigate('/agent-property')}
        >
          My Tasks
        </li>

        <li
          className={location.pathname === '/verifications' ? 'active' : ''}
          onClick={() => navigate('/agent-verification')}
        >
          Verifications
        </li>

        <li
          className={location.pathname === '/reports' ? 'active' : ''}
          onClick={() => navigate('/agent-report')}
        >
          Reports
        </li>

        <li
          className={location.pathname === '/messages' ? 'active' : ''}
          onClick={() => navigate('/messages')}
        >
          Messages
        </li>

        <li
          className={location.pathname === '/performance' ? 'active' : ''}
          onClick={() => navigate('/agent-performance')}
        >
          Performance
        </li>

        <li
          className={location.pathname === '/settings' ? 'active' : ''}
          onClick={() => navigate('/settings')}
        >
          Settings
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;