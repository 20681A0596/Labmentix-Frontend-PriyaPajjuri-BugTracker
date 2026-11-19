import API from "../api";

export const uploadFile = (file) => {

    const formData = new FormData();

    formData.append(
        "file",
        file
    );

    return API.post(
        "/files/upload",
        formData
    );
};