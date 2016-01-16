# Command-line Tutorial
http://linuxcommand.org/ 

You only need to read and follow "Learning the Shell" until "Looking Around".

The "$" character shows you that this is a "Command-Line" command!
You have to write the command without the "$" character into your terminal and hit return.

$ kdkjflajfks 		this is a wrong command
bash: kdkjflajfks: command not found 

Recall the "kdkjflajfks" command using the up-arrow key if needed. Now, try the left and right-arrow keys. You can position the text cursor anywhere in the command line. This allows you to easily correct mistakes. 

##  Command		|		Explanation
--------------- |  ----------------
$ pwd  			|		print working directory see man pwd

$ ls			|		list files and folders see man ls
$ ls -l			|		list long
$ ls -al		|		list all long 
						(lists hidden directories)
$ less			|		viewing files (q for quit) see man less
$ less	<text_file>		e.g. "less myApp.js"
$ ls | less				"|"pipes ls output into less
$ file					shows file information see man file
$ file	<name_of_file>  e.g "file myApp.js"
$ mkdir <directory name>    make new directory(folder) see man mkdir

$ man <program name>        open manual of a program
$ man man                   manual of man
$ man git                   git manual
$ man node                  node manual

These examples also point out an important concept about commands. Most commands operate like this:
    command -options arguments
    
$ cd 	 			    change directory
$ cd /usr/bin 		    change into folder /bin
$ cd ..				    change the working directory to the parent 

n@c:/$ cd			    from current to home directory
n@c:~$ cd /			    from home to root directory
n@c:/$ cd			    from root to home directory
n@c:~$

The Linux Command Line A Book By William Shotts
http://sourceforge.net/projects/linuxcommand/files/TLCL/13.07/TLCL-13.07.pdf/download