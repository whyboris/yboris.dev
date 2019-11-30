import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;

      & + li {
        margin-left: 2rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    ul {
      margin-top: 40px;
    }
  }
`;
