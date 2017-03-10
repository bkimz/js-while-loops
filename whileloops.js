//problem 1) print all numbers between -10 and 19

//problem 2) print all even numbers between 10 and 40

//problem 3) print all odd numbers between 300 and 333

//problem 4) print all nubmers divisible by 5 AND 3 between 5 and 50


//problem 1 answer

var counter = -10;

while(counter < 20){
	console.log(counter);
	counter ++;
}

//problem 2 answer

var counterP2 = 10;

while(counterP2 <= 40){
console.log(counterP2);
counterP2 +=2;
}

//problem 3 answer
var counterP3 = 300;
while(counterP3 <= 333){
	if(counterP3 % 2 !== 0){
		console.log(counterP3);
	}
	counterP3++;
}

//problem 4 answer

var counterP4 = 5;

while(counterP4 <= 50){
	if(counterP4 % 3 === 0 && counterP4 % 5 === 0){
		console.log(counterP4);
	}
	counterP4++;
}