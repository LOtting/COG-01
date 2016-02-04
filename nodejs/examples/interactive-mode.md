# Run Node in interactive mode

A Read-Eval-Print-Loop (REPL) is available both as a standalone program 
and easily includable in other programs. The REPL provides a way 
to interactively run JavaScript and see the results.
It can be used for debugging, testing, or just trying things out.
https://nodejs.org/api/repl.html



By executing node without any arguments from the command-line you will be dropped into the REPL.

```shell
$ node
>

> console.log("Hello World!");
Hello World
undefined
>

> function greet(name) {
console.log("Hello " + name);
}; greet("World!");
Hello World
undefined
>

> var myVar = "Hello World!";
undefined
> console.log(myVar);
Hello World!
undefined
>

```
There are a few special REPL commands:

Command | Explanation
------- | ------------
.break  |   While inputting a multi-line expression, sometimes you get lost or just don't care about completing it. .break will start over.
.clear  |   Resets the context object to an empty object and clears any multi-line expression.
.exit   |   Close the I/O stream, which will cause the REPL to exit.
.help   |   Show this list of special commands.
.save   |   Save the current REPL session to a file. Example: .save ./file/to/save.js
.load   |   Load a file into the current REPL session. Example: .load ./file/to/load.js

```shell
$ node
> console.log("Hello World!");
Hello World
undefined
> .save myShellFile.js
Session saved to:myShellFile.js
> .load myShellFile.js
> console.log("Hello World!");
Hello World
undefined
>
```

The following key combinations in the REPL have these special effects:

Command | Explanation
------- | ------------
Ctrl + C | Similar to the .break keyword. Terminates the current command. Press twice on a blank line to forcibly exit.
Ctrl + D | Similar to the .exit keyword.
tab | Show both global and local(scope) variables


## REPL Driven Development (RDD)
A REPL provides great feedback to obtain a feeling for the boundaries of your modules,
objects and messages. And, if you work with data in JSON,
a REPL can support you to explore and improve data structures too.
http://thinkingonthinking.com/scripting-a-csv-converter/

if you follow this tutorial use this link to the [Node.js v4.2.4 Documentation](https://nodejs.org/dist/latest-v4.x/docs/api/fs.html#fs_fs_readfile_file_options_callback)


## Building command line tools [(CLI-tools)](https://developer.atlassian.com/blog/2015/11/scripting-with-node/) with Node.js 
...
Then, one day, I looked at the last six letters of the language 
that I've been using every day for the last decade and had a lightpalm facebulb moment.
It turns out you can use JavaScript... for scripting!
...


## Books:

[Node: Up and Running](http://chimera.labs.oreilly.com/books/1234000001808/index.html)

[Node.js: Das umfassende Handbuch](https://www.rheinwerk-verlag.de/nodejs_3319/)
Serverseitige Webapplikationen mit JavaScript entwickeln (Galileo Computing) EUR 34,90 
von Sebastian Springer (aus München) Achtung! Ab März 2te Version erhältlich.