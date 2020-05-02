import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Item = ({ title, copy, image, link }) => (
  <figure>
    <a href={link}>
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
      <figcaption>
        <span className="item-title">{title}</span>
        <p className="item-description">{copy}</p>
      </figcaption>
    </a>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
  link: PropTypes.string,
};

export default Item;
