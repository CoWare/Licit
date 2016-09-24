# How to use waffle in the project

Waffle is a project management tool that helps us track issues with github issues.

We have four basic columns
* **Icebox:** Stories that are not ready for development.
* **Backlog:** Unfinished but ready for develepment stories.
* **Ready:** Ready for develepment.
* **In progress** Stories that somebody is working on.
* **Code review:** Submitted PRs for review.
* **QA:** Quality Assurance issues with task.
* **Done:** Closed issues.


Waffle responds to your normal git commands. Typical use cases are:

1) Move story to **In Progress** column

    Create a branch with the [naming convention]('./docs/CONTRIBUTING.MD') and run `git push.`
    Always ensure that your avatar is on the issue you are working on.

2) Move story to **Code Review** column

    Open a PR once you are done with a story. The title of th PR could be any of the following format.

    ```
    closes #ISSUE_ID | brief description of issue.
    fixes #ISSUE_ID | brief description of issue.
    ```
This is all you need to move your story to **Code Review** section.


Thanks for contributing.


