import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={name:'Miola',cname:'Miola',isn:false};}
    onClick = () => {
    this.setState({
      name: this.state.cname,
      isn:true
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {!this.state.isn ?
          <>
          <p>
            Tape your name
          </p>
          <input name="cName"  onChange={e => this.setState({cname: e.target.value})} />
          <div>
          <button onClick={this.onClick}>Submit</button>
        </div>
        </>
        :
         <p>
            Hello {this.state.name}
          </p>
        }
        </header>
      </div>
    );
  }
}

export default App;
