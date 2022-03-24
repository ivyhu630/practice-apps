import React from "react";
import Edit from "./edit.jsx";


class WordEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editStatus: false
    };

    this.toggleEdit = this.toggleEdit.bind(this);

  }

  toggleEdit() {
    this.setState({
      editStatus: !this.state.editStatus
    });
    console.log('edit staus changed to ', this.state.editStatus);
  }

  render() {
    // console.log('passed to word entry',this.props.word);
    var { word, searchTerm } = this.props;
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
          ...</button>
          <Edit editStatus={this.state.editStatus}/>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default WordEntry;

