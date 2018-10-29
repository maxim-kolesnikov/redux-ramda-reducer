import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { increment, decrement, setValue } from '../redux/counter/actions';

import logo from '../assets/logo.svg';
import './styles.css';

class App extends Component {
  state = {
    inputValue: 100,
  }

  render() {
    const { value } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Your value: <code>{value}</code>
          </p>
          <div>
            <div className="button" onClick={() => this.props.decrement()}>Decriment</div>
            <div className="button" onClick={() => this.props.increment()}>Increment</div>
          </div>
          <div className="flexWrapper">
            <input
              type='number'
              className="input-phone"
              value={this.state.inputValue}
              onChange={(e) => {
                this.setState({ inputValue: e.target.value })}
              }
            />
            <div className="button" onClick={() => this.props.setValue({ value: this.state.inputValue })}>Set value</div>
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
