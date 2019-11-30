import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';

const Item = ({ title, copy, image, link, time }) => (
  <>
    <div className="row-container">
      <div className="lol-one">
        {link ? (
          <a href={link}>
            <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
          </a>
        ) : (
          <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
        )}
      </div>
      <div className="lol-two">
        <Title>{title}<span className="date">{ time }</span></Title>
        <Copy>{copy}</Copy>
      </div>
    </div>
  </>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
  link: PropTypes.string,
  // time: PropTypes.sttring,
};

export default Item;
