import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import Project from "../../components/Project";
import AddTaskForm from "../../components/AddTaskForm";
import { addTask, moveTask, deleteTask } from "../../redux/ProjectSlice";
import "./ProjectPage.css";

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56"];

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  const handleAddTask = (values) => {
    const newTask = {
      id: project.tasks.length + 1,
      title: values.title,
      status: "To Do",
    };
    dispatch(addTask({ projectId: project.id, task: newTask }));
  };

  const handleMoveTask = (taskId, newStatus) => {
    dispatch(moveTask({ projectId: project.id, taskId, newStatus }));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask({ projectId: project.id, taskId }));
  };

  // Calculate task distribution
  const taskCounts = { todo: 0, inProgress: 0, done: 0 };
  project.tasks.forEach((task) => {
    if (task.status === "To Do") taskCounts.todo++;
    else if (task.status === "In Progress") taskCounts.inProgress++;
    else if (task.status === "Done") taskCounts.done++;
  });

  const chartData = [
    { name: "To Do", value: taskCounts.todo },
    { name: "In Progress", value: taskCounts.inProgress },
    { name: "Done", value: taskCounts.done },
  ];

  return (
    <div className="container">
      <button
        onClick={() => navigate("/dashboard")}
        className="back-button"
      >
        Back to Dashboard
      </button>

      <h1>{project.name}</h1>
      <div className="projectpage-project">
        <p>
          <strong>Project Lead:</strong> {project.projectLead}
        </p>
        <p>
          <strong>Start Date:</strong>{" "}
          {new Date(project.startDate).toLocaleDateString()}
        </p>
      </div>

      <div className="chart-container">
        <h2>Task Distribution</h2>
        <PieChart width={300} height={300}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      <div className="tasks-container">
        <h2> Tasks</h2>
        <div className="add-task-form">
          <AddTaskForm onSubmit={handleAddTask} />
        </div>
        <div>
        <Project
        initialTasks={project.tasks}
        onMoveTask={handleMoveTask}
        onDeleteTask={handleDeleteTask}
      />
        </div>
        
      </div>
     
      <div className="team-members">
        <h2>Team Members</h2>
        <ul>
          <li>John Doe</li>
          <li>Jane Smith</li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectPage;
