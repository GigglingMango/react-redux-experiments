import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "@material-ui/core/es/Button/Button";
import {connect} from "react-redux";
import {addMessage} from './actions/helloWorld';

class App extends Component {
  render() {
      const {helloWorld} = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
          <div>
              <span>{helloWorld.message}</span>
          </div>
        <Button variant="contained" color="primary" onClick={this.handleClick}>
            Test
        </Button>
      </div>
    );
  }

  handleClick = () => {
      const {addMessage} = this.props;
    addMessage("Hello World!");
  };


}

const mapStateToProps = state => ({
    helloWorld: state.helloWorld
});
const mapDispatchToProps = {
    addMessage: (message) => addMessage(message)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
