const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let element = record.find(function(e){
    return e.result === "W" 
  })
  return element ? element.year : element
}