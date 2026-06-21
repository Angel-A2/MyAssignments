

let genderType = "female";


function printGender() {

    
    let color = "brown";

    
    if (genderType.startsWith("female")) {

        
        var age = 30;              
        let color = "pink";        

        console.log("Inside if-block color:", color);  
    }

   
    console.log("Outside if-block age:", age);         
    console.log("Function color:", color);             
}

printGender();
console.log("Global genderType:", genderType);

genderType = "male";
console.log("\nAfter changing genderType to male:\n");

printGender();
console.log("Global genderType:", genderType);
