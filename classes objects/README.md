## JS Classes
ES6 classes don't behave like classes from other languages e.g. Java.
A powerful feature is the ability to derive a class from an expression. Expression must resolve to a function with ```[[Construct]]``` and a prototype.
Classes can't be called without the ```new``` keyword. This prevents mistakes - i.e. you can't call a class like you would a function. 


## Characteristics
* Class declarations remain in the TDZ until executed. Similar to ```let```.
* Automatic ```strict``` mode.
* Unlike custom types, all methods are nonenumberale. No ```Object.defineProperty``` needed.
* Must use a ```new``` to call the class constructor.
* Class name and method name cannot be the same.

## Inheritance
Class-based inheritiance allows you to derive a class from another class, function or expression. Inheritance works in such a way that inheriting from built-in objects like ```Array``` is possib.e

* Classes can be declared and sub-classes may override methods
* static methods on classes work similar to Java


### Use of Super
* Use ```super()``` only in a derived class constructor
* Must call ```super()``` before accessing ```this``` in the constructor

