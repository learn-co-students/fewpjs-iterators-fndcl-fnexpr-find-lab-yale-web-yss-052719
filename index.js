// const testVar = {}

// function testFunc() {
//   return "hi"
// }

function superbowlWin(record) {
  if (record.find(x => x.result === "W") != undefined) {
    return record.find(x => x.result === "W").year;
  } else {
    return undefined;
  }
  
}
