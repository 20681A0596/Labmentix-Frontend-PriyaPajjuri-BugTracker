/*import { useState } from "react";


function FileUpload() {

    const [file, setFile] = useState(null);

    const uploadHandler = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        console.log(file);
    };

    return (
        <div className="file-upload-container">

            <h2 className="file-upload-title">
                Upload Attachment
            </h2>

            <input
                type="file"
                className="file-input"
                onChange={uploadHandler}
            />

            {file && (
                <div className="file-name">
                    Selected File: {file.name}
                </div>
            )}

            <button
                className="upload-btn"
                onClick={handleUpload}
            >
                Upload File
            </button>

        </div>
    );
}

export default FileUpload;*/
/*
import { useState } from "react";

function FileUpload() {

    const [file, setFile] = useState(null);

    const [uploadedFiles, setUploadedFiles] = useState(() => {

        try {
            return JSON.parse(
                localStorage.getItem("uploadedFiles") || "[]"
            );
        } catch {
            return [];
        }

    });

    const uploadHandler = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {

        if (!file) {
            alert("Please select a file");
            return;
        }

        const newFile = {
            id: Date.now(),
            name: file.name,
            size: file.size,
            date: new Date().toLocaleString()
        };

        const updatedFiles = [
            ...uploadedFiles,
            newFile
        ];

        setUploadedFiles(updatedFiles);

        localStorage.setItem(
            "uploadedFiles",
            JSON.stringify(updatedFiles)
        );

        setFile(null);
    };

    return (

        <div className="file-upload-container">

            <h2 className="file-upload-title">
                Upload Attachment
            </h2>

            <input
                type="file"
                className="file-input"
                onChange={uploadHandler}
            />

            {file && (
                <div className="file-name">
                    Selected File: {file.name}
                </div>
            )}

            <button
                className="upload-btn"
                onClick={handleUpload}
            >
                Upload File
            </button>

            <div className="uploaded-files">

                <h3>Uploaded Files</h3>

                {
                    uploadedFiles.length === 0
                        ? <p>No Files Uploaded</p>
                        : uploadedFiles.map(file => (

                            <div
                                key={file.id}
                                className="uploaded-file-card"
                            >

                                <p>
                                    📁 {file.name}
                                </p>

                                <small>
                                    {file.date}
                                </small>

                            </div>

                        ))
                }

            </div>

        </div>

    );
}

export default FileUpload;*/
import { useState } from "react";

function FileUpload() {

    const [file, setFile] = useState(null);

    const [uploadedFiles, setUploadedFiles] = useState(() => {

        try {
            return JSON.parse(
                localStorage.getItem("uploadedFiles") || "[]"
            );
        } catch {
            return [];
        }

    });

    const uploadHandler = (e) => {

        setFile(
            e.target.files[0]
        );

    };

    const handleUpload = () => {

        if (!file) {
            alert("Please Select a File");
            return;
        }

        const newFile = {

            id: Date.now(),

            name: file.name,

            size: file.size,

            date: new Date().toLocaleString()

        };

        const updatedFiles = [

            ...uploadedFiles,

            newFile

        ];

        setUploadedFiles(
            updatedFiles
        );

        localStorage.setItem(
            "uploadedFiles",
            JSON.stringify(updatedFiles)
        );

        setFile(null);
    };

    const deleteFile = (id) => {

        const updatedFiles =
            uploadedFiles.filter(
                file => file.id !== id
            );

        setUploadedFiles(
            updatedFiles
        );

        localStorage.setItem(
            "uploadedFiles",
            JSON.stringify(updatedFiles)
        );

    };

    return (

        <div className="file-upload-container">

            <h2 className="file-upload-title">
                Upload Attachment
            </h2>

            <input
                type="file"
                className="file-input"
                onChange={uploadHandler}
            />

            {file && (

                <div className="file-name">

                    Selected File:
                    {" "}
                    {file.name}

                </div>

            )}

            <button
                className="upload-btn"
                onClick={handleUpload}
            >
                Upload File
            </button>

            <div className="uploaded-files">

                <h3>
                    Uploaded Files
                </h3>

                {

                    uploadedFiles.length === 0

                        ? (
                            <p>
                                No Files Uploaded
                            </p>
                        )

                        : (

                            uploadedFiles.map(
                                (file) => (

                                    <div
                                        key={file.id}
                                        className="uploaded-file-card"
                                    >

                                        <p>
                                            📁 {file.name}
                                        </p>

                                        <small>
                                            {file.date}
                                        </small>

                                        <br />

                                        <button
                                            className="delete-file-btn"
                                            onClick={() =>
                                                deleteFile(file.id)
                                            }
                                        >
                                            Delete
                                        </button>

                                    </div>

                                )

                            )

                        )

                }

            </div>

        </div>

    );
}

export default FileUpload;