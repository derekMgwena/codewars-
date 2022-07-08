/* Your task will be to implement an object (class) that mimics the array object, but should not actually be an Array. You are otherwise free to choose your own implementation.

The object shall be named List and shall have the methods push, pop, shift, unshift and filter defined on its prototype. Each of these methods should behave exactly as their Array counterpart does. (It is acceptable for filter to return a List or an Array.)
The List constructor must take an arbitrary number of arguments as initial values for your list.
Furthermore, your list should have a length property that dynamically changes as your list changes.

Here are some helpful resources: push, pop, shift, unshift, filter. */
function List() {
  this.length = 0;
  for (let i = 0; i < arguments.length; ++i) this.push(arguments[i]);
}
['push','pop','shift','unshift','filter'].forEach(k => List.prototype[k] = Array.prototype[k]);