import React from "react";
import WordEntry from "./wordEntry.jsx";


class WordView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { words,searchTerm } = this.props;
    console.log( 'words passed to wordView', words);
    return (
      <div>
        {words.map((word) =>
          <WordEntry
          searchTerm={searchTerm}
          word={word}/>

        )}
      </div>
    )
  }
}

export default WordView;

