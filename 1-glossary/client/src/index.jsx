import React from "react";
import Search from "./components/search.jsx";
import WordView from "./components/wordView.jsx";
import { render } from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [{word:'test', definition:'def'}],
      searchTerm:''
    }

    this.searchTerm = this.searchTerm.bind(this);

  }

searchTerm(term) {
  if (term.length >0) {
    this.setState({
      searchTerm: term
    });
    alert('you search for '+ this.state.searchTerm);
  }
}


  render() {
    return (
      <div>
        <p>Hello, World!</p>
        <Search searchTerm={this.searchTerm}/>
        <WordView />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
