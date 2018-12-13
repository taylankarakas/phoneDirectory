import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Contact from './Contact';


class App extends Component {
  constructor () {
    super();
    this.addContact = this.addContact.bind(this);
  }

  state = {
    contact : [
      {
        name : 'taylan',
        phone : 5454545
      },
      {
        name : 'ali',
        phone : 798798
      }
    ]
  }

  addContact (state) {
    const contact = this.state.contact;
    contact.push(state);

    this.setState({
      contact
    })
  }

  render() {
    return (
      <div className="App">
          <Contact contacts = { this.state.contact } addContact = { this.addContact } />
      </div>
    )
  }
}

export default App;
