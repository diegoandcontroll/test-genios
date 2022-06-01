/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
import styled from 'styled-components';

interface ContainerImageProps {
  imageAdjust: string;
}
export const Container = styled.div`
  width: 100%;
  height: 68vh;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerImage = styled.div`
  margin-left: 1rem;
`;

export const ContainerCard = styled.div<ContainerImageProps>`
  width: 280px;
  height: 240px;
  border-radius: 8px;
  padding: 1rem 1rem;
  margin-top: ${({ imageAdjust }) =>
    imageAdjust === '/assets/car3.png' ? '-1.3rem' : '-1rem'};
  margin-top: ${({ imageAdjust }) =>
    imageAdjust === '/assets/car2.png' ? '-0.25rem' : '-1rem'};
  border: 1px solid var(--primary);
  h2 {
    margin-top: 1rem;
    text-align: center;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    margin-left: 1rem;
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
  .icons {
    padding: 5px;
    span {
      padding-left: 10px;
      font-size: 16px;
      height: 24px;
      color: var(--primary);
    }
  }
`;
