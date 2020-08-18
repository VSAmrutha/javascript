let user={
    name:"Amu",
    address:{
        personal:{
            city: "Bengaluru",
            State:"Karnataka"
        },
        office:{
            city:"Bengaluru",
            area:{
                landmark:"KTPO"
            }
        }
    }
}

let finalObj={}

let magic=(obj,parent)=>{
    
    for(let key in obj){
        console.log(key)
       if( typeof(obj[key])==="object"){
     
        magic(obj[key],`${parent}_${key}`)
       }
       else{
           
         finalObj[parent+"_"+key]=obj[key]
        console.log(finalObj)
       }
    }
}
magic(user,"user")