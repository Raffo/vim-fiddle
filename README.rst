Quick prototyping platform for your HTML/CSS needs
==================================================

This is a remake of this github project: mharju/vim-fiddle. A huge thanks to mharju for sharing.
The goal of this project is to create a portable, offline version of jsfiddle, giving the end user the possibility to use vim as an editor. 

To use, just clone this repository and type::

npm install #this installs all the dependencies needed.

node fiddle.js 

The node file will create a directory with the files in template/ and will start vim with a jsfiddle-like setting. 
When you'll see the vim editor open the file will be already served by the webserver. The file can be executed by going to:

http://localhost:3000/fiddle/index.html

Screenshot
==========

.. image:: http://play.taiste.fi/stuf/vim-fiddle.png

Requirements
============

* node.js installed


License 
------- 
 
Licenced under the terms of the MIT License by Raffaele Di Fazio.
 
    Copyright (C) 2011 by Mikko Harju.
    
    Permission is hereby granted, free of charge, to any person obtaining a copy 
    of this software and associated documentation files (the "Software"), to deal 
    in the Software without restriction, including without limitation the rights 
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
    copies of the Software, and to permit persons to whom the Software is 
    furnished to do so, subject to the following conditions: 
 
    The above copyright notice and this permission notice shall be included in 
    all copies or substantial portions of the Software. 
 
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
    THE SOFTWARE. 

