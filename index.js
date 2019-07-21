const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
	const found = array.find(function(obj) {
		return obj.result === "W"
	})

	if (found) {
		return found.year
	} else {
		return found
	}
}