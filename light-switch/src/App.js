import React from 'react';
import './App.css';

class LightSwitch extends React.Component {
  click = () => this.setState(({ on }) => ({ on: !on }));

  constructor(props) {
    super(props);
    this.state = { on: true };
  }

  render() {
    const state = this.state.on ? 'on' : 'off';
    const src = `https://learn.zybooks.com/content-tools/assets/images/lightswitch_${state}.jpg`;
    return (
      <button onClick={this.click}>
        <img src={src} alt="TEST" />
      </button>
    );
  }
}

function App() {
  return (
    <LightSwitch />
  );
}

export default App;
