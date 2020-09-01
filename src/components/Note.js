import React from 'react';
import './Note.css';

class Note extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <>
        <div className='Note' style={{top: this.props.top}}> </div>
      </>
    );
  }
}


  

export default Note;
