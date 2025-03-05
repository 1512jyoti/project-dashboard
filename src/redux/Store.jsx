import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../redux/ProjectSlice';

const store = configureStore({
  reducer: {
    projects: projectReducer,
  },
});

export default store;


