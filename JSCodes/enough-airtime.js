function enoughAirtime(str,p){
	let listNew = str.split(',');
  	var cost = 0;
    for(let item of listNew){
    if(item.trim() == 'sms'){
      cost += 0.75;
       }
        else if(item.trim() == 'call'){
        cost += 1.88;
        }
        else if(item.trim() == 'data'){
          cost += 12;
        } 
    }
    if(p-cost>0){
    return "R"+(p-cost).toFixed(2);
    }else{
      cost = 0;
      return "R"+ cost.toFixed(2);
    }
} 
console.log(enoughAirtime('call,call,call,data,sms,sms,call,data', 50));
















// function enoughAirtime(usage, airtime) {

//     let total = 0
//     const totalUsage = usage.split(",");

//     for (let i = 0; i < totalUsage.length; i++) {
//         const currentUsage = totalUsage[i].trim()
//         if (currentUsage.startsWith('s')) {
//             total += 0.75
//         }

//         else if (currentUsage.startsWith('d')) {
//             total += 12
//         }

//         else if (currentUsage.startsWith('c')) { total += 1.88 }

//         else {total += 0.00}
//     }
//     var result = airtime - total
//     var diff = (total > airtime) ? "R0.00" : 'R' + result.toFixed(2)
//     return diff
// }