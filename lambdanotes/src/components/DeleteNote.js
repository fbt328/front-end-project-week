// import React, { Component } from 'react';
// import Axios from 'axios';

// class DeleteNote extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//       textBody: '',
//       tag: ''
//     };
//   }
//   noteDelete = () => {
//     Axios.delete('https://fe-notes.herokuapp.com/note/delete/${id}')
//     .then (response => console.log(response))
//     .catch (err => console.log(err));
// }

//   handleInputChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   render() {
//     return (
//   <div className='deleter'>
//             <button type='deleteButton' onSubmit={ () => {props.noteDelete(props.id)}}>delete</button>
//         </div>
//     )
//   }
// };

// export default DeleteNote;