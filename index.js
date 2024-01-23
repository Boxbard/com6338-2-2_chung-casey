// Your code here
function greet() {
    var name = window.prompt("What is your name?");
    // user returns a string - display a message using the alert() method
    alert("Hello, " + name);

    // convert the given age from a string to a number
    var age = window.prompt("How old are you?");
    console.log(parseInt(age));

    // confirm method
    var currentYear = new Date().getFullYear();
    var birthdayPassed = (currentYear - age);
    var birthdayNotPassed = (currentYear - age - 1);

    if (confirm("Have you had a birthday this year?")) {
        alert("Is your birthday in " + birthdayPassed + "?");
    } else {
        alert("Your birthday is on " + birthdayNotPassed + "?");
    }
}