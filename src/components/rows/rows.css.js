import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 4rem;
  padding: 0 4rem;
  margin: 2rem 0;

  .gatsby-image-wrapper {
    max-width: 400px;
    min-width: 300px;
    display: inline-block;
  }

  .row-container {
    display: flex;
  }

  .lol-one {
    width: 350px;
  }

  .lol-two {
    flex: 1;

    span {
      line-height: 30px;
    }
  }

  @media only screen and (max-width: 768px) {
    .gatsby-image-wrapper {
      min-width: calc(100vw - 120px);
    }
    .row-container {
      flex-direction: column !important;
    }
  }

  ${MEDIA.TABLET`
    display: block;
  `};
`;
