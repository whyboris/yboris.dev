import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/talks">Talks</Link>
      </li>
      <li>
        <Link to="/archive">Archive</Link>
      </li>
      <li>
        <a href="./BorisYakubchikResume2019.pdf">Resume</a>
      </li>
      <li>
        <a href="https://github.com/whyboris">GitHub</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
