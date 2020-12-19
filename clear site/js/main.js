// function expandedForm(num) {
//    let nString = num.toString();
//    for (let i = 0; i < nString.length; i++) {
//       if (nString.length != 1) {
//          nString += '0'
//       } else {
//          nString += nString[i]
//       }
//    }
//    console.log(nString)
// }
// expandedForm(42)



function expandedForm(num) {
   let nString = num.toString();
   let str = ''
   for (let i = 0; i <= nString.length; i++) {
      if (i === 1) {
         str += nString[i];
      }
      else {
         str = str + '0';
      }
   }
   console.log(str);
}
expandedForm(42)
