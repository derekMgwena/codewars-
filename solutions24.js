//Implement all required functions in order to create the following sentences by calling those functions:

//Adam(has(a(dog()))); // must return "Adam has a dog."
//The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."




function has() {
  var arg = arguments[0];
  if (arg === undefined) {
      arg = "";
  }
  return "has " + arg;
}

function a() {
  return "a " + arguments[0];
}

function dog() {
  var arg = arguments[0];
  if (arg === undefined) {
      return "dog";
  } else {
      return "dog " + arg;
  }
}

function The() {
  var arg = arguments[0]; 
  if (arg === undefined) {
      arg = "";
  }
  return "The " + arg;
}

function name() {
  var arg = arguments[0];
  if (arg === undefined) {
      arg = "";
  }
  return "name " + arg;
}

function of() {
  var arg = arguments[0];
  if (arg === undefined) {
      arg = "";
  }
  return "of " + arg;
}

function the() {
  var arg = arguments[0];
  if (arg === undefined) {
      arg = "";
  }
  return "the " + arg;
}

function is() {
  var arg = arguments[0];
  if (arg === undefined) {
      arg = "";
  }
  return "is " + arg;
}

function also() {
  var arg = arguments[0];
  if (arg === undefined) {
      arg = "";
  }
  return "also " + arg;
}