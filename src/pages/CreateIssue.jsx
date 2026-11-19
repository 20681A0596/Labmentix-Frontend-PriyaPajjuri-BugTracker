import { useState } from "react";

import {
    createIssue
}
    from "../services/issueService.js";

function CreateIssue() {

    const [issue,setIssue] =
        useState({

            title:"",
            description:"",
            priority:"MEDIUM",
            status:"TO_DO"
        });

    const handleSubmit = async (e) => {

        e.preventDefault();

        await createIssue(issue);

        alert(
            "Issue Created"
        );

    };

    return (

        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
        >

            <input

                placeholder="Title"

                onChange={(e)=>

                    setIssue({
                        ...issue,
                        title:e.target.value
                    })

                }
            />

            <textarea

                placeholder="Description"

                onChange={(e)=>

                    setIssue({
                        ...issue,
                        description:e.target.value
                    })

                }
            />

            <select

                onChange={(e)=>

                    setIssue({
                        ...issue,
                        priority:e.target.value
                    })

                }
            >

                <option>
                    LOW
                </option>

                <option>
                    MEDIUM
                </option>

                <option>
                    HIGH
                </option>

                <option>
                    CRITICAL
                </option>

            </select>

            <button
                className="
                bg-blue-500
                text-white
                p-2
                rounded
                "
            >
                Save
            </button>

        </form>

    );
}

export default CreateIssue;