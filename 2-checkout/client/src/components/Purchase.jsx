import React from "react";
import axios from "axios";


class Purchase extends React.Component {
  constructor(props) {
    super(props);

    this.purchase = this.purchase.bind(this);
  }

  purchase() {
    alert("Congrats on the Purchase!")
  }

  render() {
    let { stage, session_id } = this.props

    if (stage === 4) {
      return(
        <div>
          <button className='purchaseBtn'
            onClick={this.purchase}>
            Purchase
          </button>
        </div>
      )
    } else {
      return null;
    }
  }




}

export default Purchase;