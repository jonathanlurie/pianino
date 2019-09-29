import React from 'react'
import ChordLogic from '../ChordLogic'

import { Select } from 'antd';
import { Button } from 'antd';
const { Option } = Select;



class ChordSelector extends React.Component {

  constructor(props) {
    super(props)

    this.state = {}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt){
    console.log(evt)
  }


  render(){
    let chordNames = ChordLogic.getAvailableChord()
    let options = chordNames.map(name => <Option value={name} key={name}>{name}</Option>)
    console.log(options)


    return (
      <div>
        <Select defaultValue={chordNames[0]} style={{ width: '300px' }} onChange={(evt) => this.handleChange(evt)}>
          {options}
        </Select>
        <Button type="primary">Primary</Button>
      </div>
    )
  }
}

export default ChordSelector
