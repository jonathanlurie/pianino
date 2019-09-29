import React from "react";
import './Piano88.css'
import Piano88KeyLogic from '../Piano88KeyLogic'

class Piano88 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keysDown: []
    };

    this.onKeyMouseDown = this.onKeyMouseDown.bind(this)
    this.onKeyMouseEnter = this.onKeyMouseEnter.bind(this)
    this.onKeyMouseLeave = this.onKeyMouseLeave.bind(this)
    this.onKeyMouseUp = this.onKeyMouseUp.bind(this)
  }


  pressKeys(keys){
    let validKeysToAdd = keys.filter(k => Piano88KeyLogic.getIndex(k) !== null)
      .filter(k => !this.state.keysDown.includes(k))

    this.setState({
      keysDown: [...this.state.keysDown, ...validKeysToAdd]
    })
  }


  onKeyMouseDown(keyId){
    console.log('mouse down', keyId);
  }


  onKeyMouseEnter(keyId){
    console.log('mouse enter', keyId);
  }


  onKeyMouseLeave(keyId){
    console.log('mouse leave ', keyId);
  }

  onKeyMouseUp(keyId){
    console.log('mouse up ', keyId);
  }


  render() {
    let keyDownStyle = {
      fill: "#F00"
    }

    let keyStyle = {}
    this.state.keysDown.forEach(k => keyStyle[k] = keyDownStyle)


    return (
      <div className="piano-88">
      <svg width="100%" height="100%" viewBox="0 0 4052 500" version="1.1">
        <rect
          id="a3"
          x="1091.75"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["a3"]}
          onMouseDown={() => this.onKeyMouseDown("a3")}
          onMouseUp={() => this.onKeyMouseUp("a3")}
          onMouseEnter={() => this.onKeyMouseEnter("a3")}
          onMouseLeave={() => this.onKeyMouseLeave("a3")}
          className="white-key"
        />
        <rect
          id="b3"
          x="1169.75"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["b3"]}
          onMouseDown={() => this.onKeyMouseDown("b3")}
          onMouseUp={() => this.onKeyMouseUp("b3")}
          onMouseEnter={() => this.onKeyMouseEnter("b3")}
          onMouseLeave={() => this.onKeyMouseLeave("b3")}
          className="white-key"
        />
        <rect
          id="c3"
          x="1247.75"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["c3"]}
          onMouseDown={() => this.onKeyMouseDown("c3")}
          onMouseUp={() => this.onKeyMouseUp("c3")}
          onMouseEnter={() => this.onKeyMouseEnter("c3")}
          onMouseLeave={() => this.onKeyMouseLeave("c3")}
          className="white-key"
        />
        <rect
          id="d3"
          x="1325.75"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["d3"]}
          onMouseDown={() => this.onKeyMouseDown("d3")}
          onMouseUp={() => this.onKeyMouseUp("d3")}
          onMouseEnter={() => this.onKeyMouseEnter("d3")}
          onMouseLeave={() => this.onKeyMouseLeave("d3")}
          className="white-key"
        />
        <rect
          id="e3"
          x="1403.75"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["e3"]}
          onMouseDown={() => this.onKeyMouseDown("e3")}
          onMouseUp={() => this.onKeyMouseUp("e3")}
          onMouseEnter={() => this.onKeyMouseEnter("e3")}
          onMouseLeave={() => this.onKeyMouseLeave("e3")}
          className="white-key"
        />
        <rect
          id="f3"
          x="1481.75"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["f3"]}
          onMouseDown={() => this.onKeyMouseDown("f3")}
          onMouseUp={() => this.onKeyMouseUp("f3")}
          onMouseEnter={() => this.onKeyMouseEnter("f3")}
          onMouseLeave={() => this.onKeyMouseLeave("f3")}
          className="white-key"
        />
        <rect
          id="g3"
          x="1559.75"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["g3"]}
          onMouseDown={() => this.onKeyMouseDown("g3")}
          onMouseUp={() => this.onKeyMouseUp("g3")}
          onMouseEnter={() => this.onKeyMouseEnter("g3")}
          onMouseLeave={() => this.onKeyMouseLeave("g3")}
          className="white-key"
        />
        <rect
          id="a2"
          x="545.741"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["a2"]}
          onMouseDown={() => this.onKeyMouseDown("a2")}
          onMouseUp={() => this.onKeyMouseUp("a2")}
          onMouseEnter={() => this.onKeyMouseEnter("a2")}
          onMouseLeave={() => this.onKeyMouseLeave("a2")}
          className="white-key"
        />
        <rect
          id="b2"
          x="623.741"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["b2"]}
          onMouseDown={() => this.onKeyMouseDown("b2")}
          onMouseUp={() => this.onKeyMouseUp("b2")}
          onMouseEnter={() => this.onKeyMouseEnter("b2")}
          onMouseLeave={() => this.onKeyMouseLeave("b2")}
          className="white-key"
        />
        <rect
          id="c2"
          x="701.741"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["c2"]}
          onMouseDown={() => this.onKeyMouseDown("c2")}
          onMouseUp={() => this.onKeyMouseUp("c2")}
          onMouseEnter={() => this.onKeyMouseEnter("c2")}
          onMouseLeave={() => this.onKeyMouseLeave("c2")}
          className="white-key"
        />
        <rect
          id="d2"
          x="779.741"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["d2"]}
          onMouseDown={() => this.onKeyMouseDown("d2")}
          onMouseUp={() => this.onKeyMouseUp("d2")}
          onMouseEnter={() => this.onKeyMouseEnter("d2")}
          onMouseLeave={() => this.onKeyMouseLeave("d2")}
          className="white-key"
        />
        <rect
          id="e2"
          x="857.741"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["e2"]}
          onMouseDown={() => this.onKeyMouseDown("e2")}
          onMouseUp={() => this.onKeyMouseUp("e2")}
          onMouseEnter={() => this.onKeyMouseEnter("e2")}
          onMouseLeave={() => this.onKeyMouseLeave("e2")}
          className="white-key"
        />
        <rect
          id="f2"
          x="935.741"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["f2"]}
          onMouseDown={() => this.onKeyMouseDown("f2")}
          onMouseUp={() => this.onKeyMouseUp("f2")}
          onMouseEnter={() => this.onKeyMouseEnter("f2")}
          onMouseLeave={() => this.onKeyMouseLeave("f2")}
          className="white-key"
        />
        <rect
          id="g2"
          x="1013.74"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["g2"]}
          onMouseDown={() => this.onKeyMouseDown("g2")}
          onMouseUp={() => this.onKeyMouseUp("g2")}
          onMouseEnter={() => this.onKeyMouseEnter("g2")}
          onMouseLeave={() => this.onKeyMouseLeave("g2")}
          className="white-key"
        />
        <rect
          id="a0"
          x="0"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["a0"]}
          onMouseDown={() => this.onKeyMouseDown("a0")}
          onMouseUp={() => this.onKeyMouseUp("a0")}
          onMouseEnter={() => this.onKeyMouseEnter("a0")}
          onMouseLeave={() => this.onKeyMouseLeave("a0")}
          className="white-key"
        />
        <rect
          id="b0"
          x="78"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["b0"]}
          onMouseDown={() => this.onKeyMouseDown("b0")}
          onMouseUp={() => this.onKeyMouseUp("b0")}
          onMouseEnter={() => this.onKeyMouseEnter("b0")}
          onMouseLeave={() => this.onKeyMouseLeave("b0")}
          className="white-key"
        />
        <rect
          id="c1"
          x="156"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["c1"]}
          onMouseDown={() => this.onKeyMouseDown("c1")}
          onMouseUp={() => this.onKeyMouseUp("c1")}
          onMouseEnter={() => this.onKeyMouseEnter("c1")}
          onMouseLeave={() => this.onKeyMouseLeave("c1")}
          className="white-key"
        />
        <rect
          id="d1"
          x="234"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["d1"]}
          onMouseDown={() => this.onKeyMouseDown("d1")}
          onMouseUp={() => this.onKeyMouseUp("d1")}
          onMouseEnter={() => this.onKeyMouseEnter("d1")}
          onMouseLeave={() => this.onKeyMouseLeave("d1")}
          className="white-key"
        />
        <rect
          id="e1"
          x="312"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["e1"]}
          onMouseDown={() => this.onKeyMouseDown("e1")}
          onMouseUp={() => this.onKeyMouseUp("e1")}
          onMouseEnter={() => this.onKeyMouseEnter("e1")}
          onMouseLeave={() => this.onKeyMouseLeave("e1")}
          className="white-key"
        />
        <rect
          id="f1"
          x="390"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["f1"]}
          onMouseDown={() => this.onKeyMouseDown("f1")}
          onMouseUp={() => this.onKeyMouseUp("f1")}
          onMouseEnter={() => this.onKeyMouseEnter("f1")}
          onMouseLeave={() => this.onKeyMouseLeave("f1")}
          className="white-key"
        />
        <rect
          id="g1"
          x="468"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["g1"]}
          onMouseDown={() => this.onKeyMouseDown("g1")}
          onMouseUp={() => this.onKeyMouseUp("g1")}
          onMouseEnter={() => this.onKeyMouseEnter("g1")}
          onMouseLeave={() => this.onKeyMouseLeave("g1")}
          className="white-key"
        />
        <rect
          id="a6"
          x="2729.06"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["a6"]}
          onMouseDown={() => this.onKeyMouseDown("a6")}
          onMouseUp={() => this.onKeyMouseUp("a6")}
          onMouseEnter={() => this.onKeyMouseEnter("a6")}
          onMouseLeave={() => this.onKeyMouseLeave("a6")}
          className="white-key"
        />
        <rect
          id="b6"
          x="2807.06"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["b6"]}
          onMouseDown={() => this.onKeyMouseDown("b6")}
          onMouseUp={() => this.onKeyMouseUp("b6")}
          onMouseEnter={() => this.onKeyMouseEnter("b6")}
          onMouseLeave={() => this.onKeyMouseLeave("b6")}
          className="white-key"
        />
        <rect
          id="c6"
          x="2885.06"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["c6"]}
          onMouseDown={() => this.onKeyMouseDown("c6")}
          onMouseUp={() => this.onKeyMouseUp("c6")}
          onMouseEnter={() => this.onKeyMouseEnter("c6")}
          onMouseLeave={() => this.onKeyMouseLeave("c6")}
          className="white-key"
        />
        <rect
          id="d6"
          x="2963.06"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["d6"]}
          onMouseDown={() => this.onKeyMouseDown("d6")}
          onMouseUp={() => this.onKeyMouseUp("d6")}
          onMouseEnter={() => this.onKeyMouseEnter("d6")}
          onMouseLeave={() => this.onKeyMouseLeave("d6")}
          className="white-key"
        />
        <rect
          id="e6"
          x="3041.06"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["e6"]}
          onMouseDown={() => this.onKeyMouseDown("e6")}
          onMouseUp={() => this.onKeyMouseUp("e6")}
          onMouseEnter={() => this.onKeyMouseEnter("e6")}
          onMouseLeave={() => this.onKeyMouseLeave("e6")}
          className="white-key"
        />
        <rect
          id="f6"
          x="3119.06"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["f6"]}
          onMouseDown={() => this.onKeyMouseDown("f6")}
          onMouseUp={() => this.onKeyMouseUp("f6")}
          onMouseEnter={() => this.onKeyMouseEnter("f6")}
          onMouseLeave={() => this.onKeyMouseLeave("f6")}
          className="white-key"
        />
        <rect
          id="g6"
          x="3197.06"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["g6"]}
          onMouseDown={() => this.onKeyMouseDown("g6")}
          onMouseUp={() => this.onKeyMouseUp("g6")}
          onMouseEnter={() => this.onKeyMouseEnter("g6")}
          onMouseLeave={() => this.onKeyMouseLeave("g6")}
          className="white-key"
        />
        <rect
          id="a7"
          x="3275.11"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["a7"]}
          onMouseDown={() => this.onKeyMouseDown("a7")}
          onMouseUp={() => this.onKeyMouseUp("a7")}
          onMouseEnter={() => this.onKeyMouseEnter("a7")}
          onMouseLeave={() => this.onKeyMouseLeave("a7")}
          className="white-key"
        />
        <rect
          id="b7"
          x="3353.11"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["b7"]}
          onMouseDown={() => this.onKeyMouseDown("b7")}
          onMouseUp={() => this.onKeyMouseUp("b7")}
          onMouseEnter={() => this.onKeyMouseEnter("b7")}
          onMouseLeave={() => this.onKeyMouseLeave("b7")}
          className="white-key"
        />
        <rect
          id="c7"
          x="3431.11"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["c7"]}
          onMouseDown={() => this.onKeyMouseDown("c7")}
          onMouseUp={() => this.onKeyMouseUp("c7")}
          onMouseEnter={() => this.onKeyMouseEnter("c7")}
          onMouseLeave={() => this.onKeyMouseLeave("c7")}
          className="white-key"
        />
        <rect
          id="d7"
          x="3509.11"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["d7"]}
          onMouseDown={() => this.onKeyMouseDown("d7")}
          onMouseUp={() => this.onKeyMouseUp("d7")}
          onMouseEnter={() => this.onKeyMouseEnter("d7")}
          onMouseLeave={() => this.onKeyMouseLeave("d7")}
          className="white-key"
        />
        <rect
          id="e7"
          x="3587.11"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["e7"]}
          onMouseDown={() => this.onKeyMouseDown("e7")}
          onMouseUp={() => this.onKeyMouseUp("e7")}
          onMouseEnter={() => this.onKeyMouseEnter("e7")}
          onMouseLeave={() => this.onKeyMouseLeave("e7")}
          className="white-key"
        />
        <rect
          id="f7"
          x="3665.11"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["f7"]}
          onMouseDown={() => this.onKeyMouseDown("f7")}
          onMouseUp={() => this.onKeyMouseUp("f7")}
          onMouseEnter={() => this.onKeyMouseEnter("f7")}
          onMouseLeave={() => this.onKeyMouseLeave("f7")}
          className="white-key"
        />
        <rect
          id="g7"
          x="3743.11"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["g7"]}
          onMouseDown={() => this.onKeyMouseDown("g7")}
          onMouseUp={() => this.onKeyMouseUp("g7")}
          onMouseEnter={() => this.onKeyMouseEnter("g7")}
          onMouseLeave={() => this.onKeyMouseLeave()}
          className="white-key"
        />
        <rect
          id="a8"
          x="3820.73"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["a8"]}
          onMouseDown={() => this.onKeyMouseDown("a8")}
          onMouseUp={() => this.onKeyMouseUp("a8")}
          onMouseEnter={() => this.onKeyMouseEnter("a8")}
          onMouseLeave={() => this.onKeyMouseLeave("a8")}
          className="white-key"
        />
        <rect
          id="b8"
          x="3898.73"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["b8"]}
          onMouseDown={() => this.onKeyMouseDown("b8")}
          onMouseUp={() => this.onKeyMouseUp("b8")}
          onMouseEnter={() => this.onKeyMouseEnter("b8")}
          onMouseLeave={() => this.onKeyMouseLeave("b8")}
          className="white-key"
        />
        <rect
          id="c8"
          x="3976.73"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["c8"]}
          onMouseDown={() => this.onKeyMouseDown("c8")}
          onMouseUp={() => this.onKeyMouseUp("c8")}
          onMouseEnter={() => this.onKeyMouseEnter("c8")}
          onMouseLeave={() => this.onKeyMouseLeave("c8")}
          className="white-key"
        />
        <rect
          id="a5"
          x="2183.06"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["a5"]}
          onMouseDown={() => this.onKeyMouseDown("a5")}
          onMouseUp={() => this.onKeyMouseUp("a5")}
          onMouseEnter={() => this.onKeyMouseEnter("a5")}
          onMouseLeave={() => this.onKeyMouseLeave("a5")}
          className="white-key"
        />
        <rect
          id="b5"
          x="2261.06"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["b5"]}
          onMouseDown={() => this.onKeyMouseDown("b5")}
          onMouseUp={() => this.onKeyMouseUp("b5")}
          onMouseEnter={() => this.onKeyMouseEnter("b5")}
          onMouseLeave={() => this.onKeyMouseLeave("b5")}
          className="white-key"
        />
        <rect
          id="c5"
          x="2339.06"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["c5"]}
          onMouseDown={() => this.onKeyMouseDown("c5")}
          onMouseUp={() => this.onKeyMouseUp("c5")}
          onMouseEnter={() => this.onKeyMouseEnter("c5")}
          onMouseLeave={() => this.onKeyMouseLeave("c5")}
          className="white-key"
        />
        <rect
          id="d5"
          x="2417.06"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["d5"]}
          onMouseDown={() => this.onKeyMouseDown("d5")}
          onMouseUp={() => this.onKeyMouseUp("d5")}
          onMouseEnter={() => this.onKeyMouseEnter("d5")}
          onMouseLeave={() => this.onKeyMouseLeave("d5")}
          className="white-key"
        />
        <rect
          id="e5"
          x="2495.06"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["e5"]}
          onMouseDown={() => this.onKeyMouseDown("e5")}
          onMouseUp={() => this.onKeyMouseUp("e5")}
          onMouseEnter={() => this.onKeyMouseEnter("e5")}
          onMouseLeave={() => this.onKeyMouseLeave("e5")}
          className="white-key"
        />
        <rect
          id="f5"
          x="2573.06"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["f5"]}
          onMouseDown={() => this.onKeyMouseDown("f5")}
          onMouseUp={() => this.onKeyMouseUp("f5")}
          onMouseEnter={() => this.onKeyMouseEnter("f5")}
          onMouseLeave={() => this.onKeyMouseLeave("f5")}
          className="white-key"
        />
        <rect
          id="g5"
          x="2651.06"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["g5"]}
          onMouseDown={() => this.onKeyMouseDown("g5")}
          onMouseUp={() => this.onKeyMouseUp("g5")}
          onMouseEnter={() => this.onKeyMouseEnter("g5")}
          onMouseLeave={() => this.onKeyMouseLeave("g5")}
          className="white-key"
        />
        <rect
          id="a4"
          x="1637.32"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["a4"]}
          onMouseDown={() => this.onKeyMouseDown("a4")}
          onMouseUp={() => this.onKeyMouseUp("a4")}
          onMouseEnter={() => this.onKeyMouseEnter("a4")}
          onMouseLeave={() => this.onKeyMouseLeave("a4")}
          className="white-key"
        />
        <rect
          id="b4"
          x="1715.32"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["b4"]}
          onMouseDown={() => this.onKeyMouseDown("b4")}
          onMouseUp={() => this.onKeyMouseUp("b4")}
          onMouseEnter={() => this.onKeyMouseEnter("b4")}
          onMouseLeave={() => this.onKeyMouseLeave("b4")}
          className="white-key"
        />
        <rect
          id="c4"
          x="1793.32"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["c4"]}
          onMouseDown={() => this.onKeyMouseDown("c4")}
          onMouseUp={() => this.onKeyMouseUp("c4")}
          onMouseEnter={() => this.onKeyMouseEnter("c4")}
          onMouseLeave={() => this.onKeyMouseLeave("c4")}
          className="white-key"
        />
        <rect
          id="d4"
          x="1871.32"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["d4"]}
          onMouseDown={() => this.onKeyMouseDown("d4")}
          onMouseUp={() => this.onKeyMouseUp("d4")}
          onMouseEnter={() => this.onKeyMouseEnter("d4")}
          onMouseLeave={() => this.onKeyMouseLeave("d4")}
          className="white-key"
        />
        <rect
          id="e4"
          x="1949.32"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["e4"]}
          onMouseDown={() => this.onKeyMouseDown("e4")}
          onMouseUp={() => this.onKeyMouseUp("e4")}
          onMouseEnter={() => this.onKeyMouseEnter("e4")}
          onMouseLeave={() => this.onKeyMouseLeave("e4")}
          className="white-key"
        />
        <rect
          id="f4"
          x="2027.32"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["f4"]}
          onMouseDown={() => this.onKeyMouseDown("f4")}
          onMouseUp={() => this.onKeyMouseUp("f4")}
          onMouseEnter={() => this.onKeyMouseEnter("f4")}
          onMouseLeave={() => this.onKeyMouseLeave("f4")}
          className="white-key"
        />
        <rect
          id="g4"
          x="2105.32"
          y="0"
          width="75"
          height="499.996"
          style={keyStyle["g4"]}
          onMouseDown={() => this.onKeyMouseDown("g4")}
          onMouseUp={() => this.onKeyMouseUp("g4")}
          onMouseEnter={() => this.onKeyMouseEnter("g4")}
          onMouseLeave={() => this.onKeyMouseLeave("g4")}
          className="white-key"
        />
        <rect
          id="b3f"
          x="1144.51"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["b3f"]}
          onMouseDown={() => this.onKeyMouseDown("b3f")}
          onMouseUp={() => this.onKeyMouseUp("b3f")}
          onMouseEnter={() => this.onKeyMouseEnter("b3f")}
          onMouseLeave={() => this.onKeyMouseLeave("b3f")}
          className="black-key"
        />
        <rect
          id="d3f"
          x="1300.48"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["d3f"]}
          onMouseDown={() => this.onKeyMouseDown("d3f")}
          onMouseUp={() => this.onKeyMouseUp("d3f")}
          onMouseEnter={() => this.onKeyMouseEnter("d3f")}
          onMouseLeave={() => this.onKeyMouseLeave("d3f")}
          className="black-key"
        />
        <rect
          id="e3f"
          x="1378.3"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["e3f"]}
          onMouseDown={() => this.onKeyMouseDown("e3f")}
          onMouseUp={() => this.onKeyMouseUp("e3f")}
          onMouseEnter={() => this.onKeyMouseEnter("e3f")}
          onMouseLeave={() => this.onKeyMouseLeave("e3f")}
          className="black-key"
        />
        <rect
          id="g3f"
          x="1534.41"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["g3f"]}
          onMouseDown={() => this.onKeyMouseDown("g3f")}
          onMouseUp={() => this.onKeyMouseUp("g3f")}
          onMouseEnter={() => this.onKeyMouseEnter("g3f")}
          onMouseLeave={() => this.onKeyMouseLeave("g3f")}
          className="black-key"
        />
        <rect
          id="a4f"
          x="1612.43"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["a4f"]}
          onMouseDown={() => this.onKeyMouseDown("a4f")}
          onMouseUp={() => this.onKeyMouseUp("a4f")}
          onMouseEnter={() => this.onKeyMouseEnter("a4f")}
          onMouseLeave={() => this.onKeyMouseLeave("a4f")}
          className="black-key"
        />
        <rect
          id="b2f"
          x="598.503"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["b2f"]}
          onMouseDown={() => this.onKeyMouseDown("b2f")}
          onMouseUp={() => this.onKeyMouseUp("b2f")}
          onMouseEnter={() => this.onKeyMouseEnter("b2f")}
          onMouseLeave={() => this.onKeyMouseLeave("b2f")}
          className="black-key"
        />
        <rect
          id="d2f"
          x="754.469"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["d2f"]}
          onMouseDown={() => this.onKeyMouseDown("d2f")}
          onMouseUp={() => this.onKeyMouseUp("d2f")}
          onMouseEnter={() => this.onKeyMouseEnter("d2f")}
          onMouseLeave={() => this.onKeyMouseLeave("d2f")}
          className="black-key"
        />
        <rect
          id="e2f"
          x="832.294"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["e2f"]}
          onMouseDown={() => this.onKeyMouseDown("e2f")}
          onMouseUp={() => this.onKeyMouseUp("e2f")}
          onMouseEnter={() => this.onKeyMouseEnter("e2f")}
          onMouseLeave={() => this.onKeyMouseLeave("e2f")}
          className="black-key"
        />
        <rect
          id="g2f"
          x="988.408"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["g2f"]}
          onMouseDown={() => this.onKeyMouseDown("g2f")}
          onMouseUp={() => this.onKeyMouseUp("g2f")}
          onMouseEnter={() => this.onKeyMouseEnter("g2f")}
          onMouseLeave={() => this.onKeyMouseLeave("g2f")}
          className="black-key"
        />
        <rect
          id="a3f"
          x="1066.42"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["a3f"]}
          onMouseDown={() => this.onKeyMouseDown("a3f")}
          onMouseUp={() => this.onKeyMouseUp("a3f")}
          onMouseEnter={() => this.onKeyMouseEnter("a3f")}
          onMouseLeave={() => this.onKeyMouseLeave("a3f")}
          className="black-key"
        />
        <rect
          id="b0f"
          x="52.762"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["b0f"]}
          onMouseDown={() => this.onKeyMouseDown("b0f")}
          onMouseUp={() => this.onKeyMouseUp("b0f")}
          onMouseEnter={() => this.onKeyMouseEnter("b0f")}
          onMouseLeave={() => this.onKeyMouseLeave("b0f")}
          className="black-key"
        />
        <rect
          id="d1f"
          x="208.728"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["d1f"]}
          onMouseDown={() => this.onKeyMouseDown("d1f")}
          onMouseUp={() => this.onKeyMouseUp("d1f")}
          onMouseEnter={() => this.onKeyMouseEnter("d1f")}
          onMouseLeave={() => this.onKeyMouseLeave("d1f")}
          className="black-key"
        />
        <rect
          id="e1f"
          x="286.553"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["e1f"]}
          onMouseDown={() => this.onKeyMouseDown("e1f")}
          onMouseUp={() => this.onKeyMouseUp("e1f")}
          onMouseEnter={() => this.onKeyMouseEnter("e1f")}
          onMouseLeave={() => this.onKeyMouseLeave("e1f")}
          className="black-key"
        />
        <rect
          id="g1f"
          x="442.666"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["g1f"]}
          onMouseDown={() => this.onKeyMouseDown("g1f")}
          onMouseUp={() => this.onKeyMouseUp("g1f")}
          onMouseEnter={() => this.onKeyMouseEnter("g1f")}
          onMouseLeave={() => this.onKeyMouseLeave("g1f")}
          className="black-key"
        />
        <rect
          id="a2f"
          x="520.681"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["a2f"]}
          onMouseDown={() => this.onKeyMouseDown("a2f")}
          onMouseUp={() => this.onKeyMouseUp("a2f")}
          onMouseEnter={() => this.onKeyMouseEnter("a2f")}
          onMouseLeave={() => this.onKeyMouseLeave("a2f")}
          className="black-key"
        />
        <rect
          id="b6f"
          x="2781.82"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["b6f"]}
          onMouseDown={() => this.onKeyMouseDown("b6f")}
          onMouseUp={() => this.onKeyMouseUp("b6f")}
          onMouseEnter={() => this.onKeyMouseEnter("b6f")}
          onMouseLeave={() => this.onKeyMouseLeave("b6f")}
          className="black-key"
        />
        <rect
          id="d6f"
          x="2937.79"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["d6f"]}
          onMouseDown={() => this.onKeyMouseDown("d6f")}
          onMouseUp={() => this.onKeyMouseUp("d6f")}
          onMouseEnter={() => this.onKeyMouseEnter()}
          onMouseLeave={() => this.onKeyMouseLeave()}
          className="black-key"
        />
        <rect
          id="e6f"
          x="3015.62"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["e6f"]}
          onMouseDown={() => this.onKeyMouseDown("e6f")}
          onMouseUp={() => this.onKeyMouseUp("e6f")}
          onMouseEnter={() => this.onKeyMouseEnter("e6f")}
          onMouseLeave={() => this.onKeyMouseLeave("e6f")}
          className="black-key"
        />
        <rect
          id="g6f"
          x="3171.73"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["g6f"]}
          onMouseDown={() => this.onKeyMouseDown("g6f")}
          onMouseUp={() => this.onKeyMouseUp("g6f")}
          onMouseEnter={() => this.onKeyMouseEnter("g6f")}
          onMouseLeave={() => this.onKeyMouseLeave("g6f")}
          className="black-key"
        />
        <rect
          id="a7f"
          x="3249.74"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["a7f"]}
          onMouseDown={() => this.onKeyMouseDown("a7f")}
          onMouseUp={() => this.onKeyMouseUp("a7f")}
          onMouseEnter={() => this.onKeyMouseEnter("a7f")}
          onMouseLeave={() => this.onKeyMouseLeave("a7f")}
          className="black-key"
        />
        <rect
          id="b7f"
          x="3327.87"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["b7f"]}
          onMouseDown={() => this.onKeyMouseDown("b7f")}
          onMouseUp={() => this.onKeyMouseUp("b7f")}
          onMouseEnter={() => this.onKeyMouseEnter("b7f")}
          onMouseLeave={() => this.onKeyMouseLeave("b7f")}
          className="black-key"
        />
        <rect
          id="d7f"
          x="3483.83"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["d7f"]}
          onMouseDown={() => this.onKeyMouseDown("d7f")}
          onMouseUp={() => this.onKeyMouseUp("d7f")}
          onMouseEnter={() => this.onKeyMouseEnter("d7f")}
          onMouseLeave={() => this.onKeyMouseLeave("d7f")}
          className="black-key"
        />
        <rect
          id="e7f"
          x="3561.66"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["e7f"]}
          onMouseDown={() => this.onKeyMouseDown("e7f")}
          onMouseUp={() => this.onKeyMouseUp("e7f")}
          onMouseEnter={() => this.onKeyMouseEnter("e7f")}
          onMouseLeave={() => this.onKeyMouseLeave("e7f")}
          className="black-key"
        />
        <rect
          id="g7f"
          x="3717.77"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["g7f"]}
          onMouseDown={() => this.onKeyMouseDown("g7f")}
          onMouseUp={() => this.onKeyMouseUp("g7f")}
          onMouseEnter={() => this.onKeyMouseEnter("g7f")}
          onMouseLeave={() => this.onKeyMouseLeave("g7f")}
          className="black-key"
        />
        <rect
          id="a8f"
          x="3795.79"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["a8f"]}
          onMouseDown={() => this.onKeyMouseDown("a8f")}
          onMouseUp={() => this.onKeyMouseUp("a8f")}
          onMouseEnter={() => this.onKeyMouseEnter("a8f")}
          onMouseLeave={() => this.onKeyMouseLeave("a8f")}
          className="black-key"
        />
        <rect
          id="b8f"
          x="3873.49"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["b8f"]}
          onMouseDown={() => this.onKeyMouseDown("b8f")}
          onMouseUp={() => this.onKeyMouseUp("b8f")}
          onMouseEnter={() => this.onKeyMouseEnter("b8f")}
          onMouseLeave={() => this.onKeyMouseLeave("b8f")}
          className="black-key"
        />
        <rect
          id="b5f"
          x="2235.82"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["b5f"]}
          onMouseDown={() => this.onKeyMouseDown("b5f")}
          onMouseUp={() => this.onKeyMouseUp("b5f")}
          onMouseEnter={() => this.onKeyMouseEnter("b5f")}
          onMouseLeave={() => this.onKeyMouseLeave("b5f")}
          className="black-key"
        />
        <rect
          id="d5f"
          x="2391.78"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["d5f"]}
          onMouseDown={() => this.onKeyMouseDown("d5f")}
          onMouseUp={() => this.onKeyMouseUp("d5f")}
          onMouseEnter={() => this.onKeyMouseEnter("d5f")}
          onMouseLeave={() => this.onKeyMouseLeave("d5f")}
          className="black-key"
        />
        <rect
          id="e5f"
          x="2469.61"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["e5f"]}
          onMouseDown={() => this.onKeyMouseDown("e5f")}
          onMouseUp={() => this.onKeyMouseUp("e5f")}
          onMouseEnter={() => this.onKeyMouseEnter("e5f")}
          onMouseLeave={() => this.onKeyMouseLeave("e5f")}
          className="black-key"
        />
        <rect
          id="g5f"
          x="2625.72"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["g5f"]}
          onMouseDown={() => this.onKeyMouseDown("g5f")}
          onMouseUp={() => this.onKeyMouseUp("g5f")}
          onMouseEnter={() => this.onKeyMouseEnter("g5f")}
          onMouseLeave={() => this.onKeyMouseLeave("g5f")}
          className="black-key"
        />
        <rect
          id="a6f"
          x="2703.74"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["a6f"]}
          onMouseDown={() => this.onKeyMouseDown("a6f")}
          onMouseUp={() => this.onKeyMouseUp("a6f")}
          onMouseEnter={() => this.onKeyMouseEnter("a6f")}
          onMouseLeave={() => this.onKeyMouseLeave("a6f")}
          className="black-key"
        />
        <rect
          id="b4f"
          x="1690.08"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["b4f"]}
          onMouseDown={() => this.onKeyMouseDown("b4f")}
          onMouseUp={() => this.onKeyMouseUp("b4f")}
          onMouseEnter={() => this.onKeyMouseEnter("b4f")}
          onMouseLeave={() => this.onKeyMouseLeave("b4f")}
          className="black-key"
        />
        <rect
          id="d4f"
          x="1846.04"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["d4f"]}
          onMouseDown={() => this.onKeyMouseDown("d4f")}
          onMouseUp={() => this.onKeyMouseUp("d4f")}
          onMouseEnter={() => this.onKeyMouseEnter("d4f")}
          onMouseLeave={() => this.onKeyMouseLeave("d4f")}
          className="black-key"
        />
        <rect
          id="e4f"
          x="1923.87"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["e4f"]}
          onMouseDown={() => this.onKeyMouseDown("e4f")}
          onMouseUp={() => this.onKeyMouseUp("e4f")}
          onMouseEnter={() => this.onKeyMouseEnter("e4f")}
          onMouseLeave={() => this.onKeyMouseLeave("e4f")}
          className="black-key"
        />
        <rect
          id="g4f"
          x="2079.98"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["g4f"]}
          onMouseDown={() => this.onKeyMouseDown("g4f")}
          onMouseUp={() => this.onKeyMouseUp("g4f")}
          onMouseEnter={() => this.onKeyMouseEnter("g4f")}
          onMouseLeave={() => this.onKeyMouseLeave("g4f")}
          className="black-key"
        />
        <rect
          id="a5f"
          x="2158"
          y="0"
          width="47.885"
          height="311.31"
          style={keyStyle["a5f"]}
          onMouseDown={() => this.onKeyMouseDown("a5f")}
          onMouseUp={() => this.onKeyMouseUp("a5f")}
          onMouseEnter={() => this.onKeyMouseEnter("a5f")}
          onMouseLeave={() => this.onKeyMouseLeave("a5f")}
          className="black-key"
        />
      </svg>
      </div>
    );
  }
}

export default Piano88;
