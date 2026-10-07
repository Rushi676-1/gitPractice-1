


// one way to write objects data types of its properties


let employeeObject : {name:string,age:number,female:boolean, occupation:string} = {

name: 'ankita',
age:23,
female:true,
occupation: 'QA',

}

//=========================




type manager ={ 
    // you can call this as Schema or contract  

    name: string,
age:number,
female:boolean,
occupation:string,
married?:string // this is optional parameter
}

let managerObject : manager = {

name: 'ankita',
age:35,
female:true,
occupation: "Vice president in CITI"
}

console.log(managerObject)