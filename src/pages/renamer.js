import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';

import { Stupid } from './renamer.css';

// const renamerData = data.homeJson.renamer[0];

const Index = ({ data }) => (

  <Layout>
    <Box>
      <Title as="h2" size="large">
        Simplest File Renamer
      </Title>

      <Stupid>
        <Img fluid={ data.homeJson.renamer[0].image.childImageSharp.fluid} alt={data.homeJson.renamer[0].title} />
      </Stupid>

      <p className="description" style={{ lineHeight: 30 + 'px' }}>
        Rename your files directly or with your favorite text editor, making use of all your 1337 keyboard shortcuts
      </p>

      <p className="description">
        See the code on <a href={ data.homeJson.renamer[0].link }>GitHub</a>
      </p>

      <br />
      <br />

      <Title as="h3" size="large">
        Download
      </Title>

      <p className="description">
        <a href={ data.homeJson.renamer[0].downloads.win }>Windows</a> <span style={{ color: '#AAAAAA' }}>(47mb)</span>
      </p>

      <p className="description">
        <a href={ data.homeJson.renamer[0].downloads.winPortable }>Windows Portable</a> <span style={{ color: '#AAAAAA' }}>(43mb)</span>
      </p>

      <p className="description">
        <a href={ data.homeJson.renamer[0].downloads.mac }>Mac</a> <span style={{ color: '#AAAAAA' }}>(62mb)</span>
      </p>

      <p className="description">
        <a href={ data.homeJson.renamer[0].downloads.linux }>Linux</a> <span style={{ color: '#AAAAAA' }}>(72mb)</span>
      </p>

    </Box>

    { console.log(data) }

  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query RenamerQuery {
    homeJson {
      renamer {
        title
        copy
        link
        downloads {
          win
          winPortable
          mac
          linux
        }
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
