import React from "react";
import WordEntry from "./wordEntry.jsx";


class WordView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {words} = this.props;
    console.log( 'words passed to wordView', words);
    return (
      <div>
        {/* <WordEntry word={words}/> */}
        {words.map((word) =>
          <WordEntry word={word}/>
        )}
      </div>
    )
  }
}

export default WordView;

