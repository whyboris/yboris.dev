import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ children }) => <div className="box-div">{children}</div>;

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
