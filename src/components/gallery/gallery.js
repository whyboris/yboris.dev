import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';

const Gallery = ({ items }) => (
  <div className="gallery-div">
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </div>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
