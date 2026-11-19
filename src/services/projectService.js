import API from "../api";

export const getProjects = () => {
    return API.get("/projects");
};

export const getProjectById = (id) => {
    return API.get(`/projects/${id}`);
};

export const createProject = (project) => {
    return API.post("/projects", project);
};

export const updateProject = (id, project) => {
    return API.put(`/projects/${id}`, project);
};

export const deleteProject = (id) => {
    return API.delete(`/projects/${id}`);
};