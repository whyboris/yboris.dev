import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;

  span {
    color: #666666;
    margin-left: 10px;
    font-size: 12px;
  }
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;
  line-height: 28px;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;

