import React, { Component } from 'react';
import { Header, Container } from "./styles";

import logo from '../../assets/img/logo.png';
import List from '../../components/List';
import Json from '../../matchboxbrasil.json';

class Main extends Component {
  state = {
    users: []
  }

  async componentWillMount() {
    const { data } = Json;

    data.forEach((user, index) => {
      let percentagePositive = (((user.positive - user.negative) / user.positive) * 100);
      let percentageNegative = (((user.negative - user.positive) / user.negative) * 100);

      if (percentageNegative < 0) percentageNegative = 100 - percentagePositive;
      if (percentagePositive < 0) percentagePositive = 100 - percentageNegative;

      data[index].percentagePositive = parseFloat(percentagePositive.toFixed(2));
      data[index].percentageNegative = parseFloat(percentageNegative.toFixed(2));
    });

    data.sort((a, b) => a.percentageNegative - b.percentageNegative);

    await this.setState({ users: data });
  }

  render () {
    return (
      <Container>
        <Header>
          <img src={ logo } className="logo" alt="Github" />
          <div className="title">
            <h1>ranking</h1>
          </div>
        </Header>

        <List users={ this.state.users } />
      </Container>
    );
  }
}

export default Main;
