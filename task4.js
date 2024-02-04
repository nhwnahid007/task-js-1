function longestWord(sentence1){

let wordLength=[];
let w='';
const words=sentence1.split(" ");
for(let word of words){
    if(word.length>wordLength){
        wordLength=word.length;
        w=word;
        
    }
}
return w;
}

const sentence="I am learning Programming to become a programmer"

const printSentence=longestWord(sentence)

console.log(printSentence);