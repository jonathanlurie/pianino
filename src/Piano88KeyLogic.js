
const keyList = ['a0', 'b0f', 'b0', 'c1', 'd1f', 'd1', 'e1f', 'e1', 'f1', 'g1f', 'g1', 'a2f', 'a2', 'b2f', 'b2', 'c2', 'd2f', 'd2', 'e2f', 'e2', 'f2', 'g2f', 'g2', 'a3f', 'a3', 'b3f', 'b3', 'c3', 'd3f', 'd3', 'e3f', 'e3', 'f3', 'g3f', 'g3', 'a4f', 'a4', 'b4f', 'b4', 'c4', 'd4f', 'd4', 'e4f', 'e4', 'f4', 'g4f', 'g4', 'a5f', 'a5', 'b5f', 'b5', 'c5', 'd5f', 'd5', 'e5f', 'e5', 'f5', 'g5f', 'g5', 'a6f', 'a6', 'b6f', 'b6', 'c6', 'd6f', 'd6', 'e6f', 'e6', 'f6', 'g6f', 'g6', 'a7f', 'a7', 'b7f', 'b7', 'c7', 'd7f', 'd7', 'e7f', 'e7', 'f7', 'g7f', 'g7', 'a8f', 'a8', 'b8f', 'b8', 'c8']

const keyLocation = {} // {'a0': 0, 'b0f': 1, ...}
keyList.forEach((k, i) => keyLocation[k] = i)

console.log(keyList)
console.log(keyLocation)

class Piano88KeyLogic {


  /**
   * Get the index of a key, given its name
   * @param  {string} refKey - name of a key
   * @return {number} position o the key on the keyboard (firt is 0)
   */
  static getIndex(refKey){
    console.log('refKey', refKey);
    if(!(refKey in keyLocation))
      return null

    return keyLocation[refKey]
  }


  /**
   * Get the name of a key given its position on the keyboard
   * @param  {number} keyPosition - the position of the key on the 88 keyboard (starting at 0)
   * @return {string} name of the key
   */
  static getName(keyPosition){
    if(keyPosition<0 || keyPosition>= keyList.length)
      return null

    return keyList[keyPosition]
  }


  /**
   * Get a neighbor key from a reference one
   * @param  {string} refKey - name of the reference key (ie. 'c4')
   * @param  {Number} distance - distance from the reference key (positive or negative)
   * @return {string|null} the name of the neighboring key. Returns null if out of keyboard
   */
  static getNeighbor(refKey, distance=1){
    if(!(refKey in keyLocation))
      return null

    let positionRef = keyLocation[refKey]
    let positionNeighbor = positionRef + distance

    if(positionNeighbor < 0 || positionNeighbor >= keyList.length)
      return null

    return keyList[positionNeighbor]
  }


  /**
   * Get the flat version of a key
   * @param  {string} refKey - key to get the flat of
   * @return {string} the flat version of refKey
   */
  static flatten(refKey){
    return Piano88KeyLogic.getNeighbor(refKey, -1)
  }


  /**
   * Get the sharp version of a key
   * @param  {string} refKey - key to get the sharp of
   * @return {string} the sharp version of refKey
   */
  static sharpen(refKey){
    return Piano88KeyLogic.getNeighbor(refKey, 1)
  }



}

export default Piano88KeyLogic
