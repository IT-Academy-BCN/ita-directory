# Git flow

We use github issues and automation to manage our tasks. The workflow set for this project is based on branching model that involves the use of a main branch, develop and feature branches to develop new app features or resolve issues.

![Gitworkflow](https://github.com/it-academyproject/ita-directory/blob/333-gitflow/documents/docs/Project/gitworkflow.png)

# Develop and main branches

This workflow uses two branches to record the history of the project. The main branch stores the official release code, and the develop branch serves as an integration branch for features or issue.

# Feature branches

Each new feature or issue should be located in its own branch. Feature branches use develop as their parent branch. When a feature is complete, it gets merged back into develop. Features should never interact directly with main.

# Git commands 🔧

## 1. Clone this repository

Check the pre-requeriments documentation for this purpose.

## 2. Checkout to the develop branch

Change to the develop branch and download the last version of this project

```
$ git checkout develop
$ git pull
```

## 3. Creating a feature branch

Create the new branch with the following command

```
$ git checkout -b issue#-feature-branch
$ git branch (double check to confirm we created a new branch and we are working on it)
```

## 4. Develop the feature

Work on the feature development and once is finished stage all the changes and upload the branch to the github repository:

```
$ git commit -a -m "Do something once more"
$ git push

```

## 5. Pull request to develop

On the Github branch page request a "New pull request". Do not forget to assign the "Reviewer", assign yourself as "Assignee", link the pull request to the "ITA Directory" and link the feature with the issue number in the "Linked issues section".

Add some commments.

If the feature development is approved by the project mentor this will be merged into develop.

## 6. Pull request to develop

Once develop has acquired enough features for a release version (or a predetermined release date is approaching), the develop branch its merged into main.
