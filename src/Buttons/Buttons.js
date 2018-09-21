import React, { Component } from 'react';
import './Buttons.css';

class NextButton extends Component {
  render(){
    return (
      <a className="hvr-grow" href={"#" + this.props.next}><i class="fa fa-chevron-down hvr-icon"></i></a>
    )
  }
}
export default NextButton;
