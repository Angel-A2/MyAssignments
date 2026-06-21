

const browserName = "Chrome";


function getBrowserName() {


    if (browserName === "Chrome") {


        var browserNameVar = "Edge";

     
        let browserNameLet = "Firefox";

        console.log("Inside block (var):", browserNameVar);
        console.log("Inside block (let):", browserNameLet);
    }

    
    console.log("Outside block (var):", browserNameVar); 
    console.log("Outside block (let):", typeof browserNameLet);
}


getBrowserName();
