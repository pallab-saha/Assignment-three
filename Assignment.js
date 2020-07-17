function feetToMile(feet) {
    if(0<=feet){
        var mile = feet/5280;
        return mile;
    }
    else{
        console.log("Distance can not be negetive, Try Again");
    }

}
var resultOne = feetToMile(1);
console.log("It's converted to",resultOne,"mile");
var resultTwo = feetToMile(15000);
console.log("It's converted to",resultTwo,"mile");
var resultThree = feetToMile(-12);




function woodCalculator(chair, table, bed) {
    var woodForChair = 1*chair;
    var woodForTable = 3*table;
    var woodForBed = 5*bed;
    var totalWood = woodForChair + woodForTable + woodForBed;
    return totalWood;
}

result = woodCalculator(1, 1, 1);
console.log("You need ", result, "qubic feet wood");
resultForBigFamily = woodCalculator(14, 5, 12);
console.log("You need ", resultForBigFamily, "qubic feet wood");




function brickCalculator(floor) {
    var totalFeet;
    var totalBrick;
    if(floor<=10){
        totalFeet = floor * 15;
        totalBrick = totalFeet * 1000;
    }
    else if(floor>10 && floor<=20)
    {
        totalFeet = (10*15) + (floor-10)*12;
        totalBrick = totalFeet * 1000;
    }
    else{
        totalFeet = (10*15) + (10*12) + (floor-20)*10;
        totalBrick = totalFeet * 1000;
    }

    return totalBrick;

}

var brickCalculation = brickCalculator(7);
console.log(brickCalculation);
var brickCalculationTwo = brickCalculator(12);
console.log(brickCalculationTwo);
var brickCalculationThree = brickCalculator(32);
console.log(brickCalculationThree);




function tinyFriend(friends) {
    var min=100;
    var name=[];
    for (var i = 0; i<friends.length; i++){
        var noOfLetter=friends[i].length;
        if(noOfLetter<=min){
            min=noOfLetter;
            var test=friends[i];
        }
    }
    name.push(test);

    return name;
}
console.log(tinyFriend(['Sajuji', 'Jahid', 'Pallab', 'Majedul','Moahiminul',]))
