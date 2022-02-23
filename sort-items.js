/* sorting items inside of an array*/

const items = ["eat","tea","tan","ate","nat","bat"]

function sortItems(arr){

  sorted = arr.map(el=>{
    return el.split("").sort().join("")
  })
  
  
  return sorted.sort()
}

console.log(items,"\n--->",sortItems(items))
