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
      wordSetEdit:{},
      page: 0,
      pageSize: 10
    }

    this.searchTerm = this.searchTerm.bind(this);
    this.addTerm = this.addTerm.bind(this);
    this.editTerm = this.editTerm.bind(this);
    this.deleteTerm = this.deleteTerm.bind(this);
    this.fetch = this.fetch.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);

    this.fetch();
  }
  fetch() {
    let { page, pageSize } = this.state;
    axios.get('/words', { params: { page, pageSize } })
    .then(({data})=> {
      console.log('receiving ', data);
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
    axios.delete(`/words/${id}`)
    .then(() => {
      return this.fetch();
    })
    .then(({data}) => {
      this.setState({ words: data })
    })
    .catch((e) => {console.log(e)});
  }

  editTerm(wordSetEdit) {
    this.setState({ wordSetEdit }, () => {
      axios.put('/edit', this.state.wordSetEdit)
      .then(() => {
        return this.fetch();
      })
      })
  }

  addTerm(word) {
    axios.post('/words', word)
    .then(() => {
      return this.fetch();
    })
  }

  prevPage(e) {
    var page = this.state.page;
    if(page > 0) {
      page--;
      this.setState({ page }, () => {
        this.fetch();
      })
    }
  }

  nextPage(e) {
    var page = this.state.page;
    page++;
    this.setState({ page }, () => {
      this.fetch();
    })

  }


  render() {
    return (
      <div>
        <h1>The Hack Reactor Glossary</h1>
        <Add addTerm={this.addTerm}/>
        <Search searchTerm={this.searchTerm} />
        <WordView
        words={this.state.words}
        searchTerm={this.state.searchTerm}
        editTerm={this.editTerm}
        deleteTerm={this.deleteTerm}
        />
        <div className="pageBtn">
          <button
          className=" buttonGroup btn btn-primary"
          onClick={this.prevPage}
          name={"prevButton"}>prev</button>
          <button
          className=" buttonGroup btn btn-primary"
          onClick={this.nextPage}
          name={"nextButton"}>next</button>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
