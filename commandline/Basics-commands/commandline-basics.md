# Command-line Tutorial

## [The Command Line Crash Course](http://cli.learncodethehardway.org/book/)
 
Command                     |   Explanation
----------------------------|   ----------------
$ pwd                       |   print working directory
|||
$ ls                        |	list files and folders
$ ls -l                     |	list long
$ ls -al                    |	list all long (lists hidden directories)
|||
$ less                      |	viewing textfiles(readonly) (q for quit)
$ less [filename]          |	open file with less(readonly) as a general rule
$ less myApp.js             |   open "myApp.js" with less in readonly mode
|||
$ file  [filename]          |   show file information as a general rule
$ file file myApp.js        |   show information about "file myApp.js"
|||
$ touch   [filename]        |   create empty file as a general rule
$ touch   myFile.js         |   create empty file "myFile.js"
$ touch /path/to/file.js    |   create empty file "file.js" in folder "/path/to/"
$ touch /cog01/javascript-basics/mytest.js  | sample
|||
$ mkdir [directory_name]    |   create new directory(folder) as a general rule
$ mkidr myProjectFolder     |   create "myProjectFolder"
|||
$ rm [filename]             |   remove a file as a general rule
$ rm myfile.js              |   removes "myfile.js"
$ rm -r [foldername]        |   remove a folder or folders recursively as a general rule
$ rm -r jsBasics            |   removes folder "jsBasics" an all folders within
|||
$ man   [program_name]      |   open manual of a program
$ man man                   |   manual of man
$ man git                   |   git manual
$ man node                  |   node manual
$ cd                        |   change directory
$ cd /usr/bin               |   change into folder /usr/bin
$ cd [two-points]           |   change the working directory to the parent
n@c:~$                      |   "~$" you are in the home directory (root of your project) 
n@c:/$                      |   "/$" you are in the root directory of your Linux System
n@c:~/workspace$ cd         |   from current to home directory
n@c:~$ cd /                 |   from home to root directory
n@c:/$ cd                   |   from root to home directory
$ cat                       |   Concatenate FILE(s), or standard input, to standard output.
$ cat > [filename]          |   as a general rule
$ cat > jsony.js            |   push line by line into "jsony.js"
var fs = require('fs');     |   line one
var JSONy = function() {};  |   line two
module.exports = JSONy;     |   line three,  finish "cat" with Ctrl-C
$ chmod                     |   chmod - change file mode bits
$ chmod u+x                 |   [FilePermissions](https://help.ubuntu.com/community/FilePermissions)
$ chmod u+x ./convert.js    |   Add owner execute bit, see "FilePermissions"

These examples also point out an important concept about commands. 

Most commands operate like this:
    
    $ command -options arguments
    

## [Learning the Shell](http://linuxcommand.org/lc3_learning_the_shell.php)

## [The Linux Command Line A Book By William Shotts](http://sourceforge.net/projects/linuxcommand/files/TLCL/13.07/TLCL-13.07.pdf/download)

## [CommandlineHowto](https://help.ubuntu.com/community/CommandlineHowto)

## [AdvancedCommandlineHowto](https://help.ubuntu.com/community/AdvancedCommandlineHowto)

## [The Linux Commandline on Windows](https://www.cygwin.com/)
