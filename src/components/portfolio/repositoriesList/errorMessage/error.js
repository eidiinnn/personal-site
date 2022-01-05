import { BiError } from "react-icons/bi";
import React, { Component } from "react";
import "./errorMessage.css"

export default class Error extends Component{
  render() {
    return (
      <div className="errorMessage-div">
        <BiError className="errorMessage-icon" />
        <div className="errorMessage-Text">Não foi possível carregar os repositórios</div>
      </div>
    );
  }
}
