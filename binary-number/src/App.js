import React from 'react';
import './App.css';

class Bit extends React.Component {
  click = () => {
    this.setState(({ on }) => {
      const value = (on ? -1 : 1) * this.props.value;
      this.props.onChange(value);

      return { on: !on };
    });
  };

  constructor(props) {
    super(props);
    this.state = { on: false };
  }

  render() {
    return <div className="bit-container">
      <button onClick={this.click}>{this.state.on ? 1 : 0}</button>
      <div>2<sup>{this.props.exponent}</sup></div>
      <div>{this.props.value}</div>
    </div>
  }
}

class BinaryNumber extends React.Component {
  change = value =>
    this.setState(({ sum }) => ({ sum: sum + value }));

  constructor(props) {
    super(props);
    this.state = { sum: 0 };
  }

  render() {
    const exponents = [ 7, 6, 5, 4, 3, 2, 1, 0 ];
    return (
      <div className="binary-number">
        {exponents.map(e => <Bit
                              exponent={e}
                              key={e}
                              onChange={this.change}
                              value={2 ** e} />)}
        <div className="decimal-container">
          <div className="sum">{this.state.sum}</div>
          <span>(decimal value)</span>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <BinaryNumber />
  );
}

export default App;
