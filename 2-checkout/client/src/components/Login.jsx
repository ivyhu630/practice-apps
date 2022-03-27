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
    }

    // function bindings
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }


  submit(e) {
    e.preventDefault();
    const user = { name: this.state.name, email: this.state.email, password: this.state.password, session_id: this.props.session_id, stage: this.props.stage }
    axios.post('/login', user)
    .then(({data}) => {
      let { isLoggedIn } = data;
      if (isLoggedIn) {
        this.setState({ isLoggedIn });
        this.props.nextStage();
      } else {
        alert('username and password did not match');
        this.setState({
        name: '',
        email: '',
        password: '',
        isLoggedIn: false,
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
            <button className="nextBtn"
            onClick={this.submit}
            >Submit</button>
        </form>
      </div>
      );
    } else { return null;}
  }




}

export default Login;