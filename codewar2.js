//https://www.codewars.com/kata/52efefcbcdf57161d4000091 

function count(string) {

    if (string === '') {
        return {};
    }

    let result = {};
    for(let i = 0; i < string.length; i++) {
       let charc = string.charAt(i);
         if(result[charc]) {
              result[charc]++;
         } else {
              result[charc] = 1;
         }
    }

    return result;
    
}