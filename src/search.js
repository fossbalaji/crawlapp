import React, {Component} from 'react';


class Searchbar extends Component{
  constructor(props){
    super(props);
    this.state = {q: ""};
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('/api/v1/crawl/', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      body: data
    }).then(res => {
        window.location.reload();
    }).catch(err => err);
  }

  componentDidMount(){
    //
  }

  render(){
    return (
       <form className="form-inline" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="myurl">Enter Url:</label>
          <input type="url" name="url" id="url" placeholder="https://example.com" pattern="https://.*" size="20" required />
        </div>
        <div>
          <label htmlFor="depth">Enter Depth: </label>
          <input type='Number' placeholder='0' min="0" id="depth" name="depth" max="10" default="0"></input>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }
}

export default Searchbar;
