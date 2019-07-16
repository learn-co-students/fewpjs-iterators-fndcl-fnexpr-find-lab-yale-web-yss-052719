const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
  const res = arr.find(function(obj){
    return obj["result"] === "W"
  })
  if (res){
    return res.year
  }
}