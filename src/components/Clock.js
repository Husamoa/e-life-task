import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  static contextType = ThemeContext;

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }


  render() {
    const { time } = this.state;
    const { lightTheme } = this.context;
    const theme = !lightTheme ? ' darkmode' : '';
    return (
      <div className={`clock${theme}`}>
        <h1>
          {time}
        </h1>
      </div>
    );
  }
}
