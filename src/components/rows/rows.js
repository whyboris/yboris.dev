import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/rows/item';
import { Container } from './rows.css';

const Rows = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </Container>
);

Rows.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Rows;
