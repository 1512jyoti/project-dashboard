import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import AddProjectForm from '../../components/AddProjectForm';
import { addProject } from '../../redux/ProjectSlice';
import './DashboardPage.css';

const DashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projects = useSelector((state) => state.projects.projects);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddProject = (values) => {
    const newProject = {
      id: projects.length + 1,
      name: values.name,
      startDate: values.startDate,
      projectLead: values.projectLead,
      tasks: [],
    };
    dispatch(addProject(newProject));
  };

  return (
    <div className="dashboard">
      <div className="top-bar">
        <h1 className="header">Task Dashboard</h1>
        <div className="top-right-buttons">
          <button className="add-button" onClick={() => setIsModalOpen(true)}>Add Project</button>
          <button className="settings-button" onClick={() => navigate('/settings')}>
            <SettingsIcon fontSize="large" />
          </button>
        </div>
      </div>
      <AddProjectForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddProject} />
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-header">
              <h2>
                <Link to={`/project/${project.id}`} state={{ project }} className="project-link">
                  {project.name}
                </Link>
              </h2>
              <div className="project-details">
                <p><strong>Lead:</strong> {project.projectLead}</p>
                <p><strong>Start Date:</strong> {new Date(project.startDate).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="task-section">
              <h3>To Do</h3>
              <ul className="task-list">
                {project.tasks.filter(task => task.status === 'To Do').map((task) => (
                  <li key={task.id}>{task.title}</li>
                ))}
              </ul>
            </div>
            <div className="task-section">
              <h3>In Progress</h3>
              <ul className="task-list">
                {project.tasks.filter(task => task.status === 'In Progress').map((task) => (
                  <li key={task.id}>{task.title}</li>
                ))}
              </ul>
            </div>
            <div className="task-section">
              <h3>Done</h3>
              <ul className="task-list">
                {project.tasks.filter(task => task.status === 'Done').map((task) => (
                  <li key={task.id}>{task.title}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
