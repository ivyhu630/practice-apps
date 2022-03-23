import React from "react";

class WordEntry extends React.Component {
  constructor(props) {
    super(props);


  }


  render() {
    console.log('passed to word entry',this.props.word);
    var {word} = this.props;
    const term = word.word;
    const definition = word.definition;
    return (
      <div>
        {term}:  {definition}
      </div>
    )
  }
}

export default WordEntry;

