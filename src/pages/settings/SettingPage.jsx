import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const SettingsPage = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const navigate = useNavigate();


  useEffect(() => {
    document.body.className = theme; // Apply theme to body
    localStorage.setItem('theme', theme); // Store preference
  }, [theme]);

  return (
    <div className="settings-page">
       <button className="settings-button" onClick={() => navigate('/dashboard')}> Back To Dashboard</button>
      <h1>Settings</h1>
      <p>Configure your application preferences here.</p>
      
      <label className="theme-toggle">
        Theme:
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
    </div>
  );
};

export default SettingsPage;
