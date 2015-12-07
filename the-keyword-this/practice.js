//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).

// 1 // 
// THE KEY WORD THIS //
// What is the purpose of the keyword 'THIS'? //
/*The key word 'THIS' acts as an ambiguity, which references a previously declared object within a function;
Much like a pronoun ("he") creates an ambiguity within a paragraph, which references a previously declared noun ("Phillip")*/

// 2 // 
// What are the four rules that govern what the keyword 'THIS' is bound to and describe each? //
/*When used in a function, 'THIS' is the object that "owns" the function.*/
/*when used in an object, 'THIS' is the object itself.*/
/*In an object constructor, 'THIS' does not have a value. It is only a substitute for the new object.*/
/*When the constructor is used to create an object, 'THIS' will become the new object. */

// 3 // 
// What is the difference between call and apply? //
/*Both can be called on functions, which they run in the context of the first argument.*/
/*In call the subsequent arguments are passed in to the function as they are,
while apply expects the second argument to be an array that it unpacks as arguments for the called function*/

// 4 // 
// What does .bind do? //
/*Bind in javascript is a method--Function.prototype.bind.bind is a method.*/
/*It is a called on function prototype.*/
/*This method creates a function whose body is similar to the function on which it is called, 
but the 'this' refers to the first parameter passed to the bind method.*/ 
/*Its syntax is var bindedFunc = Func.*/

// 5 //
//Create an object called user which has the following properties:
// username --> which is a string, 
// email --> which is a string
//getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the keyword 'THIS'*
var user = {
  username: "phillippuckett88",
  email: "phillippuckett88@gmail.com",
  getUsername: function () {
    return this.username;
  }
};
console.log(user);
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.




// 6 //
// Write the function definitions which will make the following function invocations function properly. //

//Function Invocations Here
var car = function (make, model, year) {
  this.make = make,
  this.model = model,
  this.year = year,
  this.move = 0;
  this.moveCar = function () {
    return this.move += 10;
  }
};
var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.
/*Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. 
You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).*/

//Continuation of previous problem

var getYear = function () {
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
//Code Here


//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function () {
  console.log(this.username);
};

setTimeout(getMyUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
//Answer Here

//In the example above, what is the 'this keyword' bound to when getUsername runs?

//Answer Here

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.