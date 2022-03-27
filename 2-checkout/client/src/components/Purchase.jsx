import React from "react";
import axios from "axios";


class Purchase extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (this.state.stage === 4) {
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
        null;
      )
    }
  }




}

export default Purchase;