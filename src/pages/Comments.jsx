/*import { useState } from "react";


function Comments() {

    const [comment, setComment] =
        useState("");

    const submitComment = () => {
        console.log(comment);
    };

    return (
        <div className="comments-container">

            <h2 className="comments-title">
                Comments
            </h2>

            <textarea
                className="comments-textarea"
                placeholder="Write your comment here..."
                onChange={(e) =>
                    setComment(
                        e.target.value
                    )
                }
            />

            <button
                className="comments-button"
                onClick={submitComment}
            >
                Post Comment
            </button>

        </div>
    );
}

export default Comments;*/
/*
import { useState } from "react";

function Comments() {

    const [comment, setComment] = useState("");

    const [comments, setComments] = useState([]);

    const submitComment = () => {

        if (!comment.trim()) return;

        const updatedComments = [
            ...comments,
            {
                id: Date.now(),
                message: comment
            }
        ];

        setComments(updatedComments);

        setComment("");
    };

    return (

        <div className="comments-container">

            <h2 className="comments-title">
                Comments
            </h2>

            <textarea
                className="comments-textarea"
                placeholder="Write your comment here..."
                value={comment}
                onChange={(e) =>
                    setComment(
                        e.target.value
                    )
                }
            />

            <button
                className="comments-button"
                onClick={submitComment}
            >
                Post Comment
            </button>

            <div className="comments-list">

                {comments.map((c) => (

                    <div
                        key={c.id}
                        className="comment-item"
                    >

                        {c.message}

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Comments;

*/

import { useState } from "react";

function Comments() {

    const [comment, setComment] = useState("");

    const [comments, setComments] = useState(() => {

        try {
            return JSON.parse(
                localStorage.getItem("comments") || "[]"
            );
        } catch {
            return [];
        }

    });

    const submitComment = () => {

        if (!comment.trim()) return;

        const updatedComments = [

            ...comments,

            {
                id: Date.now(),
                message: comment,
                date: new Date().toLocaleString()
            }

        ];

        setComments(updatedComments);

        localStorage.setItem(
            "comments",
            JSON.stringify(updatedComments)
        );

        setComment("");
    };

    return (

        <div className="comments-container">

            <h2 className="comments-title">
                Comments
            </h2>

            <textarea
                className="comments-textarea"
                placeholder="Write your comment here..."
                value={comment}
                onChange={(e) =>
                    setComment(e.target.value)
                }
            />

            <button
                className="comments-button"
                onClick={submitComment}
            >
                Post Comment
            </button>

            <div className="comments-list">

                <h3>
                    Recent Comments
                </h3>

                {comments.map((c) => (

                    <div
                        key={c.id}
                        className="comment-item"
                    >

                        <p>{c.message}</p>

                        <small>
                            {c.date}
                        </small>

                    </div>

                ))}

            </div>

        </div>

    );
}

export default Comments;
