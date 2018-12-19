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

        div.percentage {
          opacity: 1;
          visibility: visible;
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

      div.percentage {
        background: #FFF;
        position: absolute;
        left: calc(100% + 15px);
        display: flex;
        border-radius: 6px;
        pointer-events: none;
        opacity: 0;
        visibility: hidden;
        transition: all ease-in-out .4s;

        &:after {
          right: 100%;
          top: 50%;
          border: solid transparent;
          content: " ";
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
          border-color: rgba(136, 183, 213, 0);
          border-right-color: #FFF;
          border-width: 6px;
          margin-top: -6px;
        }

        div.percentage__positive {
          border-right: 1px solid #333;

          span {
            border-top-left-radius: 6px;
          }
        }

        div.percentage__negative {
          span {
            border-top-right-radius: 6px;
          }
        }

        div.percentage__negative,
        div.percentage__positive {
          width: 50%;
          min-width: 80px;
          display: flex;
          flex-direction: column;

          span {
            font-size: 8px;
            padding: 4px;
            background: #df595d;
            color: #FFF;
            white-space: nowrap;
            text-align: center;
            font-weight: bold;
            text-transform: uppercase;
          }

          big {
            padding: 4px;
            text-align: center;
            color: #909090;
            font-size: 16px;
            font-weight: bold;
          }
        }
      }
    }
  }
`;
