import API from "../api";

export const addComment =
    (issueId, comment) => {

        return API.post(
            `/comments`,
            comment
        );
    };

export const getComments =
    (issueId) => {

        return API.get(
            `/comments/issue/${issueId}`
        );
    };