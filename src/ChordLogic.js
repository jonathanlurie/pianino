import Piano88KeyLogic from './Piano88KeyLogic'


// https://pianoin21days.com/basics-chord-inversions/
// Seventh chords: https://www.musictheory.net/lessons/45
// https://www.musictheory.net/lessons/47

const triads = {
  'major': [
    [0, 4, 7], // standard, no invertion
    [12, 4, 7], // 1st inversion
    [12, 16, 7] // 2nd inversion
  ],

  'minor': [
    [0, 3, 7], // standard, no invertion
    [12, 3, 7], // 1st inversion
    [12, 15, 7] // 2nd inversion
  ],

  'augmented': [
    [0, 4, 8],  // standard, no invertion
    [12, 4, 8], // 1st inversion
    [12, 16, 8] // 2nd inversion
  ],

  'diminished': [
    [0, 3, 6],  // standard, no invertion
    [12, 3, 6], // 1st inversion
    [12, 15, 6] // 2nd inversion
  ]
}

const sevenths = {
  'major': [ // 'M7' = major triad + major 7th
    [0, 4, 7, 11],   // standard, no invertion
    [12, 4, 7, 11],  // 1st inversion
    [12, 16, 7, 11], // 2nd inversion
    [12, 16, 19, 11] // 3rd inversion
  ],

  'dominant': [    // '7' = major triad + minor 7th
    [0, 4, 7, 10],   // standard, no invertion
    [12, 4, 5, 10],  // 1st inversion
    [12, 16, 5, 10], // 2nd inversion
    [12, 16, 17, 10] // 3rd inversion
  ],

  'augmented': [
    [0, 4, 8, 11], // 'aug7' = augmented triad + major 7th
    [12, 4, 8, 11],  // 1st inversion
    [12, 16, 8 11],  // 2nd inversion
    [12, 16, 20, 11] // 3rd inversion
  ],

  'half-diminished': [ // '⌀7' = diminished triad + minor 7th
    [0, 3, 6, 10],   // standard, no invertion
    [12, 3, 6, 10],  // 1st inversion
    [12, 15, 6, 10], // 2nd inversion
    [12, 15, 18, 10] // 3rd inversion
  ],

  'diminished': [ // 'o7' = diminished triad + diminished 7th
    [0, 3, 6, 9],   // standard, no invertion
    [12, 3, 6, 9],  // 1st inversion
    [12, 15, 6, 9], // 2nd inversion
    [12, 15, 18, 9] // 3rd inversion
  ]
}

class ChordLogic {

  /**
   * Get the list of available triad chords
   * @return {Array} list of names for the available triads
   */
  static getAvailableTriads(){
    return Object.keys(triads)
  }


  /**
   * Get the list of the available seventh chords
   * @return {[type]} [description]
   */
  static getAvailableSeventhChords(){
    return Object.keys(sevenths)
  }


  /**
   * [getSeventhChord description]
   * @param  {[type]} rootKey       [description]
   * @param  {[type]} chordName     [description]
   * @param  {Number} [inversion=0] [description]
   * @return {[type]}               [description]
   */
  static getSeventhChord(rootKey, chordName, inversion=0){
    if(!(chordName in sevenths))
      return null

    if(inversion < 0 || inversion > 4)
      return null

    let rootPosition = Piano88KeyLogic.getIndex(rootKey)

    if(rootPosition === null)
      return null

    let chord = sevenths[chordName][inversion]
      .map(index => index + rootPosition)
      .map(index => Piano88KeyLogic.getName(index))

    if(chord.includes(null))
      return null

    return chord
  }


}


export default ChordLogic
