import React from 'react'
import AppStore from '../AppStore'
import Piano88KeyLogic from '../Piano88KeyLogic'
import ChordLogic from '../ChordLogic'


class KeyInfo extends React.Component {

  constructor(props){
    super(props)
    this.state = {}
  }


  render(){
    let keyId = this.props.keyDown || this.props.keyHovered
    let display = ''

    if(keyId){
      display = Piano88KeyLogic.beautifyKey(keyId)
      let chord = AppStore.get('chord')

      if(chord){
        display = ChordLogic.getChordDataByName(chord).notation(keyId)
      }
    }

    return (
      <div style={{
        marginTop: '8%',
        fontSize: '5em',
        fontFamily: 'serif',
        textAlign: 'center',
        padding: '20px',
        color: this.props.keyDown ? '#3c5266' : '#7ca7cf',
        userSelect: 'none'
      }}
        dangerouslySetInnerHTML={{ __html: display.replace(/\n/g, '<br />')}}
      >

      </div>
    )
  }

}

export default KeyInfo
