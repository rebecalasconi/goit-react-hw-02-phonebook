import React, { Component } from "react";
import { nanoid } from 'nanoid'; 
//import Proptypes from 'prop-types'

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }; 


  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name , number} = this.state;

    if(name.trim() === '' || number.trim() === '') {
      alert('Please fill in both fields.')
      return;
    };

    const newContact = {
      id: nanoid(),
      name: name,
      number: number
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: ''
    }))
  }

  handleKeyPress = (event) => {
    const charCode = event.charCode;
    if (!(charCode >= 48 && charCode <= 57) && charCode !== 43) {
      event.preventDefault();
    }
  }

  render () {
  return (
    <div>
      <form onSubmit={this.handleSubmit}
      >
      <label htmlFor="name">Name</label>
      <input
  type="text"
  name="name"
  pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  value={this.state.name}
  onChange={this.handleInputChange}
/>

<label htmlFor="number">Number</label>
<input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  value={this.state.value}
   onChange={this.handleInputChange}
   onKeyPress={this.handleKeyPress}
/>

  <button type="submit" style={{
    border: '0.3px solid gray', 
    backgroundColor: 'white', 
    borderRadius: '3px', 
    display: 'flex', 
    marginTop: '20px'}}
    >Add contact</button>
    </form>
    <h2>Contacts</h2>
    <ul>
      {this.state.contacts.map((contact) => (
      <li key={contact.id}>{contact.name}: {contact.number}</li>
    ))}
    </ul>
    </div>
  )}
};

export default App;
