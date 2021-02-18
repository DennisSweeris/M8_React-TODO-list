import React, { Component } from "react";

class InputField extends Component {
  state = {
    input: "",
  };

  render() {
    const onInput = event => {
      this.setState({
        input: event.target.value,
      });
    };

    const onSubmit = event => {
      event.preventDefault();
      this.props.onSubmit(this.state.input);
      this.setState({
        input: "",
      });
    };

    return (
      <form onSubmit={onSubmit}>
        <input
          placeholder="Voer hier je boodschappen in"
          type="search"
          onChange={onInput}
          value={this.state.input}
          className="form-input"></input>
        <button type="submit" className="form_input-submit">
          Voeg Toe
        </button>
      </form>
    );
  }
}

export default InputField;
