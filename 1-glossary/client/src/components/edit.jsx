import React from "react";

class Edit extends React.Component {
  constructor(props) {
    super(props);


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
    // console.log(this.state.term);
    this.props.addTerm(word);
  }


  render() {
    if(this.props.editStatus) {

      return (
        <form onSubmit={this.handleSubmit}>
          <label>Edit Word
          <input type="text"
          // name="addTerm"
          // value={this.state.addTerm}
          onChange={this.handleChange} />
          </label>
          <label>Edit Definition
          <input type="text"
          // name="addDef"
          // value={this.state.addDef}
          onChange={this.handleChange} />
          </label>
          <input type="submit" value="Edit" />
        </form>
      )
    } else {return null;}
  }
}

export default Edit;

