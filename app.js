// Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var positiveInteger = prompt("Enter a positive integer ");
// var num = Number(positiveInteger);
// var roundOffValue = Math.round(num);
// var floorValue = Math.floor(num);
// var ceilValue = Math.ceil(num);
// document.write(" number : " + num + "<br>" +" round off value : " + roundOffValue + "<br>" +  " floor value : " + floorValue +"<br>" + " ceil value : " + ceilValue);

// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var negativeFloatingPoint = prompt(" Enter a negative floating value ");
// var num = Number(negativeFloatingPoint);
// var roundOffValue = Math.round(num);
// var floorValue = Math.floor(num);
// var ceilValue = Math.ceil(num);
// document.write(" number : " + num + "<br>" +" round off value : " + roundOffValue + "<br>" +  " floor value : " + floorValue +"<br>" + " ceil value : " + ceilValue);

// Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var number = prompt(" Enter any negative number : ");

// var absolute = Math.abs(number);
// document.write(" The absolute value of " + number + " is " + absolute);

// Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.:

// var diceUsingRandom = (Math.round()*2)+2;
// var numberForm  = Math.floor(diceUsingRandom);

// var bigDecimal = ((Math.random()*6)+1);
// var numberOfStars = Math.ceil(bigDecimal);
//  document.write(" Random dice value : " + numberOfStars );

// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var coinValue = ((Math.random()*2)+1);
// var num = Math.floor(coinValue);
// if(num === 2){
    
//     document.write(num+ " <br>"+" Random coin value : Heads" + " <br>");
 
// }
// if(num === 1){
//     document.write(num+ " <br>"+" Random coin value : Tails" + " <br>");
 
// }

// 6. Write a program that shows a random number between 1 
// and 100 in your browser.

// var randomNumber = ((Math.random()*100)+1);
// var floor = Math.ceil(randomNumber);
// document.write(" Random number between 1 and 100 : " + floor);

// Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var user  = prompt(" Enetr your weigth in kilograms ");
// var num = Number(user);
// document.write("The weight of user is "+num+" kilograms");

// Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.

// var secretNumber = ((Math.random()*10)+1);
// var floor = Math.floor(secretNumber)

// var user  = prompt(" Enter a number between 1 and 10 ");
// var num = Number(user);
// if(num == floor){
//     document.write(" Congratulate ")

// }
// else{
//     document.write(" Try Again !")
// }
