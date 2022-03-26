import React from "react";
import axios from "axios";
import Login from "./Login.jsx";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 0,
      session_id:''
    }

    // function bindings
    this.handleSession = this.handleSession.bind(this);
    this.nextStage = this.nextStage.bind(this);


    // this.fetch();
  }

  handleSession(e) {
    // get the session_Id from cookie
    axios.get('/users')
    .then(({data}) => {
      this.setState({
        session_id: data,
        stage: 1
      })
    })
  }

  nextStage() {
    this.setState({
      stage: this.state.stage++
    })
  }


  render() {
    if (this.state.stage === 0) {
      return(
        <div>
          <button className='checkOutBtn'
            onClick={this.handleSession}>
            Checkout
          </button>
        </div>
      )
    }
    if (this.state.stage === 1) {
      return(
        <div>
          <Login
          stage={this.state.stage}
          session_id={this.state.session_id}/>
          {/* <UserDetail />
          <Billing /> */}
        </div>
      )
    }
    if (this.state.stage === 2) {
      return(
        <div>
          <UserDetail
          stage={this.state.stage}
          session_id={this.state.session_id}/>
          {/* <UserDetail />
          <Billing /> */}
        </div>
      )
    }





  }




}

export default App;