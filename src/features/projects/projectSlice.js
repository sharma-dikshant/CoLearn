import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  byId: {}, // Store projects by their ID for quick lookup
  allIds: [], // Store an array of all project IDs
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject(state, action) {
      const project = action.payload;
      state.byId[project.id] = project;
      state.allIds.push(project.id);
    },
    removeProject(state, action) {
      const projectId = action.payload;
      delete state.byId[projectId];
      state.allIds = state.allIds.filter((id) => id !== projectId);
    },
    // updateProject(state, action) {
    //   const updatedProject = action.payload;
    //   if (state.byId[updatedProject.id]) {
    //     state.byId[updatedProject.id] = updatedProject;
    //   }
    // },
    // setProjects(state, action) {
    //   const projects = action.payload;
    //   state.byId = {};
    //   state.allIds = [];
    //   projects.forEach((project) => {
    //     state.byId[project.id] = project;
    //     state.allIds.push(project.id);
    //   });
    // },
  },
});

export const { addProject, removeProject } = projectsSlice.actions;

export default projectsSlice.reducer;
