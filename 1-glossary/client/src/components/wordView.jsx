import React from "react";
import WordEntry from "./wordEntry.jsx";


class WordView extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <WordEntry />
      </div>
    )
  }
}

export default WordView;

