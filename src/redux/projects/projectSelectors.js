export const getById = (state) => state.project.id;
export const getAllId = (state) => {};
export const getAllProjectsSelector = (state) => {
    console.log(state.domain.projects.byId);
   const arr = Object.values(state.domain.projects.byId);
   return arr

}
