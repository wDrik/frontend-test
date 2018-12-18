import React from 'react';
import PropTypes from 'prop-types';

import { Container, Items } from './styles';

const List = ({ users }) => (
  <Container>
    <Items>
      <ul>
        {users.map(user => (
          <li key={user.__id}>
            <div className="avatar">
              <img src={user.picture} alt="Avatar" />
            </div>
            <div className="info">
              <span>{user.name}</span>
              <small>{user.description}</small>
            </div>
          </li>
        ))}
      </ul>
    </Items>
  </Container>
);

List.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      picture: PropTypes.string,
      description: PropTypes.string,
      positive: PropTypes.number,
      negative: PropTypes.number,
    })
  )
}

export default List;
