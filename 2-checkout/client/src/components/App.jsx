import React from "react";
import axios from "axios";
import Login from "./Login.jsx";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 0,
      session_Id:''
    }

    // function bindings
    // this.fetch = this.fetch.bind(this);


    // this.fetch();
  }

  // fetch() {
  //   axios({
  //     method: 'get',
  //     url: '/users',
  //     data: {
  //       session_Id: this.state.session_Id
  //     }
  //   });
  // }


  render() {
    return(

    <div> Test
      <Login session_Id={this.state.session_Id}/>
      {/* <UserDetail />
      <Billing /> */}

    </div>
    )
  }




}

export default App;