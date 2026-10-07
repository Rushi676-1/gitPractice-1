

//optional Paramter with Default Value

// so here we do not need to write ? question mark for optional paramter ,
// as we are defiing default value.
//rule will be default parameter comes after required parameters
// but there is no need mentioned a special condition if default para. is provided

function calculateDiscount(amount:number, discount=0)
{

return amount- (amount* discount)/100

}

// look for the diffrence here in both function

// recomemded way of writting is getCalculateDiscount



function getCalculateDiscount(amount:number, discount:number=0)
{

return amount- (amount* discount)/100

}

console.log(getCalculateDiscount(100,5));