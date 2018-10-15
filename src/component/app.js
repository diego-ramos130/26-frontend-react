'use strict';

import React from 'react';
import cowsay from 'cowsay-browser';
import faker from 'faker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.content = cowsay.say({
      text: faker.lorem.words(4)
    });
  }
  handleCowsayGen = () => {
    this.setState(() => {
      return {
        content: cowsay.say({
        text: faker.lorem.words(4)
        })
      };
    });
  };

  render() {
    return (
      <div className='nyeet'>
        <h2>Generate Cowsay Lorem</h2>
        <button onClick={this.handleCowsayGen}>click me</button>
        <p>app state:</p>
        <pre>{this.state.content}</pre>
        </div>
  );
  }
}

export default App;
