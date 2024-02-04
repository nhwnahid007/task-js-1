function arrayNumber(arr1,arr2){
    let count=0;
    for (let arr of arr1){
        if(arr==arr2){
            count++;
        }
        
    }
    return count;
}
const select=25;

const arrElement=[5,6,11,12,98,5];
const countArr=arrayNumber(arrElement);
console.log(countArr);


// const arrElement1=[5,5,6,11,12,98,5];

// const selected =5;
// let count=0;

// for(let arrX of arrElement1){
//     if(arrX == selected){
//         count++
//     }
// }

// console.log(count);