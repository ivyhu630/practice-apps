import React from "react";
import axios from "axios";


class Billing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card_number: '',
      expiration: '',
      CVV: '',
      billing_zip: ''
      // billing_user_ID: ''
    }

    // function bindings
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  submit(e) {
    e.preventDefault();
    const { card_number, expiration, CVV, billing_zip } = this.state
    const userInfo = { card_number, expiration, CVV, billing_zip,  session_id: this.props.session_id}
    axios.post('/users/billing', userInfo)
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
    if (stage === 3) {
      return(
      <div className="billing">
        <form onChange={this.handleChange}> Please fill out billing detail
          <label>
          card_number:
            <input type="text" name="card_number" value={this.state.card_number}/>
          </label>
          <label>
          expiration:
            <input type="text" name="expiration" value={this.state.expiration}/>
          </label>
          <label>
          CVV:
            <input type="text" name="CVV"
            value={this.state.CVV}
            />
          </label>
          <label>
          billing_zip:
            <input type="text" name="billing_zip"
            value={this.state.billing_zip}
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

export default Billing;