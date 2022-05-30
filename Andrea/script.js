/* function returncrystal(number_childrens, partners_name, location, job_title) {
    number_childrens = 3;
    partners_name = 'Agatha';
    location = 'Vienna';
    job_title = 'Chef';

    console.log("You will be a " + job_title + " in " + location + " and married to " + partners_name + " with " + number_childrens + " children.");
}

returncrystal();

function ageCalculator(currentYear, yearOfBirth) {
    return currentYear - yearOfBirth;

}
var myAge = ageCalculator(2022, 1966);
console.log("You are " + myAge + " years old");

var area = (function() {
        var width = 15;
        var height = 15;

        return width * height;
    }
    ());

var volume = (function() {
        var depth = 15;
        return area * depth;
    }
    ());

console.log("The area of the box is: " + area + " The volume of the box is: " + volume);

function degreestorad(degrees) {
    return degrees * (Math.PI / 180);
}

var result = degreestorad(35);
console.log(result);

function capiFirstLetter(str) {
    let firstLetter = str[0].toUpperCase();
    console.log(firstLetter + str.slice(1));

}
capiFirstLetter("i am a webdeveloper");



var sum = (function() {
    var mathe = 3;
    var phy = 5;
    var eng = 2;
    return mathe + phy + eng;
}());
console.log(sum);

var average = (function() {
    return sum / 3;
})();
console.log(average);*/


var balance = 100.0;

function get_balance() {
    alert('Your current balance is: ' + balance);
    atm();
}

function make_deposit() {
    var deposit = parseFloat(prompt('How much would you like to deposit?'));
    if (isNaN(deposit) || deposit === '') {
        alert('Error: please enter a number!');
        make_deposit();
    } else {
        balance += deposit;
        get_balance();
    }
}

function make_withdrawal() {
    var withdrawal = parseFloat(prompt('How much would you like to withdrawal?'));
    if (isNaN(withdrawal) || withdrawal === '') {
        alert('Error: please enter a number!');
        make_withdrawal();
    } else {
        balance -= withdrawal;
        get_balance();
    }
}

function error() {
    alert('Error: accepted numbers are 1 through 4.');
    atm();
}

function exit() {
    var confirm_leave = confirm('You have selected exit.');
    if (confirm_leave) {
        window.close();
    } else {
        atm();
    }
}

function atm() {

    var choice = parseInt(prompt('Select a choice 1.) Balance 2.) Deposit 3.) Withdrawal 4.) Exit'));

    if (choice === 1) {
        get_balance();
    } else if (choice === 2) {
        make_deposit();
    } else if (choice === 3) {
        make_withdrawal();
    } else if (choice === 4) {
        exit();
    } else {
        error();
    }
}

atm();