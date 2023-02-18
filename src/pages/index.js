import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Gallery from 'components/gallery';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <h2>
        Software
      </h2>
      <p className="description">
        Download for Windows, Mac, and Linux.
      </p>
    </Box>
    <Gallery items={data.homeJson.software} />

    <Box>
      <h2>
        Data Visualization
      </h2>
      <p className="description">
        Interactive data visualization.
      </p>
    </Box>
    <Gallery items={data.homeJson.dataviz} />

    <Box>
      <h2>
        Games
      </h2>
      <p className="description">
        Game development.
      </p>
    </Box>
    <Gallery items={data.homeJson.games} />

    <Box>
      <h2>
        Pro bono
      </h2>
      <p className="description">
        Volunteer work to help a nonprofit or cause.
      </p>
    </Box>
    <Gallery items={data.homeJson.probono} />

    <Box>
      <h2>
        Developer Tools
      </h2>
      <p className="description">
        Various tools other developers can use.
      </p>
    </Box>
    <Gallery items={data.homeJson.devTools} />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      software {
        title
        copy
        link
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
      dataviz {
        title
        copy
        link
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
      games {
        title
        copy
        link
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
      probono {
        title
        copy
        link
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
      devTools {
        title
        copy
        link
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
