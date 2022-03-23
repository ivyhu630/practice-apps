import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  handleSubmit(e) {
    console.log(this.state.term);
    this.props.searchTerm(this.state.term);
  }




  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Search
        <input type="text"
        value={this.state.term}
        onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Search;

