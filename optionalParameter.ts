

// optional parameter

function getBilling(foodBill:number,tax?:number){

if(tax){
  console.log(foodBill+ tax);
}
  
else{
   console.log(foodBill);
}
}





getBilling(100,11);

// Rule 1: Optional paramter should be written with question mark 
// Rule 2 : optional paramter shoulbe mentioned at the last i.e. after required parameter

// Rule 3: Just remembe there must be a condtion should be mentioned



