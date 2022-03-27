import React from "react";
import axios from "axios";
import Login from "./Login.jsx";
import UserDetail from "./UserDetail.jsx";
import Billing from "./Billing.jsx";
import Purchase from "./Purchase.jsx";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 0,
      session_id:'',
    }

    // function bindings
    this.nextStage = this.nextStage.bind(this);
    this.updateDBStage = this.updateDBStage.bind(this);


  }
  componentDidMount() {
    axios.get('/users')
    .then((data) => {
      const { session_id, stage } = data.data;
      this.setState({ session_id, stage })
    })
    .catch(err => console.log(err));
  }

  nextStage() {
    console.log('next Stage!');
    var stage = this.state.stage + 1;
    this.setState({ stage }, () => {
      this.updateDBStage(stage)
    });
  }

  updateDBStage(stage) {
    axios.put('/users/stage', {stage})
    .catch(err => console.log(err));
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
           nextStage={this.nextStage}
           session_id={this.state.session_id}/>
          <Purchase
           stage={this.state.stage}
           nextStage={this.nextStage}
           session_id={this.state.session_id}/>
        </div>
      )
    }
  }




}

export default App;