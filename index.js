const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const result = array.find(object => {
    return object.result === "W"
  })
  if (result) {
    return result.year
  }
}
