import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import Nav from 'components/header/nav';

// Component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0.5,
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title }) => (
  <AnimatedContainer>
    <header className="header-div">
      <Link to="/">
        <div className="site-title">
          {title}
        </div>
      </Link>

      <Nav />
    </header>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
