import { useState } from "react";

function CreateIssueForm({addIssue}) {

    const [issue,setIssue] =
        useState({

            title:"",
            description:"",
            priority:"LOW",
            status:"TO_DO"

        });


    const submitHandler=(e)=>{

        e.preventDefault();
        addIssue(issue);

        setIssue({
            title: "",
            description: "",
            priority: "MEDIUM",
            status: "TO_DO"
        });
    };




    return(

        <form
            className="form"
            onSubmit={submitHandler}
        >

            <input
                value={issue.title}
                placeholder="Issue Title"
                onChange={(e)=>
                    setIssue({
                        ...issue,
                        title:e.target.value
                    })}
            />

            <textarea
                    value={issue.description}
                placeholder="Description"
                onChange={(e)=>
                    setIssue({
                        ...issue,
                        description:e.target.value
                    })}
            />

            <select
                value={issue.priority}
                onChange={(e)=>
                    setIssue({
                        ...issue,
                        priority:e.target.value
                    })}
            >

                <option>LOW</option>
                <option>MEDIUM</option>
                <option>HIGH</option>
                <option>CRITICAL</option>

            </select>
            <select
                value={issue.status}
                onChange={(e) =>
                    setIssue({
                        ...issue,
                        status: e.target.value
                    })
                }
            >

                <option value="TO_DO">
                    TO_DO
                </option>

                <option value="IN_PROGRESS">
                    IN_PROGRESS
                </option>

                <option value="DONE">
                    DONE
                </option>

            </select>


            <button type="submit">
                Create Issue
            </button>

        </form>

    )

}

export default CreateIssueForm;