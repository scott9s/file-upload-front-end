import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {files: []}
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  onSubmit() {
    this.state.files.map(f => console.log(f.name));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React - changed</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <section>
          <div className="dropzone">
            <Dropzone onDrop={this.onDrop.bind(this)}>
              <p>Drop it like it's hot</p>
            </Dropzone>
          </div>
        </section>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {
              this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
        <button type="button" onClick={() => this.onSubmit()}>
          Upload files
        </button>
      </div>
    );
  }
}

export default App;
