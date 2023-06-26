//function transportFee(shift){
//switch(shift){
 // case "morning":
   // return "R20";
    //break;
    //case "afternoon":
    //return "R10";
    //break;
    //case "nightshift":
    //return "free";
    //break;
  //default:
   // return "Oops Please enter a correct shift type";
    //break;
     //       }
//} 

function transportFee(shift){
    if(shift ==='nightshift'){
       return 'This shift is free of charge';
    }
      else if(shift === 'morning'){
      return 'Fee for the morning shift is R20';
      }
      
     else if (shift === 'afternoon'){
     return 'Fee for the afternoon shift  is R10';
     }
      else {
      return "Oops enter the correct shift";
      }
    
    }
    
  