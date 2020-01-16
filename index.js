const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let win = record.find(function(year) {
    return year["result"] === "W"
  })
  if(typeof(win) !== "undefined") {
    return win.year
  } else {
    return win
  }
}