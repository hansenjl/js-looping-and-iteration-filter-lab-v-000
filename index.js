// Code your solution in this file
function findMatching(array,name){
  return array.filter(string => string.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(array,name){
  return array.filter(string => string.toLowerCase().split().splice(2) === name.toLowerCase().split().splice(2))
}

function matchName(){
  
}