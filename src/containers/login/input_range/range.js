import React, {Component} from 'react';
import './range.css';

class Range extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 50
    }
  }

  changeValue(e) {
    this.setState({
      value: e.currentTarget.value
    });
  };

  render() {
    return (
        <div className='container-range'>
          <div id="square"></div>
          <div className="slidecontainer">
            <input
                className="slider"
                type="range"
                name="quantity"
                min="0" max="100"
                onInput={this.changeValue.bind(this)}
                value={this.state.value}
            />
          </div>
          <div id="square-r"></div>
        </div>
    );
  }
}

export default Range;