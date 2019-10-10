import Beetmaker from 'beetmaker'
import EventManager from '@jonathanlurie/eventmanager'
import Piano88KeyLogic from './Piano88KeyLogic'


console.log(Beetmaker)

class SoundEngine extends EventManager{

  constructor(){
    super()
    this._audioCtx = new AudioContext()
    this._trackCollection = new Beetmaker.TrackCollection(this._audioCtx)
    this._pianoSamples = {}

    this.loadSounds = this.loadSounds.bind(this)
    this.play = this.play.bind(this)
    this.stop = this.stop.bind(this)

    let that = this

    this._trackCollection.on('tracksAdded', function(tracks){
      tracks.forEach((trk, i) => {
        let key = trk.getName().split('.')[0]
        let sample = new Beetmaker.Sample(trk, that._audioCtx, {name: key })
        that._pianoSamples[key] = sample
        that.emit('keySoundLoaded', [key])
      })
    })
  }


  loadSounds(pianoType='vintage_upright'){
    let soundUrl = Piano88KeyLogic.getKeyList().map(keyId => {
      return `./sounds/${pianoType}/${keyId}.mp3`
    })

    soundUrl.forEach(url => this._trackCollection.addFromUrl(url))
  }


  play(keyId){
    if(keyId in this._pianoSamples){
      this._pianoSamples[keyId].setVolume(1)
      this._pianoSamples[keyId].start()
    }else{
      console.log('PLAY Key sound not available')
    }
  }


  setVolume(keyId, vol){
    if(keyId in this._pianoSamples){
      this._pianoSamples[keyId].setVolume(vol)
    }else{
      console.log('VOL Key sound not available')
    }
  }

  stop(keyId){
    if(keyId in this._pianoSamples){
      this._pianoSamples[keyId].stop()
    }else{
      console.log('STOP Key sound not available')
    }
  }


}

const soundEngine = new SoundEngine()

export default soundEngine
