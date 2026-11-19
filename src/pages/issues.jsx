/*import {useEffect, useState} from "react";
import Layout from "../components/Layout";
import CreateIssueForm from "../components/CreateIssueForm";
import IssueCard from "../components/IssueCard.jsx";
import createIssueForm from "../components/CreateIssueForm";

function Issues() {

    const [issues, setIssues] = useState([]);
    useEffect(() => {
        const createIssue =
            JSON.parse(localStorage.getItem("issues")) || [];

        setIssues(createIssue);
    }, []);


    const addIssue = (newIssue) => {

        setIssues([
            ...issues,
            {
                id: Date.now(),
                ...newIssue
            }
        ]);

    };

    return (

        <Layout>

            <h1>Issues</h1>

            <CreateIssueForm
                addIssue={addIssue}
            />

            <div className="issue-list">

                {issues.length === 0 ? (

                    <div className="empty">
                        No Issues Available
                    </div>


                ) : (
                    issues.map((issue) => (
                        <IssueCard
                            key={issue.id}
                            issue={issue}
                        />
                    ))
                )}

            </div>

        </Layout>

    );
}

export default Issues;*/
import { useState } from "react";
import Layout from "../components/Layout";
import CreateIssueForm from "../components/CreateIssueForm";
import IssueCard from "../components/IssueCard";

function Issues() {

    const [issues, setIssues] = useState(() => {

        try {
            return JSON.parse(
                localStorage.getItem("issues") || "[]"
            );
        } catch {
            return [];
        }

    });
    const addIssue = (issue) => {

        const updatedIssues = [
            ...issues,
            {
                id: Date.now(),
                ...issue
            }
        ];

        setIssues(updatedIssues);

        localStorage.setItem(
            "issues",
            JSON.stringify(updatedIssues)
        );
    };

        const deleteIssue = (id) => {

            const updatedIssues =
                issues.filter(
                    issue =>
                        issue.id !== id
                );
            console.log(updatedIssues);

            setIssues(updatedIssues);

            localStorage.setItem(
                "issues",
                JSON.stringify(updatedIssues)

            );

        };

    const editIssue = (issue) => {

        const newTitle = prompt(
            "Update Issue Title",
            issue.title
        );

        if (!newTitle) return;

        const updatedIssues =
            issues.map((i) =>

                i.id === issue.id
                    ? {
                        ...i,
                        title: newTitle
                    }
                    : i

            );

        setIssues(updatedIssues);

        localStorage.setItem(
            "issues",
            JSON.stringify(updatedIssues)
        );
    };


    return (
        <Layout>

            <h1>Issues Management</h1>

            <CreateIssueForm
                addIssue={addIssue}
            />

            <div className="issue-list">

                {issues.length === 0 ? (

                    <div className="no-issues">
                        No Issues Available
                    </div>

                ) : (

                    issues.map((issue) => (

                        <IssueCard
                            key={issue.id}
                            issue={issue}
                            onDelete={deleteIssue}
                            onEdit={editIssue}
                        />

                    ))

                )}

            </div>

        </Layout>
    );
}

export default Issues;