import styled, { css } from 'styled-components';

interface ContainerProps {
  isVisible: boolean;
}
export const Container = styled.div<ContainerProps>`
  position: absolute;
  width: 270px;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 3px 0px 9px rgba(0, 0, 0, 0.15);
  border-radius: 0px 24px 24px 0px;
  opacity: 0;
  pointer-events: none;
  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    a {
      font-size: 20px;
      color: var(--primary);
      &:before {
        content: '';
        border-radius: 50px;
        bottom: 0px;
        position: absolute;
        width: 0%;
        height: 2px;
        background: var(--white);
        transition: 0.3s;
      }
      &:hover {
        &:before {
          width: 100%;
        }
      }
    }
  }
`;
