import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Items = styled.div`
  width: 342px;
  background: #FFF;
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  ul {
    li {
      padding: 12px;
      display: flex;
      flex-direction: row;
      align-items: center;
      transition: all ease-in-out .3s;
      position: relative;

      &:nth-child(2n - 2) {
        background: #f2f1f1;
      }

      &:hover {
        background: #1cbcb4;

        div.avatar {
          img {
            border: 4px solid #FFF;
          }
        }

        div.info {
          span {
            color: #FFF;
          }

          small {
            color: #333;
            font-weight: 600;
          }
        }
      }

      div.avatar {
        img {
          border-radius: 50%;
          border: 4px solid #6bbef1;
          max-width: 55px;
          margin-right: 20px;
          transition: all ease-in-out .3s;
        }
      }

      div.info {
        display: flex;
        flex-direction: column;

        span {
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 4px;
          transition: all ease-in-out .3s;
        }

        small {
          font-weight: 400;
          font-size: 12px;
          color: #999;
          font-weight: 400;
          transition: all ease-in-out .3s;
        }
      }
    }
  }
`;
