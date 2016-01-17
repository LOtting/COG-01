# Basic Git commands

Command | Explanation
------- | ------------
$ git init      |   create new local repository (Repositorium, Aufbewahrungsort)
$ git status    |   shows git status
$ git add \<filename\> |  add changes to INDEX (Liste)
$ git commit -m 'description'   |   commit (übergebe) changes
GitHub  |   the following commands are more specific to remote repositories
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY   |   clone remote repository 
$ git clone https://github.com/Goyapa/COG-01.git  | sample
$ git remote -v |   List the current configured remote repository of your fork.
$ git push -u origin master |   push changes to remote repository (your fork)
$ git push  |   The -u tells Git to remember the parameters
$ git pull  |   update local repository with remote changes (your fork)
But syncing a fork e.g. from https://github.com/Goyapa/COG-01   |   https://help.github.com/articles/syncing-a-fork/
$ git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git | add remote upstream repository
$ git remote add upstream https://github.com/Goyapa/COG-01  |   add original repository you forked from
$ git fetch upstream    |   sync changes of the original repository with your fork 
$ git checkout master   |   if you are not allready in master
$ git merge upstream/master | merge changes (Änderungen zusammenfügen)
$ git remote rm upstream  | if you want to remove the remote upstream
Git Config  | Cloud9 is preconfigured, get and set configuration variables
$ git config --list     |   have a look
$ git config --global user.name "John Doe"  | set/change your user name
$ git config --global user.email johndoe@example.com    | set/change your email


Tip: Syncing your fork only updates your local copy of the repository. To update your fork on GitHub, you must push your changes.

Docs:
https://git-scm.com/

Online Book and Ebook:
https://git-scm.com/book/en/v2

tryGit: 				               // have a look at https://www.codeschool.com/courses/try-git
https://try.github.io

A workshopper for Git and GitHub:
https://github.com/jlord/git-it

git - the simple guide:
http://rogerdudler.github.io/git-guide/

A successful Git branching model:
http://nvie.com/posts/a-successful-git-branching-model/

Git-branching-model.pdf:
http://nvie.com/files/Git-branching-model.pdf

GitHub Help:
https://help.github.com/