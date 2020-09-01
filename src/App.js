import React from 'react';
import Keyboard from './components/Keyboard.js';
import Staff from './components/Staff.js';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      display: 'B4',
      position: 228,
      clef: 'treble',
      lowerRange: 33,
      upperRange: 40,
      ledgers: 0,
      ledgerLoc: 'none',
      odd: false,
    };

    this.keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

    this.bassMax = 23; // the index of the highest note that will be represented in bass cleff
    this.trebleMin = 23; // the index of the lowest note that will be represented in treble cleff
    
    this.bassRef = 21; // the index of the note whose position will be served as referenced for all notes in bass clef
    this.trebleRef = 33; // the index of the note whose position will be served as a reference for all notes in treble clef

    this.whiteNotes = [];
    this.noteToIndex = {};

    let noteInd = 0;
    for(let i = 0; i < 52; i++) {
        let note = this.keys[i % 7];
        if(note === 'C') {
          noteInd += 1;
        }
        note = note + noteInd;
        this.whiteNotes.push(note);
        this.noteToIndex[note] = i;  
    }

    this.changeDisplay = this.changeDisplay.bind(this);
  }

  componentDidMount() {

  }

  changeDisplay() {
    let noteInd = Math.floor(Math.random() * (this.state.upperRange-this.state.lowerRange+1))+this.state.lowerRange;
    this.setState({display: this.whiteNotes[noteInd]});

    let clef;
    if(noteInd >= this.trebleMin && noteInd > this.bassMax) {
      // if only in range for treble clef
      this.setState({
        clef: 'treble',
        position: 100 + 32*(this.trebleRef - noteInd),
      });
      clef = 'treble';

    } else if (noteInd < this.trebleMin && noteInd <= this.bassMax) {
      this.setState({
        clef: 'bass',
        position: 100 + 32*(this.bassRef-noteInd)
      })
      clef = 'bass';
    } else {
      let randInt = Math.floor(Math.random() * 2);
      clef = randInt === 0 ? 'treble' : 'bass';
      this.setState({
        clef: clef,
        position: randInt === 0 ? 100 + 32*(this.trebleRef-noteInd) : 100 + 32*(this.bassRef-noteInd)
      })
    }

    let topNote =  clef === 'treble' ? 'G5' : 'B3';
    let bottomNote =  clef === 'treble' ? 'D4' : 'F2';
    if(noteInd > this.noteToIndex[topNote]) {
      this.setState({
        ledgers: Math.ceil((noteInd-this.noteToIndex[topNote])/2),
        ledgerLoc: 'top',
        odd: Math.ceil((noteInd-this.noteToIndex[topNote])/2) === (noteInd-this.noteToIndex[topNote])/2
      });
    } else if(noteInd < this.noteToIndex[bottomNote]) {
      this.setState({
        ledgers: Math.ceil((this.noteToIndex[bottomNote]-noteInd)/2),
        ledgerLoc: 'bottom',
        odd: false,
      });
    } else {
      this.setState({
        ledgers: 0,
        ledgerLoc: 'none',
        odd: false
      });
    }
    console.log(this.whiteNotes[noteInd]);
  }

  render() {
    return (
      <>
        <div className="App-container">
          <div className='App-title'> Musimuse </div> 
          <Staff display={this.state.display} clef={this.state.clef} position={this.state.position} ledgers={this.state.ledgers} ledgerLoc={this.state.ledgerLoc} odd={this.state.odd}/>
          <Keyboard display={this.state.display} changeDisplay={this.changeDisplay}/>
          <div className='App-info'>i</div>
        </div>
      </>
    );
  }
}  

export default App;
