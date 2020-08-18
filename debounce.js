const clickHandler=(arg)=>{
    console.log("hi",arg)
}
const debounce=(fn,delay)=>{
    let timeoutID;
    return (...args)=>{
        if(timeoutID){
            clearTimeout(timeoutID)
        }
       timeoutID= setTimeout(()=>{
            fn(...args)
        },delay)
    }
}
const betterFunction=debounce(clickHandler,2000)