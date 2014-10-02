no.js
=====

New take on node.js


Do you need a convoluted way to get a falsy value? No.js is here to help.

No.js contains some nasty code, so trust me when I say it works. Here's how:

Call ```.no()``` on any object to receive a falsy value. 

```
var anything = true;
if (anything.no()) {
  //You don't ever want to run this branch. Bad things happen here
}
