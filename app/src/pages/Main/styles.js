import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;

  img.logo {
    width: 100%;
    max-width: 165px;
    opacity: .6;
  }
`;

export const Header = styled.header`
  width: 100%;
  max-width: 400px;
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
