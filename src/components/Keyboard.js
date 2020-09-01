import React from 'react';
import './Keyboard.css';
import Key from './Key.js'

class Keyboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      keys: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      flatkeys: ['B', 'D', 'E', 'G', 'A'],
      show: true
    };
    this.scroll  = null;

  }

  componentDidMount() {
    this.refs.scroll = this.refs.scroll.scrollLeft=675;
  }

  render() {
    let keyList = [];
    let indList = [];

    let noteInd = 0;
    for(let i = 0; i < 52; i++) {
        let note = this.state.keys[i % 7];
        if(note === 'C') {
          noteInd += 1;
        } 
        keyList.push(<Key type='white' note={note + noteInd} show={this.state.show} display={this.props.display} changeDisplay={this.props.changeDisplay}/>);
        if (note === 'B' || note === 'E' || i === 51) {
          continue;
        }
        indList.push(i);
  
    }

    noteInd = 0;
    for(let i=0; i < indList.length; i++) {
      let note = this.state.flatkeys[i % 5];
      if(note === 'D') {
        noteInd += 1;
      }
      keyList.push(<Key type='black' left={40.5 + 52*indList[i]} note={note+'b'+noteInd} />);
    }
    
    return (
      <>
        <div className="Keyboard-scroll" ref='scroll'>
            <div className='Keyboard-container'> 
              {keyList}
            </div>
        </div>
      </>
    );
  }
}


  

export default Keyboard;
