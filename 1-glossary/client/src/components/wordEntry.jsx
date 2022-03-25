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
        <div>
          <div className="wordEntry">
            <div className="wordLine">
              <div className="term">
              {term}:
              </div>
              <div>
              {definition}
              </div>
            </div>
            <div>
            <button name="editButton"
            className="btn btn-outline-info"
            onClick={this.toggleEdit}>
            {this.state.editStatus? 'Done':'...' }</button>
            </div>
            <div>
            <button name="deleteButton"
            className="btn btn-outline-danger"
            onClick={this.handleDelete}>
            Delete</button>
            </div>
          </div>
          <div className='editEntry'>
          <Edit
          word={word}
          editStatus={this.state.editStatus}
          editTerm={editTerm}/>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default WordEntry;

