//q1 start

let x=-9*3;
alert(x);
let v="value is "+50;
alert(v);
v=17%5;
alert(v);
v=5/10;
alert(v);
v=(4==4);
alert(v);
v=(4!=4);
alert(v);
x=5.5;
alert(Math.ceil(x)-Math.floor(x));
//q1 end

//q2 start
x=prompt("enter a number ");
alert(x);
//q2 end


//q3 start
let num1=prompt("enter a number one ");
let num2=prompt("enter a number two ");
if(num1 <num2){

    alert("ascending order is"+ num1  +" "+num2);
}
else{
    alert("ascending order is"+ num2  +" "+num1);
}
// //q3 end

//q4 start

let n1=prompt("enter a number one ");
let n2=prompt("enter a number two ");
if(n1>n2){

    alert( n1 +" is large than "+n2);
}
else if(n2>n1){
    alert( n2  +" is large than  "+n1);
}
//end q4


//q5 start
let n3=prompt("enter a number one ");
let n4=prompt("enter a number two ");
let sum=n3+n4;
alert(sum);
//convert string to integer 
n3=parseInt(n3);
n4=parseInt(n4);
sum=n3+n4;
alert(sum);
//q5 end


//q6 start

let number=prompt("enter a number");
if(number==1){
    alert("one");
}
else if(number==2){
    alert("TWO");
}
else if(number==3){
    alert("THREE");
}
 else if(number==4){
    alert("FOUR");
}
else if(number==5){
    alert("FIVE");
}
else if(number==6){
    alert("SIX");
}
else if(number==7){
    alert("SEVEN");
}
else if(number==8){
    alert("EIGHT");
}
else if(number==9){
    alert("NINE");
}
else{
    prompt("PLEASE TRY AGAIN");
}
