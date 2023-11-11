/* Write a function which will select a random name from a list of names.
the person selected will have to pay for everybody's foodbill; Example of input 
["Destiny", "Rina", "Chidex", "Lara", "Jidenna"]. 
Output:- Random Name is going to buy lunch today*/


function whosPaying(names) {
    var numberOfPeople = names.length;
    var randomPersonPosition = math.floor(math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!"
    
}



