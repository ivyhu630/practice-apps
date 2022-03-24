import React from "react";
import WordEntry from "./wordEntry.jsx";


class WordView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { words,searchTerm, editTerm, deleteTerm } = this.props;
    console.log( 'words passed to wordView', words);
    return (
      <div>
        {words.map((word) =>
          <WordEntry
          searchTerm={searchTerm}
          editTerm={editTerm}
          deleteTerm={deleteTerm}
          word={word}/>

        )}
      </div>
    )
  }
}

export default WordView;

