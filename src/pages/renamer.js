import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from 'components/layout';
import Box from 'components/box';

const Index = ({ data }) => {

  const renamerData = data.homeJson.renamer[0];

  return(

  <Layout>
    <Box>
      <h2>
        {renamerData.title}
      </h2>

      <div className="renamer-image" style={{ maxWidth: 740 + 'px' }}>
        <Img fluid={ renamerData.image.childImageSharp.fluid} alt={renamerData.title} />
      </div>

      <p className="description" style={{ lineHeight: 30 + 'px' }}>
        Rename your files directly or with your favorite text editor, making use of all your 1337 keyboard shortcuts
      </p>

      <p className="description">
        See the code on <a href={ renamerData.link }>GitHub</a>
      </p>

      <br />
      <br />

      <h3>
        Download
      </h3>

      <p className="description">
        <a href={ renamerData.downloads.win }>Windows</a>
        <span style={{ color: '#AAAAAA' }}>(47mb)</span>
      </p>

      <p className="description">
        <a href={ renamerData.downloads.winPortable }>Windows Portable</a>
        <span style={{ color: '#AAAAAA' }}>(43mb)</span>
      </p>

      <p className="description">
        <a href={ renamerData.downloads.mac }>Mac</a>
        <span style={{ color: '#AAAAAA' }}>(62mb)</span>
      </p>

      <p className="description">
        <a href={ renamerData.downloads.linux }>Linux</a>
        <span style={{ color: '#AAAAAA' }}>(72mb)</span>
      </p>

    </Box>

  </Layout>
)

};

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
