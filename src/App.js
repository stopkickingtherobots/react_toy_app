import './App.css';
import Contacts from './components/contacts';

import React, { Component } from 'react';

class App extends Component {
  async postData() {

    try {

      let result = await fetch('https://webhook.site/2510ced6-daef-4795-aa5b-1124063618b4', {
        method: 'post',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        bodt: JSON.stringify({
          key1: 'myusername'
        })
      });

    } catch(e) {
      console.log(e)
    }

  }
  render() {
    return (
        <div className="app">
          <button onClick={ () => this.postData()}>Press Me to post some Data</button>
          <Contacts contacts={this.state.contacts} />
        </div>        
    )
  }

  // A state is simply an object that holds data pending to be rendered.
  state = {
      contacts: []
  };

  componentDidMount() {
      fetch('https://my.api.mockaroo.com/true_data.json?key=c10b2d80')
          .then(res => res.json())
          .then((data) => {
              this.setState({ contacts: data })
          })
          .catch(console.log)
  }

  componentDidMount() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch('https://my.api.mockaroo.com/true_data.json?key=c10b2d80', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
  }

}

export default App;
