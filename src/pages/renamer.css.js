import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Stupid = styled.div`
  border: 0;
  box-shadow: none;

  * {
    box-shadow: none;
    border: 0;
  }
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;
  line-height: 30px;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
