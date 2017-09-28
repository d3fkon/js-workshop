### Welcome to the JS-Workshop
----
##### 1. Setting up a development environment

Open up **Visual Studio Code (VS Code)** (our text editor of choice). This is a text editor by Microsoft, and is one among the leading text editors used by developers. It comes packed with a lot of really nice and helpful features which helps in reducing the time spent in writing code. 
Lets femiliarize ourself with it first.
> Create a new file called `test.c` and write a Hello world program.

I'll demonstrate a few techniques which will help you write code faster with this editor

_Note: This is only a text editor. Hence, to run the code we write in it, we need an external compiler. VS Code is soley meant to write code not execute it_

_To compile C code, we use **gcc** (GNU C Compiler). Similarly, to run javascript on our local machine, we use nodejs._

----

##### 2. Introduction to nodejs

Nodejs is the Javascript runtime for x86 machines. Back in the day, when web development was in it's infancy, Javascript was a language meant to used only in web browsers. Now, with nodejs, it can be run on computer as any other programming laguage and is being used everywhere. By everywhere, I mean, even **VS Code** was written using Javascript.

**Where is nodejs and js being used?**
•  Web apps and web browsers (Duh...)
•  Mobile Apps (Instagram, Facebook, Airbnb, ...)
•  Desktop Apps (VSCode, Atom, ...The electron framework)
•  VR (react-vr)
•  Embedded microcontrollers (Espruino)

> Conclusion: Javascript is eveywhere. Learning it can only mean that you have a headstart in doing anything you want

----

##### 3. Lets get started!

**Few quirks about javascript**
1. It is a dynamically typed language (type as in data-type) ('C' is statically typed btw)
2. It is a losely typed language.
    1. No int, float, char, etc is accessable during declaration.
    2. Data-types of variables can be changed on the go.
    3. _NO POINTERS!!_, (**No** functionality is lost because of this tho).
    4. No return types for function.
3. Memory allocation is taken care of internally.
    1. No need of dclaring the size of arrays henceforth.
4. Procedural exection of code. (No main function. Exection starts at the first line of the file).
5. Very programmer-friendly/forgiving paradigm. (Good and bad at the same time).

----
**Note**
Eventhough javascript can be a programming language, its seldom used to write console applications like how we are taught in VTU. We usually use command-line arguments or a GUI to get the input. 

Because of this, we will not be working with user input data, rather we will be understanding the core concepts of Nodejs using static data. 

> However, console inputs can be achieved using a library called `sget` which parses the input and makes using the input data much easier 

----

##### Setup

Because we are using git, node and npm, open your terminal and ensure that you have these installed by running the following commands: (`Ctrl+Shift+V` to paste into the terminal)
> `$ git --version`
> `$ node -v`
> `$ npm -v`

All these should return their version numbers proving that they are installed.

----

Now, create a working directory under your name, and `cd` into it.

Run the following command to retrieve the files you will be working with over the course of this workshop.
(Copy the dot too!)
> `$ git clone https://github.com/d3fkon/js-workshop.git .`

Confirm the clone by executing `ls` to see the `index.js` file. 