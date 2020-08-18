document.querySelector("#category").addEventListener("click",(e)=>{
    console.log("category parent clicked",e.target.id)
    if(e.target.tagName=="li"){
        window.location.href=`/${e.target.id}`
        //this check is needed to avoid any click redirection if any items exists in li tag
    }
    
})
document.querySelector("#form").addEventListener("keyup",(e)=>{
    console.log("form clicked",e.target)
    if(e.target.dataset!==undefined){
        e.target.value=e.target.value.toUpperCase();
    }
    
})
