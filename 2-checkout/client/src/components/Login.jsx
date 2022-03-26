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
      user_ID: '',
    }

    // function bindings
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  // check to see if email exist in users
    // if not, register the user and save sessionID
    // if exist check is password matches
    // pass the isLoggedIn to UserDetail for rendering
    // unrender current page

    // user exist - check put sessionID

  submit(e) {
    e.preventDefault();
    const user = { name: this.state.name, email: this.state.email, password: this.state.password}
    axios.post('/login', user)
    .then(({data}) => {
      console.log('data is ', data[0]);
      const [{ user_ID }] = data[0]
      const isLoggedIn = !!data[0].length;
      console.log('received ',isLoggedIn, 'userID is ', user_ID);
      this.setState({ isLoggedIn, user_ID })
    })
    .catch(err => console.log(err))
    ;
  }

  handleChange(e) {

    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return(

    <div className="login">
      <form onChange={this.handleChange}> Please login or register
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
          <button className="loginBtn"
          onClick={this.submit}
          >Submit</button>
      </form>
    </div>
    )
  }




}

export default Login;