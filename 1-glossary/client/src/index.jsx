import React from "react";
import Search from "./components/search.jsx";
import Add from "./components/add.jsx";
import WordView from "./components/wordView.jsx";
import { render } from "react-dom";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [{word:'test', definition:'def'}],
      searchTerm:''
    }

    this.searchTerm = this.searchTerm.bind(this);
    this.addTerm = this.addTerm.bind(this);

  }
componentDidMount() {
  console.log('reloading');
  axios.get('/words')
  .then(({data})=> {
    console.log('data received ', data);
    this.setState({
      words: data
    })
  })
}

searchTerm(term) {
  if (term.length >0) {
    this.setState({
      searchTerm: term
    });
    // alert('you search for '+ this.state.searchTerm);
  }
}

addTerm(word) {
  axios.post('/words', word)
  .then(()=> {
    return axios.get('/words')
  .then(({data})=> {
    console.log('data received ', data);
    this.setState({
      words: data
    })
  })
  })

  // console.log(word);
}



  render() {
    return (
      <div>
        <p>Hello, World!</p>
        <Add addTerm={this.addTerm}/>
        <Search searchTerm={this.searchTerm} />
        <WordView
        words={this.state.words}
        searchTerm={this.state.searchTerm}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
