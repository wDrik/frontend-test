import React, { Component } from 'react';

import logo from '../../assets/img/logo.png';

import { Header, Container } from "./styles";

class Main extends Component {
  render() {
    return(
      <Container>
        <Header>
          <img src={ logo } className="logo" alt="Github" />
          <div className="title">
            <h1>ranking</h1>
          </div>
        </Header>
      </Container>
    );
  }
}

export default Main;
