
document.querySelector("#grandparent").addEventListener("click",(e)=>{
    console.log("grandparent clicked")
    // e.stopPropagation();
},false)
document.querySelector("#parent").addEventListener("click",(e)=>{
    console.log("parent clicked")
    // e.stopPropagation();
},false)
document.querySelector("#child").addEventListener("click",(e)=>{
    console.log("child clicked")
     e.stopPropagation();
},false)


//true=>capturing(or trickling)
//false=>bubbling
//capturing comes first
