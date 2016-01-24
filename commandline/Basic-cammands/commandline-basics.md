# Command-line Tutorial
http://linuxcommand.org/ 

You only need to read and follow "Learning the Shell" until "Looking Around".

The "$" character shows you that this is a "Command-Line" command!
You have to write the command without the "$" character into your terminal and hit return.

$ kdkjflajfks 		this is a wrong command
bash: kdkjflajfks: command not found 

Recall the "kdkjflajfks" command using the up-arrow key if needed. Now, try the left and right-arrow keys. You can position the text cursor anywhere in the command line. This allows you to easily correct mistakes. 

Command                     |   Explanation
----------------------------|   ----------------
$ pwd                       |   print working directory
$ ls                        |	list files and folders
$ ls -l                     |	list long
$ ls -al                    |	list all long (lists hidden directories)
$ less                      |	viewing files (q for quit)
$ less	[filename]         |	e.g. "less myApp.js"
$ file                      |	shows file information
$ file  [filename]      |   e.g "file myApp.js"
$ mkdir [directory_name]    |   make new directory (folder)
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
$ cat           |   Concatenate FILE(s), or standard input, to standard output.
$ cat > [filename]    | 
$ cat > jsony.js    |   push line by line into "jsony.js"
var fs = require('fs'); | line one
var JSONy = function() {};  |   line two
module.exports = JSONy; |   line three  and finish with Ctrl-C
These examples also point out an important concept about commands. Most commands operate like this:
    
    $ command -options arguments

The Linux Command Line A Book By William Shotts
http://sourceforge.net/projects/linuxcommand/files/TLCL/13.07/TLCL-13.07.pdf/download