import AppStore from '../AppStore'
import React from 'react'
import ChordLogic from '../ChordLogic'

import { Select } from 'antd';
import { Button } from 'antd';
const { Option } = Select;



class ChordSelector extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedChord: null
    }

    AppStore.set('chordInversion', 0)

    this.handleChange = this.handleChange.bind(this)
    this.handleChangeInversion = this.handleChangeInversion.bind(this)
  }

  handleChange(chordName){
    AppStore.set('chord', chordName)
    AppStore.set('chordInversion', 0)
    this.setState({selectedChord: chordName})
  }

  handleChangeInversion(invIndex){
    AppStore.set('chordInversion', invIndex)
  }


  render(){
    let chordNames = ChordLogic.getAvailableChord()
    let chordOptions = [
      <Option value={null} key="None">None</Option>,
      ...chordNames.map(name => <Option value={name} key={name}>{name}</Option>)
    ]


    let selectInversion = null
    if(this.state.selectedChord){
      let chordData = ChordLogic.getChordDataByName(this.state.selectedChord)
      let inversionOptions = chordData.intervals.map((inv, i) =>
        <Option value={i} key={i}>{'inverion #' + i}</Option>
      )
      selectInversion = (
        <Select defaultValue={0} style={{ width: '300px' }} onChange={(invIndex) => this.handleChangeInversion(invIndex)}>
          {inversionOptions}
        </Select>
      )
    }

    return (
      <div>
        <Select defaultValue={null} style={{ width: '300px' }} onChange={(chordName) => this.handleChange(chordName)}>
          {chordOptions}
        </Select>

        {selectInversion}

      </div>
    )
  }
}

export default ChordSelector
