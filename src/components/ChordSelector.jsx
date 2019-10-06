import AppStore from '../AppStore'
import React from 'react'
import ChordLogic from '../ChordLogic'
import { Select } from 'antd';
const { Option } = Select;



class ChordSelector extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedChord: null,
      selectedInversion: 0
    }

    AppStore.set('chordInversion', 0)

    this.handleChangeChord = this.handleChangeChord.bind(this)
    this.handleChangeInversion = this.handleChangeInversion.bind(this)
  }


  handleChangeChord(chordName){
    AppStore.set('chord', chordName)
    AppStore.set('chordInversion', 0)
    this.setState({
      selectedChord: chordName,
      selectedInversion: 0
    })
  }


  handleChangeInversion(invIndex){
    AppStore.set('chordInversion', invIndex)
    this.setState({selectedInversion: invIndex })
  }


  render(){
    let chordNames = ChordLogic.getAvailableChord()
    let chordOptions = [
      <Option value={null} key="None">Single key</Option>,
      ...chordNames.map(name => <Option value={name} key={name}>{name}</Option>)
    ]

    let selectChord = (
      <Select defaultValue={null} style={{ width: '300px' }} onChange={(chordName) => this.handleChangeChord(chordName)}>
        {chordOptions}
      </Select>
    )


    let selectInversion = null
    if(this.state.selectedChord){
      let chordData = ChordLogic.getChordDataByName(this.state.selectedChord)
      let inversionOptions = chordData.intervals.map((inv, i) =>
        <Option value={i} key={i}>{'inversion #' + i}</Option>
      )

      selectInversion = (
        <Select
          defaultValue={this.state.selectedInversion}
          style={{ width: '300px' }}
          value={this.state.selectedInversion}
          onChange={(invIndex) => this.handleChangeInversion(invIndex)}
        >
          {inversionOptions}
        </Select>
      )
    }

    return (
      <div style={{
        marginTop: '20px',
        marginBottom: '20px',
        display: 'flex',
      }}>
        {selectChord}
        <div style={{width: '20px'}}/>
        {selectInversion}
      </div>
    )
  }
}

export default ChordSelector
