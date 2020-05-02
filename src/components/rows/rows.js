import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/rows/item';

const Rows = ({ items }) => (
  <div className="row-container">
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </div>
);

Rows.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Rows;
