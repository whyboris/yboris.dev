import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from 'components/layout';
import Box from 'components/box';

const Index = ({ data }) => {

  const gravityWarsData = data.homeJson.gravitywars[0];

  return (
    <Layout>
      <Box>
        <h2>{gravityWarsData.title}</h2>

        <div className="renamer-image" style={{ maxWidth: 446 + 'px' }}>
          <GatsbyImage
            image={gravityWarsData.image.childImageSharp.gatsbyImageData}
            alt={gravityWarsData.title}
          />
        </div>

        <p className="description" style={{ lineHeight: 30 + 'px' }}>
          I wrote this in 2008 while learning how to code. It works well-enough
          even on Windows 10.
        </p>

        <p className="description">
          In 2020 I ported the old code to the Lua-based{' '}
          <a href="https://love2d.org/">Löve2D</a>. See the new code on{' '}
          <a href={gravityWarsData.link}>GitHub</a>
        </p>

        <br />
        <br />

        <h3>Download</h3>

        <p className="description">
          <a href={gravityWarsData.downloads.executable}>Windows executable</a>{' '}
          <span style={{ color: '#AAAAAA' }}>
            (Microsoft .NET Framework 3.5 required)
          </span>
        </p>

        <br />
        <br />

        <h3>Code</h3>

        <p className="description">
          <a href={gravityWarsData.downloads.sourceCode}>
            Microsoft Visual C++ 2008
          </a>{' '}
          <span style={{ color: '#AAAAAA' }}>(It's a decade old!)</span>
        </p>

        <br />
        <br />

        <h3>About</h3>

        <p className="description" style={{ lineHeight: 30 + 'px' }}>
          Gravity Wars is not my original idea. I played a 1992 MAC version of
          this game with my friend and thought it fun. From my brief
          correspondence with the creator (Rhys Hollow) of the version for
          Macintosh I learned the original game was written for Amiga (and not
          by him). Since all the versions I could find online that would work on
          PC were unsatisfying I decided to re-make the game myself. Not being a
          programmer (having only taken a college level course in Java) I went
          for the easiest route: library bookshelf. I found Visual C++ to be the
          easiest approach (as it created the windows file menu automatically)
          and began to code. About a month later, after agony, tears, and much
          help from mIRC and the online forums community I had a working version
          of the game.
        </p>

      </Box>
    </Layout>
  );

};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query GravityWarsQuery {
    homeJson {
      gravitywars {
        title
        link
        downloads {
          executable
          sourceCode
        }
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
