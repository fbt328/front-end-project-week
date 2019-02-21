import React from 'react';
// import { Link } from 'react-router-dom';

const backdropStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.3',
  padding: 50,
}

const modalStyle = {
  backgroundColor: '#fff',
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 300,
  margin: '0 auto',
  padding: 30,
  position: 'relative'
}

class Modal extends React.Component {

  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  }
  
  render() {
    if (!this.props.show) {
      return null;
    }

    return(
      
      <div style={backdropStyle}>
         <div style={modalStyle}>
            {this.props.children}
              <div>
                <button onClick={(e) => {this.onClose(e)}}> do not delete </button>
                <button classNameonClick={() => {this.noteDelete(this.id)}}>yes, permanently delete</button>
                {/* delete button will lead to delete function, need to fix still */}
              </div>
          </div>
      </div> 
    )
  }  
} 

export default Modal;