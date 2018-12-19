import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img.logo {
    width: 100%;
    max-width: 165px;
    transition: all ease-in-out .4s;

    &:hover {
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
    }
  }
`;

export const Header = styled.header`
  width: 100%;
  max-width: 342px;
  display: flex;
  flex-direction: column;

  div.title {
    width: 100%;
    background: #FFF;
    margin-top: 25px;
    height: 65px;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      letter-spacing: -1.5px;
    }
  }
`;
