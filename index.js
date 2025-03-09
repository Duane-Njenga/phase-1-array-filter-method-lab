// Code your solution here

const names = ["Alex", "Jordan", "Taylor", "Morgan", "Casey",];


function findMatching(array, str) {
    let matches = array.filter(element => element.toLowerCase() === str.toLowerCase());
    return matches;
}

function fuzzyMatch(array, str){
   return array.filter(element => element.startsWith(str));; 
}

function matchName(array, str){
    return array.filter(driver => driver.name === str);  

}



console.log(matchName(names, "Alex"));
