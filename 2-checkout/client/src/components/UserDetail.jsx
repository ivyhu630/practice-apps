import React from "react";
import axios from "axios";


class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: ''
    }

    // function bindings
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  submit(e) {
    e.preventDefault();
    const { address1 ,address2, city, state, zip, phone } = this.state
    const userInfo = { address1 ,address2, city, state, zip, phone,  session_id: this.props.session_id}
    axios.post('/users', userInfo)
    .then(({data}) => {
      console.log('saved ', data);
      this.props.nextStage();
    })
    .catch(err => console.log(err));
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    let { stage, session_id } = this.props
    if (stage === 2) {
      return(
      <div className="userDetail">
        <form onChange={this.handleChange}> Please fill out UserDetail
          <label>
            Address line 1:
            <input type="text" name="address1" value={this.state.address1}/>
          </label>
          <label>
            Address line 2:
            <input type="text" name="address2" value={this.state.address2}/>
          </label>
          <label>
            City:
            <input type="text" name="city"
            value={this.state.city}
            />
          </label>
          <label>
            State:
            <input type="text" name="state"
            value={this.state.state}
            />
          </label>
          <label>
            Zip:
            <input type="text" name="zip"
            value={this.state.zip}
            />
          </label>
          <label>
            Phone:
            <input type="text" name="phone"
            value={this.state.phone}
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

export default UserDetail;