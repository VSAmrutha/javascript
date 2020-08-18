"use strict";
console.log("om");
const obj = {
  name: "lalitha",
  address: {
    street1: "universe",
    street2: "heaven",
  },
};
Object.setPrototypeOf(obj, { hello: "hi" });
let loopif = function (forobj, parent) {
  for (let x of Object.keys(forobj)) {
    //   console.log(x, typeof (x) )
    if (typeof forobj[x] == "object") {
      loopif(forobj[x], `${parent}_${x}`);
    }else{
        console.log(`${parent}_${x}_${forobj[x]}`);
    }
   
  }
};
loopif(obj, "god");
console.log(obj);
