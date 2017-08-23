## Iterators & Generators
 ES6 Iterators returns a series of values. But they can be used in complex ways.
 ```Symbol.iterator``` is the default iterator for objects.
 ```for-of``` is an easier syntax for loops.
 A generator is a special function that automatically creates an iterator.
 Encapsulating generators via delegation allows generator composition. 
 One pattern could be to use an iterator for asynchronous tasks when a ```Promise``` doesn't make sense.
 