import Piano88KeyLogic from './Piano88KeyLogic'


// https://pianoin21days.com/basics-chord-inversions/
// Seventh chords: https://www.musictheory.net/lessons/45
// https://www.musictheory.net/lessons/47

const chords = [
  {
    name: 'major triad',
    intervals: [
      [0, 4, 7],  // standard, no invertion
      [12, 4, 7], // 1st inversion
      [12, 16, 7] // 2nd inversion
    ]
  },

  {
    name: 'minor triad',
    intervals: [
      [0, 3, 7],  // standard, no invertion
      [12, 3, 7], // 1st inversion
      [12, 15, 7] // 2nd inversion
    ]
  },

  {
    name: 'augmented triad',
    intervals: [
      [0, 4, 8],  // standard, no invertion
      [12, 4, 8], // 1st inversion
      [12, 16, 8] // 2nd inversion
    ]
  },

  {
    name: 'diminished triad',
    intervals: [
      [0, 3, 6],  // standard, no invertion
      [12, 3, 6], // 1st inversion
      [12, 15, 6] // 2nd inversion
    ]
  },

  {
    name: 'major seventh',
    intervals: [       // 'M7' = major triad + major 7th
      [0, 4, 7, 11],   // standard, no invertion
      [12, 4, 7, 11],  // 1st inversion
      [12, 16, 7, 11], // 2nd inversion
      [12, 16, 19, 11] // 3rd inversion
    ]
  },

  {
    name: 'dominant seventh',
    intervals: [       // '7' = major triad + minor 7th
      [0, 4, 7, 10],   // standard, no invertion
      [12, 4, 5, 10],  // 1st inversion
      [12, 16, 5, 10], // 2nd inversion
      [12, 16, 17, 10] // 3rd inversion
    ]
  },

  {
    name: 'augmented seventh',
    intervals: [
      [0, 4, 8, 11],   // 'aug7' = augmented triad + major 7th
      [12, 4, 8, 11],  // 1st inversion
      [12, 16, 8, 11],  // 2nd inversion
      [12, 16, 20, 11] // 3rd inversion
    ]
  },

  {
    name: 'half-diminished seventh',
    intervals: [       // '⌀7' = diminished triad + minor 7th
      [0, 3, 6, 10],   // standard, no invertion
      [12, 3, 6, 10],  // 1st inversion
      [12, 15, 6, 10], // 2nd inversion
      [12, 15, 18, 10] // 3rd inversion
    ]
  },

  {
    name: 'diminished seventh',
    intervals: [      // 'o7' = diminished triad + diminished 7th
      [0, 3, 6, 9],   // standard, no invertion
      [12, 3, 6, 9],  // 1st inversion
      [12, 15, 6, 9], // 2nd inversion
      [12, 15, 18, 9] // 3rd inversion
    ]
  }
]

const chordIndex = {}
chords.forEach((c, i) => chordIndex[c.name] = i)


class ChordLogic {

  /**
   * Get the list of available chords
   * @return {Array} list of names for the available chords
   */
  static getAvailableChord(){
    return chords.map(c => c.name)
  }


  /**
   * Get a chord data from its name
   * @param  {string} chordName - name of the chord
   * @return {Object} all data, including name and interval per inversion
   */
  static getChordDataByName(chordName){
    if(chordName in chordIndex){
      return chords[ chordIndex[chordName] ]
    } else {
      return null
    }
  }


  /**
   * Get a chord given a chord name and, root note and the number of the inversion
   * @param  {string} rootKey - root key name, such as 'c4'
   * @param  {string} chordName - name of the chord as specified in the index
   * @param  {Number} inversion - OPTIONAL number of the inversion (default: 0, no inversion)
   * @return {Array} the chord as an array of note names
   */
  static getChordFromRoot(rootKey, chordName, inversion=0){
    let chordData = ChordLogic.getChordDataByName(chordName)

    if(!chordData){
      console.warn('No chord names ', chordName)
      return null
    }

    if(inversion < 0 || inversion > chordData.intervals.length){
      console.warn('The inversion index is out of range')
      return null
    }

    let rootPosition = Piano88KeyLogic.getIndex(rootKey)

    if(rootPosition === null){
      console.warn('The root key does not exist', rootPosition)
      return null
    }

    let chord = chordData.intervals[inversion]
      .map(index => index + rootPosition)
      .map(index => Piano88KeyLogic.getName(index))

    if(chord.includes(null)){
      console.warn('Part of the chord is outside the piano');
      return null
    }

    return chord
  }


}


export default ChordLogic
