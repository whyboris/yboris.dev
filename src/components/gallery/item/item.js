import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from "gatsby-plugin-image";

const Item = ({ title, copy, image, link }) => (
  <figure>
    <a href={link}>
      <GatsbyImage image={image ? image.childImageSharp.gatsbyImageData : {}} alt={title} />
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
