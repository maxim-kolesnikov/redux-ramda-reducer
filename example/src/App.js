import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { increment, decrement, setValue } from './redux/counter/actions';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Your value: <code>{value}</code>
          </p>
          <div id="buttons">

          </div>
        </header>
      </div>
    );
  }
}


const mapStateToProps = ({
  counter: {
    value,
  }
}) => ({ value });

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    setValue,
    increment,
    decrement,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
