import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Item = ({ title, copy, image, link, time }) => (
  <>
    <div className="row-container">
      <div>
        {link ? (
          <a href={link}>
            <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
          </a>
        ) : (
          <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
        )}
      </div>
      <div>
        <span className="item-title">
          {title}
          <span className="date">{time}</span>
        </span>
        <p className="item-description">{copy}</p>
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
