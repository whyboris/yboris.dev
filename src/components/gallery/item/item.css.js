import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 3rem 2rem 1.5rem;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;
  line-height: 30px;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
