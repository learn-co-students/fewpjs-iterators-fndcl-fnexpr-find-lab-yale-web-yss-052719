const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let win = array.find(obj => {
    return obj.result === "W"
  })
  if (typeof win!== "undefined") {
    return win.year
  } else {
    return win
  } 
}