function isOldEnoughToDrink(age){
    // your code here	
    if (age >= 21){
        console.log("let's go to drink!")
        return true
    }else{
        console.log("Get out of here!")
        return false
    }
}

isOldEnoughToDrink(18);