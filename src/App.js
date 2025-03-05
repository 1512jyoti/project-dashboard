
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BrowserRouter as Router, Routes, Route,Navigate,Link } from 'react-router-dom';
import DashboardPage from './pages/dashboard/DashboardPage';
import ProjectPage from './pages/projects/ProjectPage';
import SettingsPage from './pages/settings/SettingPage'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
      {/* <nav>
          <ul>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
         <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<DashboardPage />} />
           <Route path="/project/:id" element={<ProjectPage />} />
           <Route path="/settings" element={<SettingsPage />} />

         </Routes>
       </Router>
    </DndProvider>
  );
}

export default App;