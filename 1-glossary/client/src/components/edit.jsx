import React from "react";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordChange: this.props.word.word,
      defChange: this.props.word.definition
    };

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
    let newWord = {word: this.state.wordChange,
      definition: this.state.defChange};
    let oldWordID = this.props.word._id;
    this.props.editTerm({ newWord, oldWordID });
  }


  render() {
    var { word } = this.props;

    if(this.props.editStatus) {
      return (
        <form
        className="editDetail"
        onSubmit={this.handleSubmit}>
          <label>Edit Word
          <input type="text"
          className="form-control"
          name="wordChange"
          value={this.state.wordChange}
          onChange={this.handleChange} />
          </label>
          <label>Edit Definition
          <input type="text"
          className="form-control"
          name="defChange"
          value={this.state.defChange}
          onChange={this.handleChange} />
          </label>
          <input
          className="btn btn-outline-warning"
          type="submit" value="Edit" />
        </form>
      )
    } else {return null;}
  }
}

export default Edit;

