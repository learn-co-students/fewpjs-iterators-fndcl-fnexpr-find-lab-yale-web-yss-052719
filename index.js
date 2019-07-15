const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  let game = record.find(function(e) {
    debugger 
    return e.result === "W"
   }) 
   if (game) { return game.year } 
  }
