import React from 'react';
import { Layout, Icon } from 'antd';
import 'antd/dist/antd.css';
import Piano88 from './components/Piano88'
import ChordSelector from './components/ChordSelector'
import KeyInfo from './components/KeyInfo'
import soundEngine from './SoundEngine'
import './App.css';

const { Header, Content, Footer } = Layout;

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      keyDown: null
    }

    this._soundEngine = soundEngine

    this._soundEngine.loadSounds()

    this.onKeyUp = this.onKeyUp.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.onKeyEnter = this.onKeyEnter.bind(this)
    this.onKeyLeave = this.onKeyLeave.bind(this)
  }

  onKeyDown(keyId){
    this.setState({keyDown: keyId})
  }

  onKeyUp(keyId){
    this.setState({keyDown: null})
  }


  onKeyEnter(keyId){
    this.setState({keyHovered: keyId})
  }

  onKeyLeave(keyId){
    this.setState({keyHovered: null})
  }


  render(){
    let piano88 = <Piano88
      onKeyUp={this.onKeyUp}
      onKeyDown={this.onKeyDown}
      onKeyEnter={this.onKeyEnter}
      onKeyLeave={this.onKeyLeave}
      soundEngine={this._soundEngine}
    />


    return (

      <Layout className="layout">
        <Header>
            <img src='./logo.png' className="logo" style={{background: 'none', width: 'auto', userSelect: 'none'}}/>
        </Header>

        <Content style={{ padding: '0 50px' }}>
          <ChordSelector/>
          <div style={{ background: '#fff', padding: 0, minHeight: 0 }}>
            {piano88}
          </div>
          <KeyInfo keyDown={this.state.keyDown} keyHovered={this.state.keyHovered}/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
        <a href="https://github.com/jonathanlurie/pianino" target="_blank" style={{userSelect: 'none'}}>
          Jonathan Lurie <Icon type="github" style={{fontSize: '20px'}}/>
        </a>
        </Footer>
      </Layout>
    )
  }
}

export default App;
