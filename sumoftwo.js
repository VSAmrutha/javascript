// 1. Sum of elements between a and b
function sum(a,b){
    let max=a>b? a:b;
    let min=a<b? a:b;
    let total=0;
    for(let i=max;i>=min;i--){
        total+=i
       
    }
    return total;
}
console.log("sum of all",sum(6,2))
// 2. unique elements in two array, no repeat elements
const diffArray=(arr1,arr2)=>{
    let diffNewArray=[];
    let union=[];
    for(let ele of arr1){
        if(!union.includes(ele)){
            union.push(ele)
        }
    }
    for(let ele of arr2){
        if(!union.includes(ele)){
            union.push(ele)
        }
    }
    for(let currentEl of union){
        if(arr1.includes(currentEl) && !arr2.includes(currentEl)){
            diffNewArray.push(currentEl)
        }else if(!arr1.includes(currentEl) && arr2.includes(currentEl)){
            diffNewArray.push(currentEl)
        }
    }
    return diffNewArray;

}
console.log("diffArray",diffArray([1,2,3,8,4,5,9],[1,2,3,5]))
// 2.1 using Set instead of above method
const diffArraySet=(arr1,arr2)=>{
    let diffNewArray=[];
    let union=new Set([...arr1,...arr2])
    //Set is array like a object but not an array, to covert Set we can use unionArr=[...union]
    // or use Array.from(union). Thats why we spresding the array in []
    for(let currentEl of union){
        if(arr1.includes(currentEl) && !arr2.includes(currentEl)){
            diffNewArray.push(currentEl)
        }else if(!arr1.includes(currentEl) && arr2.includes(currentEl)){
            diffNewArray.push(currentEl)
        }
    }
    return diffNewArray;

}
console.log("diffArraySet",diffArraySet([1,2,3,8,4,5,9],[1,2,3,5]))