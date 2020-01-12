const testVar = {}





function superbowlWin(array) {


  const thing = array.find( function(e){
    return e.result === "W"
  })
  if (thing != null) {
    return thing.year
  }
  else {
    return undefined
  }

}
