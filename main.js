const findTheOldest = function(arayObj) {
    arayObj.reduce((acc,cur)=>{
        acc+=cur;
    },arayObj[0])
    console.log(arayObj);
    };
    

    findTheOldest([1,2,3,4]);
    // Do not edit below this line

    