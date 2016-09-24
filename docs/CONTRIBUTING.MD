# Contribution Guide

Follow strictly the instruction below to contribute to the project

## Contribution Workflow
Refer to [workflow](https://github.com/waffleio/waffle.io/wiki/Recommended-Workflow-Using-Pull-Requests-&-Automatic-Work-Tracking) for details.

## Branches
### Protected Branches
- **master:** Stable production branch.
- **develop:** Development branch.
- **release:** Support preparation of new production release.

### Working branches
Our branches should follow any of the naming conventions depending on the nature of the task:
```
Bug => 'fix/#ISSUE_ID/brief_description',
Chore => 'chore/#ISSUE_ID/brief_description',
Feature => 'feature/#ISSUE_ID/brief_description'
```

## Commit

We follow standard commit pattern for the project. All commit messages must follow the pattern below.

```'issue #ISSUE_ID | brief_description'```

## Pull Requests

Once you are done with a ticket, open a PR against **develop** branch and ensure that your build process passes on CI.
Always provide succificient description of the task when opening a PR for easy review

## How to Create an issue
We use github issues to track issues on the project.

Each issue created should have at least the following:
* Clear description of the **feature**, **bug**, or **chore.**
* Specific steps to complete the story.
* Itemized tasks to complete the story.
* Include screenshots or mockups for visual guide where applicable.

