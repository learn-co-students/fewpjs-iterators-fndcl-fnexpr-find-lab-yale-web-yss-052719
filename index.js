const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let win = array.find(obj => {
    obj.result === "W"
  })
  if (win) {
    win.year
  }else {
    "undefined"
  }
    
}