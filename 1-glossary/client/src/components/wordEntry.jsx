import React from "react";

class WordEntry extends React.Component {
  constructor(props) {
    super(props);


  }


  render() {
    // console.log('passed to word entry',this.props.word);
    var { word, searchTerm } = this.props;
    const term = word.word;
    const definition = word.definition;
    if (searchTerm === '' || term.toLowerCase().includes(searchTerm.toLowerCase())) {
      return (
        <div>
          {term}:  {definition}
        </div>
      )
    } else {
      return null;
    }

  }
}

export default WordEntry;

