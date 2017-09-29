import React, { Component } from 'react';

export default class TextControl extends Component {
  constructor(props) {
    super(props);

    this.onTextChange = this.onTextChange.bind(this);
    this.onUpdatePress = this.onUpdatePress.bind(this);
    this.state = { textValue: '' };
  }

  onTextChange(e) {
    this.setState({ textValue: e.target.value });
  }

  onUpdatePress() {
    this.props.onUpdate(JSON.parse(this.state.textValue));
  }

  render() {
    return (
      <div>
        <p>{'Please enter your data in a format like: { "result": { "<your_row_id>": { ...data } } }'}</p>
        <textarea 
          style={{ display: 'block', width: '100%' }} 
          rows="10" 
          onChange={this.onTextChange}
          value={this.state.textValue}
        />
        <button onClick={this.onUpdatePress}>Update Data</button>
      </div>
    )
  }
}