const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let r = record.find(r => { return r.result === "W" })
  if (r) {
    return r.year
  }
  return r
}
