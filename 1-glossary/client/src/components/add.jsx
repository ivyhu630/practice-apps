import React from "react";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addTerm: '',
      addDef: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    event.preventDefault();
    let word = {word: this.state.addTerm,
      definition: this.state.addDef};
    this.props.addTerm(word);
    this.setState({
      addTerm: '',
      addDef: ''
    });
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Add Word
        <input type="text"
        name="addTerm"
        value={this.state.addTerm}
        onChange={this.handleChange} />
        </label>
        <label>Add Definition
        <input type="text"
        name="addDef"
        value={this.state.addDef}
        onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add" />
      </form>
    )
  }
}

export default Add;

