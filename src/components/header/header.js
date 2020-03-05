import React, { Component } from "react";

import Logo from "../../assets/facebook.svg";
import Account from "../../assets/account.svg";

import "./header.css";

class header extends Component {
  render() {
    return (
      <header>
        <img src={Logo} />
        <button>
          <label>Meu Perfil</label> <img src={Account} />
        </button>
      </header>
    );
  }
}

export default header;
