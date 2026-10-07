
//1. primitive types
let myName:string= 'Rushi'

console.log(` myName is = ${myName} and typeof(myName) is ${typeof(myName)}` );


 let myAge: number= 23;

 let isActive: boolean= true;



 let userName : string;
 console.log(userName); 
 // output will be undefined that's why we are getting Compile time error on hovering the userName as Variable 'userName' is used before being assigned.ts(2454)



// here the function has return type as Void as function do not return anything so : Void should be written next to the function
 function doClickonBtn(btn1:string):void{
    
  console.log('Clicked');
 }


 let marks:number[] =[20,19,18]

 //you can also write in  Array<number> format


  let ankitaMarks: Array<number> = [20,19,18]

 let students: string[]= ['ankita','rushi', 'sheetal']

 let empId :(boolean|string | number)[] = ['emp101',101,true] // here meaning is in an array values can be either boolean,number or string


 //you can also write in  Array<string | number|boolean> format

  let Id :Array<string | number|boolean> = ['emp101',101,true]




// how to write object in ts

// earlier in jS we wrote

// let studentObj= {
//     name:'ankita',
//     age:23,
//     female:true
// }



let studentObj: {name:string, age:number, female :boolean}= 

{
    name:'ankita',
    age:23,
    female:true
}


// how to write tupple 
// tupple is nothing but array which has fixed order per its datatype mentioend

let browser:[string,number ,boolean] =  ['chrome',2.0,true]

 
//let mobile: Array<string,number ,boolean>=  ['chrome',2.0,true] this is wrong

// ENUMS : collection of constant values


enum myErrorsTypes{
    undefinedValues,
    badrequests,
    nodataFound,
    invalidValuesentered
}



 console.log(myErrorsTypes);
 
 console.log(myErrorsTypes.nodataFound);


 enum browsers {
    eg="edge",
    ch = "chrome",
    FF = "firefox",
   sf=  "safari"
 }

  console.log(browsers.FF);

    console.log(browsers);


interface abc {

comp:string
stdName: string,
mobile :number
}


 
gi
type bbc ={

    stdName: string,
mobile :number
}

let user2:bbc= {


    stdName: 'Rushi',
    mobile:13123
}