


//Print 1 to 5
for(let i=0; i<=5; i++){
    console.log("Nitin Bhavate");
}

//Calculate sum of 1 to 5
let sum = 0;
for(let i=0; i<=100; i++){
    sum = sum + i;
}
console.log("sum = " , sum);

for(let i = 1; i <= 5; i++){
    console.log("i = ", i);
}

//while loop
let b = 1;
while( b <=10){
console.log("Samadhan Bhavate");
 b++;
}

//do while loop
let c= 2;
do {
    console.log("do while loop");
    c++;
} while (c <= 4);

//for-of loop  //
let d = "for of floop";
let size = 0;
for (let e of d) {
 console.log("e = ", e);
 size++;
}
console.log("string size = ", size);

//for-in Loop used in objects

let student = {
    name:"Priya Bhavate",
    age:25,
    cgpa:7.5,
    isPass: true,
};
for(let key in student){
    console.log("key=",key , "value=", student[key]);
}
    


   //Print all even numbers from 0 to 100
   for(let f=0; f<=100; f++){
    if(f%2===0){
     console.log("Even number is =", f);
    }
     //Print all odd numbers from 0 to 100
    if(f%2!==0){     
    console.log("Odd number is =", f);
    }
   }
 

   
//Create a game where you start with any rendom game number.Ask the user to keep guessing the game number util the user enters correct value 

let gameNum = "25";
let userNum = prompt("Guess the game number: ");

while (userNum != gameNum) {
userNum = prompt("You entered wrong number. Guess again : ");
}
console.log("congratulation you are entered the right number");



//String
//string is a sequence of characters used to represent text
let str4 = "ApnaCollege";
let str5 = "Nitin Samadjhan Bhavate";

let stu ={
    name:"Nitin",
     age:32,
     professional:"Software Engineering"
}
//Template Literals -
let output = `Name of student ${stu.name} age is ${stu.age} professional is ${stu.professional}  `;
//console.log("Name of student =",stu.name, "age is =" ,stu.age, "professional is =", stu.professional);
console.log(output);

 
//String method

let str ="Nitin Samadhan Bhavate";
let str2 ="Priya Nitin Bhavte"
  console.log(str.toUpperCase());
 console.log(str.toLowerCase());
 console.log(str.trim());
 console.log(str.slice(0,6));
console.log(str.concat(str2));
console.log(str.replace("B","T"));
console.log(str.replaceAll("a", "d"))
console.log(str.charAt(0));


let fullname = prompt("enter full name without splaces");
let username ="@"+fullname+fullname.length;
console.log(username);
