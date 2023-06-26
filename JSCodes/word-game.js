function longestWord(str) {
	var words = str.split(" ")
    var longWord = ""
    for (const word of words) {
    if (word.length >= longWord.length) {
    longWord = word};

    if (!str) {
        return "Please Enter sentence"
    };
    } return 'The longest word is: ' + longWord 
}

function shortestWord(str) {
var words = str.split(' ')
var shortWord = words[0]
for (const word of words) {
    if (word.length <= shortWord.length) {
    shortWord = word};

    if (!str) {
    return "Please Enter sentence"
    };
    } return 'The shortest word is: ' + shortWord
}

function wordLengths(str) {
	var sum = 0
    var lengths = str.split(' ').map(a=> a.length)
    for (var i=0; i<lengths.length; i++) {
    sum += lengths[i];

    if (!str) {
        return "Please Enter sentence"
    };
    } return 'Sum of the alphabets is: ' + sum
}

// function  longestWord(str){
//     let newList = str.split(' ');
//       var longstr = " " ;
//       var len = 0;
//         for(let item of newList){
  
//             if(item.length>=len){
//               len=item.length;
//               longstr = item;
//               // console.log(longstr);
//             } 
//         }
//       return longstr;
//     } 
  
//     function  shortestWord(str){
//     let newList = str.split(' ');
//       let shortstr = newList[0];
//         for(let item of newList){
//             if(item.length !==0 && item.length<=shortstr.length ){
//                 shortstr = item;
//               //console.log(shortstr);
//               } 
//           }
//       return shortstr;
//     }
  
//     function wordLengths(str){
//       let newList = str.split(' ').join().replaceAll(',', '');
//       //let newList = str.join().replaceAll(',', '');
//       var count = 0;
//           for(let item of newList){
              
//               count++;
//            // console.log(newList);
            
//           }
//       return count
//     }
   
  
  