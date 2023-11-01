//program to add two numbers with dom
//with validations

function add() {  
var numberFisrt=document.getElementById("number1").value;   //input  values with validation
var numberSecond=document.getElementById("number2").value;   // input values with validation
var a= parseFloat(numberFisrt);
var b= parseFloat(numberSecond);

 var data= a + b;
 
 if(isNaN(a && b))
 {
	 document.getElementById('mylocation').innerHTML=`please enter the valid number`;  
document.getElementById("mylocation").style.color = "red"; 

 }
 else{
document.getElementById('mylocation').innerHTML=`The sum of  ${ numberFisrt}  and  ${ numberSecond}  is :`+"  "+data;  
document.getElementById("mylocation").style.color = "green"; 

 }
 }  