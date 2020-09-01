import React from 'react';
import Note from './Note.js';
import './Staff.css';

class Staff extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    let ledgers = [];
    for(let i = 0; i < this.props.ledgers; i ++) {
      ledgers.push(<hr className='Staff-ledgerLine'/>);
    }

    let topPos = this.props.position;
    console.log(topPos);
    if(this.props.ledgerLoc === 'top') {
      if(this.props.odd) {
        topPos = 68;
      } else {
        topPos = 100;
      }
    }
    console.log(topPos);
    
    return (

      <>
        <div className='Staff-staff'>
            {this.props.ledgerLoc === 'top' && ledgers}
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            {this.props.ledgerLoc === 'bottom' && ledgers}
            <div className={'Staff-' + this.props.clef} style={{top: this.props.ledgers*64}}> </div>
            <Note top={topPos}/>
        </div>

      </>
    );
  }
}


  

export default Staff;
