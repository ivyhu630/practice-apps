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
      words: [],
      searchTerm:'',
      wordSetEdit:{}
    }

    this.searchTerm = this.searchTerm.bind(this);
    this.addTerm = this.addTerm.bind(this);
    this.editTerm = this.editTerm.bind(this);
    this.deleteTerm = this.deleteTerm.bind(this);

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
  .catch((e) => {console.log(e)});
}

searchTerm(term) {
  if (term.length >0) {
    this.setState({
      searchTerm: term
    });
  }
}

deleteTerm(id) {
  // console.log('deleting ', id);
  axios.post('/delete', {id})
  .then(()=> {
    console.log('jerrr');
    return axios.get('/words')})
  .then(({data})=> {
    console.log('gerrr');
    this.setState({ words: data })
    })
  .catch((e) => {console.log(e)});

}


editTerm(wordSetEdit) {
  this.setState({ wordSetEdit }, () => {
    // console.log(this.state.wordSetEdit);
    axios.post('/edit', this.state.wordSetEdit)
    .then(()=> {
      return axios.get('/words')})
    .then(({data})=> {
      console.log('data received ', data);
      this.setState({ words: data })
      })
    .catch((e) => {console.log(e)});
    })
  }



addTerm(word) {
  axios.post('/words', word)
  .then(()=> {
    return axios.get('/words')})
  .then(({data})=> {
    this.setState({ words: data })
    })
  .catch((e) => {console.log(e)});
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
        editTerm={this.editTerm}
        deleteTerm={this.deleteTerm}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
