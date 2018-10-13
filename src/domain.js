import React, { Component } from 'react';
import Searchbar from './search';

const API = "/api/v1/domain/"

class Domain extends Component{
  constructor(props){
    super(props);
    this.state = {domains: []};
  }

  componentDidMount(){
    // hit rest api and render stuffs
    fetch(API, {mode: 'cors',
        cache: 'no-cache',
          }).then(response => response.json())
    .then(data => this.setState({ domains: data.domains }));
  }

  render(){
    const listitems = (
      <div>
        <h4> Domains Crawled:</h4>
        <div>
          {this.state.domains.map((domain) =>
            <p>
            <a href={"/domain/"+ domain.id} key={domain.id}>{domain.name}</a>
            </p>
          )}
          </div>
      </div>
    );
    return (
      <div className='domain-container'>
        <Searchbar/>
        <br/>
        {listitems}
      </div>
    );
  }
}

export default Domain;
