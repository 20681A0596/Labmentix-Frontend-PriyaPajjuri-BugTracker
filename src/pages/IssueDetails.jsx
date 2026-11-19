import { useState } from "react";

function IssueDetails() {

    const [comments, setComments] = useState([
        {
            id: 1,
            message: "Login bug reproduced"
        }
    ]);

    const [commentText, setCommentText] =
        useState("");

    const addComment = () => {

        const newComment = {

            id: Date.now(),

            message: commentText
        };

        setComments([
            ...comments,
            newComment
        ]);

        setCommentText("");
    };

    return (

        <div className="p-6">

            <h1
                className="text-3xl font-bold mb-4"
            >
                Issue Details
            </h1>

            <div
                className="
             bg-white
             shadow
             rounded
             p-6
             "
            >

                <h2
                    className="text-xl font-semibold"
                >
                    Login Bug
                </h2>

                <p className="mt-2">

                    Users are unable to login
                    after entering valid
                    credentials.

                </p>

                <div className="mt-4">

                    <p>

                        <strong>
                            Priority:
                        </strong>

                        HIGH

                    </p>

                    <p>

                        <strong>
                            Status:
                        </strong>

                        IN_PROGRESS

                    </p>

                    <p>

                        <strong>
                            Assigned To:
                        </strong>

                        Developer One

                    </p>

                </div>

            </div>

            <div
                className="
              mt-6
              bg-white
              p-5
              shadow
              rounded
             "
            >

                <h2
                    className="font-bold text-xl"
                >
                    Comments
                </h2>

                <div
                    className="mt-4"
                >

                    {comments.map(comment => (

                        <div

                            key={comment.id}

                            className="
                          border
                          p-2
                          mb-2
                          rounded
                          "
                        >

                            {comment.message}

                        </div>

                    ))}

                </div>

                <textarea

                    className="
                    border
                    w-full
                    p-2
                    mt-3
                    "

                    placeholder="Add Comment"

                    value={commentText}

                    onChange={(e) =>
                        setCommentText(
                            e.target.value
                        )
                    }

                />

                <button

                    onClick={addComment}

                    className="
                    bg-blue-500
                    text-white
                    px-4
                    py-2
                    mt-2
                    rounded
                    "

                >

                    Add Comment

                </button>

            </div>

            <div
                className="
             mt-6
             bg-white
             shadow
             rounded
             p-5
             "
            >

                <h2
                    className="font-bold text-xl"
                >
                    Attachments
                </h2>

                <ul
                    className="mt-3"
                >

                    <li>
                        login-error.png
                    </li>

                    <li>
                        console-log.txt
                    </li>

                </ul>

            </div>

        </div>

    );
}

export default IssueDetails;