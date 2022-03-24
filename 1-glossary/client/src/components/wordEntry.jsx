import React from "react";
import Edit from "./edit.jsx";


class WordEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editStatus: false
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  toggleEdit() {
    this.setState({
      editStatus: !this.state.editStatus
    });
    console.log('edit staus changed to ', this.state.editStatus);
  }
  handleDelete() {
    this.props.deleteTerm(this.props.word._id);
  }

  render() {
    // console.log('passed to word entry',this.props.word);
    var { word, searchTerm, editTerm } = this.props;
    const term = word.word;
    const definition = word.definition;
    if (searchTerm === '' || term.toLowerCase().includes(searchTerm.toLowerCase())) {
      return (
        <div name="wordEntry">
          <div>
          {term}:  {definition}
          </div>
          <button name="editButton"
          onClick={this.toggleEdit}>
          {this.state.editStatus? 'Done':'...' }</button>
          <button name="deleteButton"
          onClick={this.handleDelete}>
          Delete</button>
          <Edit
          word={word}
          editStatus={this.state.editStatus}
          editTerm={editTerm}/>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default WordEntry;

