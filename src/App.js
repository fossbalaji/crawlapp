import React, { Component } from 'react';
import './App.css';
import Domain from './domain';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {"domains": []}
  }

  componentDidMount(){
    // 
  }
  render() {
    const domain = <Domain/>;
    return (
      <div className="App">
      {domain}
      </div>
    );
  }
}

export default App;
