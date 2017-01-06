function Student(firstName, favoriteColor) {
  this.firstName = firstName;
  this.favoriteColor = favoriteColor;
}

/**
 * 1. Use the Student constructor function to create variables
 * that represent you and your coding partner(s).
 */
var charles= new Student('Charles','blue');
var mathias= new Student('Mathias','green');
/**
  * 2. Create a function that takes one argument. That argument will
  * represent a single student object. The function will log the student's
  * name.
  */
function printOut(student){
  console.log(student.firstName);
}


/***** SWITCH PROGRAMMERS *****/

/**
  * 3. Create a function that takes one argument. That argument will
  * represent a single student object. The function will log the student's
  * favoriteColor.
  */
function colorOut(student){
  console.log(student.favoriteColor);
}
/**
  * 4. Put both students created in Step 1 into an array called students.
  */
var students = [charles, mathias];
/***** SWITCH PROGRAMMERS *****/

/**
 * 5. Loop over the students array and invoke both functions from Step 2 and
 * Step 3. You should see console logs for each students firstName and favoriteColor.
 */
 
 students.forEach(function(student){
   printOut(student);
   colorOut(student);
 })
