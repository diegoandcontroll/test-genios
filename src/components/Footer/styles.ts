import styled from 'styled-components';

interface ContainerProps {
  bg: string;
}
export const Container = styled.div<ContainerProps>`
  height: 638px;
  background-image: url(${({ bg }) => bg || ''});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .container__content {
    height: 638px;
    flex-basis: 56.8%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    background: linear-gradient(
      270deg,
      rgba(29, 37, 39, 0.6) 0%,
      rgba(29, 37, 39, 0.6) 24.79%,
      rgba(29, 37, 39, 0.534) 54.48%,
      rgba(29, 37, 39, 0.006) 78.67%,
      rgba(29, 37, 39, 0) 100%
    );
    backdrop-filter: blur(3px);

    h2 {
      padding: 0 15rem;
      text-align: right;
      font-weight: 400;
      font-size: 56px;
      line-height: 84px;
      color: #ffffff;
    }
    button {
      width: 240px;
      margin-right: 15rem;
      background-color: transparent;
      height: 40px;
      border: 1px solid #ffffff;
      border-radius: 5px;
      color: #ffffff;
      margin-top: 1rem;
      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.8);
      }
    }

    p {
      margin-right: 15rem;
      padding: 1rem 0;
      font-weight: 300;
      font-size: 20px;
      text-align: right;
      color: #ffffff;
      text-align: right;
    }
  }
`;
