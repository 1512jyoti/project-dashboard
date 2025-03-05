import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [
    {
      id: 1,
      name: 'Project 1',
      startDate: '2024-03-02',
      projectLead: 'Bob Smith',
      tasks: [
        { id: 1, title: 'Task 1', status: 'To Do' },
        { id: 2, title: 'Task 2', status: 'In Progress' },
        { id: 3, title: 'Task 3', status: 'Done' },
      ],
    },
    {
      id: 2,
      name: 'Project 2',
      startDate: '2024-03-01',
      projectLead: 'Alice Johnson',
      tasks: [
        { id: 4, title: 'Task 4', status: 'To Do' },
        { id: 5, title: 'Task 5', status: 'In Progress' },
        { id: 6, title: 'Task 6', status: 'Done' },
      ],
    },
    {
      id: 3,
      name: 'Project 3',
      startDate: '2025-03-15',
      projectLead: 'Ryan Johnson',
      tasks: [
        { id: 4, title: 'Task 11', status: 'To Do' },
        { id: 5, title: 'Task 10', status: 'In Progress' },
        { id: 6, title: 'Task 12', status: 'Done' },
      ],
    },
  ],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action) => {
      const newProject = {
        id: state.projects.length + 1,
        name: action.payload.name,
        startDate: action.payload.startDate,
        projectLead: action.payload.projectLead,
        tasks: [],
      };
      state.projects.push(newProject);
    },
    addTask: (state, action) => {
      const { projectId, task } = action.payload;
      const project = state.projects.find((p) => p.id === projectId);
      if (project) {
        project.tasks.push(task);
      }
    },
    moveTask: (state, action) => {
      const { projectId, taskId, newStatus } = action.payload;
      const project = state.projects.find((p) => p.id === projectId);
      if (project) {
        const task = project.tasks.find((t) => t.id === taskId);
        if (task) {
          task.status = newStatus;
        }
      }
    },
    deleteTask: (state, action) => {
      const { projectId, taskId } = action.payload;
      const project = state.projects.find((p) => p.id === projectId);
      if (project) {
        project.tasks = project.tasks.filter((t) => t.id !== taskId);
      }
    },
  },
});

export const { addProject, addTask, moveTask, deleteTask } = projectsSlice.actions;

export default projectsSlice.reducer;