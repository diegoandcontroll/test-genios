import styled from 'styled-components';

interface ContainerImageProps {
  imageAdjust?: string;
}
export const Container = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 4rem;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 240px;
    height: 120px;
  }
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const ContainerCard = styled.div<ContainerImageProps>`
  width: 275px;
  height: 320px;
  padding: 0 1rem;
  border-radius: 20px;
  margin-top: -2rem;
  border: 1px solid var(--primary);
  @media (max-width: 768px) {
    flex-direction: column;
  }
  h2 {
    margin-top: 2rem;
    text-align: center;
  }
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    width: 200px;
    height: 30px;
    border: 1px solid var(--primary);
    border-radius: 15px;
    span {
      color: var(--primary);
      font-size: 16px;
      line-height: 32px;
    }
  }
  .button {
    display: flex;
    justify-content: center;
  }
  .icons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    span {
      padding-left: 10px;
      font-size: 16px;
      height: 24px;
      color: var(--primary);
    }
  }
`;
