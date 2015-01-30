# Chem.js
**Chem.js** is a simple chemical modeling which can be used in javascript chemical projects. This library is originally written in ES6 and is transcompiled to ES5. It covers these models :

1. Atom
2. Bond
3. Molecule
4. Element

# Using in Node.js
For using this library in a Node project after installation with `npm` it will be transcompiled with commonjs module definintion. If you prefer to clone this repository you should run `grunt build:commmon` after cloning.

## Openbabel for Node.js
We recommend [mohebifar/openbabel-node](https://github.com/mohebifar/openbabel-node) instead of *Chem.js* for node.js project. You can use *Chem.js* in front-end to make a connection between them via `mol-json` format.
