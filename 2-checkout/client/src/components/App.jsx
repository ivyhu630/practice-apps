import React from "react";
import axios from "axios";
import Login from "./Login.jsx";
import UserDetail from "./UserDetail.jsx";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 0,
      session_id:'',
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
    console.log('next Stage!');
    var stage = this.state.stage + 1;
    this.setState({ stage });
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
    } else {
      return(
        <div>
          <Login
          stage={this.state.stage}
          nextStage={this.nextStage}
          session_id={this.state.session_id}/>
          <UserDetail
          stage={this.state.stage}
          nextStage={this.nextStage}
          session_id={this.state.session_id}/>
          {/* <UserDetail />
          <Billing /> */}
        </div>
      )
    }
  }




}

export default App;