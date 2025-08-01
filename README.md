# Github Guide
## Git Workflow
1. **Working Directory**            – Your local files.
2. **Staging Area**                 – Files marked for commit.
3. **Repository**                   – Permanent project history.
## Setup From Web Github
### create a new repository on the command line
```sh
echo "# <repository-name>" >> README.md
git init                            # start tracking changes to the files in this folder(working directory)
git add README.md
git commit -m "first commit"
git branch -M main                  # rename 'master' to 'main'
git remote add origin <url-repository>
git push -u origin main             # push and set remote tracking to origin/main
                                    # -u: --set-upstream(next time you can just run git push)
                                    # origin: the name of the remote
                                    # main: the name of the local branch
```
## Check Status
```sh
git status
```
## Add File (from Working Directory to Staging Area)
```sh
git add <file-name>                 # Add a specific file
git add .                           # Add all files
```
## Commit Changes (from Staging Area to to Local Repository)
```sh
git commit -m "<commit-message>"
```
## Discard File
```sh
git restore <file-name>             # discard a specific file
git restore .                       # discard all files
```
## Remove File (Staging Area)
```sh
git rm -rf <file-name>              # remove a specific file
git rm -rf .                        # remove all files
```
## View History
```sh
git log                             # full commit id(40), author, date, current branch, commit
git log --oneline                   # the first seven commit id, current branch, commit
```
## Branching
```sh
git branch <new-branch>             # create branch
git checkout <new-branch>           # switch to the branch
git checkout -b <new-branch>        # create + switch in one step
git branch -b <branch-name>         # delete branch
git branch -D <branch-name>         # -D = --delete --force, delete branch even if it has unmerged commits
```
## Merge Branch
```sh
git merge <branch-name>
```
## Push Changes
```sh
git push origin <new-branch>
```
## Pull Latest Changes
```sh
git pull origin <new-branch>
```
## Compare Version
```sh
git diff <commit_id>                # compare with current commit id
git diff <old_commit_id> <new_commit_id>
```
## Reset Version
```sh
git reset --soft <commit_id>        # move the HEAD pointer to a specified commit,
                                      keep all changes from the commits that were removed in the staging area,
                                      can be recovered using 'git reflog' >> 'git checkout -b <new-branch> <commit-id>'
```
```sh
git reset --mixed <commit_id>       # move the HEAD pointer to a specified commit,
                                      keep all changes from the commits that were removed in the working directory,
                                      can be recovered using 'git reflog'
```
```sh
git reset --hard <commit_id>        # move the HEAD pointer to a specified commit,
                                      delete all changes from the commits that were removed,
                                      can be recovered using 'git reflog'
```
## Create Branch From Deleted Commit
```sh
git reflog
git checkout -b <new-branch> <commit-id>
```
## Undo Hard Reset
```sh
git reflog
git reset --<option> HEAD@{<number-head>}
```
