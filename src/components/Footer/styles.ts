import styled from 'styled-components';

interface ContainerProps {
  bg: string;
}
export const Container = styled.div<ContainerProps>`
  margin-top: 4rem;
  height: 540px;
  background-image: url(${({ bg }) => bg || ''});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  h2 {
    text-align: right;
    font-weight: 400;
    font-size: 56px;
    line-height: 84px;
    color: #ffffff;
    filter: blur(0);
  }
  button {
    width: 240px;
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
    font-weight: 300;
    font-size: 20px;
    text-align: right;
    color: #ffffff;
    filter: blur(none);
  }
  .container__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-basis: 52%;
    align-items: center;
    margin-top: 7rem;
  }
`;
