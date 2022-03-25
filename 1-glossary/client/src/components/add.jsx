import React from "react";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addTerm: '',
      addDef: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    event.preventDefault();
    let word = {word: this.state.addTerm,
      definition: this.state.addDef};
    this.props.addTerm(word);
    this.setState({
      addTerm: '',
      addDef: ''
    });
  }



  render() {
    return (
      <div className="row g-2 addEntry">
        <form onSubmit={this.handleSubmit}>
          <div className="col-md">
          <label>Add Word
          <input type="text"
          id="floatingInput"
          className="form-control"
          name="addTerm"
          value={this.state.addTerm}
          onChange={this.handleChange} />
          </label>
          <label>Add Definition
          <input type="text"
          className="form-control"
          name="addDef"
          value={this.state.addDef}
          onChange={this.handleChange} />
          </label>
          <input
          className="btn btn-outline-success"
          type="submit" value="Add" />
          </div>
        </form>
      </div>
    )
  }
}

export default Add;

