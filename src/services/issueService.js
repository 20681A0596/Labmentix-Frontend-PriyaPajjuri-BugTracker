import API from "../api";

export const getIssues = () => {

    return API.get("/issues");
};

export const createIssue = (issue) => {

    return API.post("/issues", issue);
};

export const updateIssue = (id, issue) => {

    return API.put(
        `/issues/${id}`,
        issue
    );
};

export const deleteIssue = (id) => {

    return API.delete(
        `/issues/${id}`
    );
};