import React from "react";
import axios from "axios";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      isLoggedIn: false,
      user_ID: ''
    }

    // function bindings
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }


  submit(e) {
    e.preventDefault();
    const user = { name: this.state.name, email: this.state.email, password: this.state.password}
    axios.post('/login', user)
    .then(({data}) => {
      let { user_ID, isLoggedIn } = data;
      // console.log('received ', data);
      if (isLoggedIn) {
        this.setState({ user_ID, isLoggedIn });
      } else {
        alert('username and password did not match');
        this.setState({
        name: '',
        email: '',
        password: '',
        isLoggedIn: false,
        user_ID: ''
        })
      }
    })
    .catch(err => console.log(err));
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    let { stage, session_id } = this.props
    // render if stage is 1
    if (stage === 1) {
      return(
      <div className="login">
        <form onChange={this.handleChange}> Please login or register
          <label>
            Name:
            <input type="text" name="name" value={this.state.name}/>
          </label>
          <label>
            Email:
            <input type="text" name="email"
            value={this.state.email}
            />
          </label>
          <label>
            Password:
            <input type="text" name="password"
            value={this.state.password}
            />
          </label>
            <button className="loginBtn"
            onClick={this.submit}
            >Submit</button>
        </form>
      </div>
      );
    } else { return null;}
  }




}

export default Login;