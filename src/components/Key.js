import React from '../../node_modules/react';
import './Keyboard.css';
import noteToSound from '../assets/Sounds.js'


class Key extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.sound = new Audio(noteToSound[this.props.note]);
    this.play = this.play.bind(this);
  }

  componentDidMount() {

  }

  play() {
    this.sound.play();
    if(this.props.display === this.props.note) {
      console.log('correct');
      this.props.changeDisplay();
    }
  }

  render() {
    let key =  (
      <div className="Key-white Key" id={this.props.note === 'C4' && 'C4'} onClick={this.play}> 
        {this.props.show && <div className='Key-note'> {this.props.note} </div>}
      </div>);

    if (this.props.type === 'black') {
      key = <div className="Key-black Key" style={{left: this.props.left}} onClick={this.play}> </div>
    }

    return (
      <>
        {key}
      </>
    );
  }
}


  

export default Key;
