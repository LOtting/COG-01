# Terminal Commands

## [The Command Line Crash Course](http://cli.learncodethehardway.org/book/)
 
Command                     |   Explanation
----------------------------|   ----------------
$ pwd                       |   print working directory
|||
$ ls                        |	list files and folders
$ ls -l                     |	list long
$ ls -al                    |	list all long (lists hidden directories like .git)
|||
$ cd                        |   change directory
$ cd /usr/bin               |   change into folder /usr/bin
$ cd [two-points]           |   change from the working directory to the parent
n@c:~$                      |   "~$" you are in the home directory (root of your project) 
n@c:/$                      |   "/$" you are in the root directory of your Linux System
n@c:~/workspace$ cd         |   from current( e.g. workspace) to home directory
n@c:~$ cd /                 |   from home to root directory of the C9 Ubuntu(Linux) system
n@c:/$ cd                   |   from root to home directory
n@c:~$ cd workspace/        |   from home to workspace directory
|||
$ less                      |	viewing textfiles(readonly) (type q for quit less)
$ less [filename]           |	open file with less(readonly) as a general rule
$ less myApp.js             |   open "myApp.js" with less in readonly mode
|||
$ c9 [filename]             |   Open FILE(s) in Cloud9 from terminal ( If it does not work follow this [blogpost](https://c9.io/blog/edit-from-the-cloud9-terminal-like-a-boss-6-2-2015/) )
|||
$ file [filename]           |   show file information as a general rule
$ file file myApp.js        |   show information about "file myApp.js"
|||
$ touch [filename]          |   create empty file as a general rule
$ touch myFile.js           |   create empty file "myFile.js"
$ touch /path/to/file.js    |   create empty file "file.js" in folder "/path/to/"
$ touch /cog01/javascript-basics/mytest.js  | sample
|||
$ mkdir [directory_name]    |   create new directory(folder) as a general rule
$ mkidr myProjectFolder     |   create "myProjectFolder"
|||
$ rm [filename]             |   remove a "file" as a general rule
$ rm myfile.js              |   removes "myfile.js"
$ rm -r [foldername]        |   remove a "folder" or "folders" recursively as a general rule
$ rm -r jsBasics            |   removes folder "jsBasics" an all folders within
|||
$ man [program_name]        |   open manual of a program
$ man man                   |   manual of man
$ man git                   |   git manual
$ man node                  |   node manual
|||
$ cat                       |   concatenate FILE(s), or standard input, to standard output.
$ cat > [filename]          |   as a general rule
$ cat > jsony.js            |   push line by line into "jsony.js"
var fs = require('fs');     |   line one
var JSONy = function() {};  |   line two
module.exports = JSONy;     |   line three,  finish "cat" with Ctrl-C, and have a look at jsony.js
|||
$ chmod                     |   chmod - change file mode bits
$ chmod u+x                 |   [file permissions](https://help.ubuntu.com/community/FilePermissions)
$ chmod u+x ./convert.js    |   add owner execute bit, see "FilePermissions"
|||
$ tree                      |   navigate to a directory and just use [tree](http://www.cyberciti.biz/faq/linux-show-directory-structure-command-line/), pre installed at C9
$ tree [options] [/path/to/folder]    |   as a general rule
$ tree COG-01/commandline/  |   prints treeview of commandline folder
$ tree -d COG-01/commandline/   |   list directories only
$ tree -a COG-01/commandline/   |   list all directories 
$ tree -L [level]           |   descend only level directories deep ( e.g. 2 folders deep)
n@c:/$ tree -L 2            |   !Attention! at the e.g. root directory the tree could be very big, use -L option!
n@c:/$ tree -dL 2           |   combine two options(folders only and level 2) 

These examples also point out an important concept about commands. 

Most commands operate like this:
```shell
$ command -options arguments
``` 
## [Linux Filesystem Tree Overview](https://help.ubuntu.com/community/LinuxFilesystemTreeOverview)

## [Using the Terminal](https://help.ubuntu.com/community/UsingTheTerminal)

## [Edit from the Cloud9 Terminal like a Boss!](https://c9.io/blog/edit-from-the-cloud9-terminal-like-a-boss-6-2-2015/)

## [Learning the Shell](http://linuxcommand.org/lc3_learning_the_shell.php)

## [The Linux Command Line A Book By William Shotts](http://sourceforge.net/projects/linuxcommand/files/TLCL/13.07/TLCL-13.07.pdf/download)

## [Commandline Howto](https://help.ubuntu.com/community/CommandlineHowto)

## [Advanced Commandline Howto](https://help.ubuntu.com/community/AdvancedCommandlineHowto)

## [The Linux Commandline on Windows](https://www.cygwin.com/)
