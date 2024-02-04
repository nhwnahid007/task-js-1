function vowelCount(str){
    let count=0;
    for(let arr of str){
        if(arr=='a'||arr=="e"||arr=="i"||arr=="o"||arr=="u"){
            count++;
        }
    }
    return count++;
}

const string="Nahid";

const str1=string.toLocaleLowerCase();

const vowel=vowelCount(str1);

console.log(vowel);



