import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }

  .site-title {
    position: absolute;
    top: 32px;
  }

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
