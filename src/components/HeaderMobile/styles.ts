/* eslint-disable operator-linebreak */
import styled, { css } from 'styled-components';

interface ContainerProps {
  isVisible: boolean;
}
export const Container = styled.div<ContainerProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  background: rgb(29, 37, 39, 0.95);
  background: linear-gradient(
    34deg,
    rgba(235, 239, 242, 0.3) 0%,
    rgba(29, 37, 39, 0.5) 95%
  );
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
    }
  }
`;
