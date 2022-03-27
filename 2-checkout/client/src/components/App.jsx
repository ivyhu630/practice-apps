import React from "react";
import axios from "axios";
import Login from "./Login.jsx";
import UserDetail from "./UserDetail.jsx";
import Billing from "./Billing.jsx";



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
  componentDidMount() {
    // find match for sessionID, get the stage
    axios.get('/users')
    .then((data) => {
      // if no match, state is 0
      const { session_id, stage } = data.data;
      this.setState({ session_id, stage })
    })
  }

  // handleSession(e) {
  //   // get the session_Id from cookie
  //   axios.get('/users')
  //   .then(({data}) => {
  //     this.setState({
  //       session_id: data,
  //       stage: 1
  //     })
  //   })
  // }

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
            onClick={this.nextStage}>
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
          <Billing
           stage={this.state.stage}
           session_id={this.state.session_id}/>
        </div>
      )
    }
  }




}

export default App;