const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  const correctResult = array.find(function(object){
    return object.result === "W"
  })
  if (correctResult) {
    return correctResult.year
  }
}
