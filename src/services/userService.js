import API from "../api/axiosConfig";

export const getUsers = () => {

    return API.get("/users");
};

export const getUserById =
    (id) => {

        return API.get(`/users/${id}`);
    };

export const createUser =
    (user) => {

        return API.post(
            "/users",
            user
        );
    };

export const updateUser =
    (id, user) => {

        return API.put(
            `/users/${id}`,
            user
        );
    };

export const deleteUser =
    (id) => {

        return API.delete(
            `/users/${id}`
        );
    };