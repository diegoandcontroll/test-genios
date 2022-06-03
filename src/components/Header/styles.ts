/* eslint-disable indent */
/* eslint-disable operator-linebreak */
import styled, { css } from 'styled-components';

interface ContainerProps {
  bgContainer: string;
}
export const Container = styled.header<ContainerProps>`
  background: ${({ bgContainer }) => (bgContainer ? 'transparent' : '#1D2527')};
  padding: 14.5px 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ bgContainer }) =>
    bgContainer.length > 0 &&
    css`
      background-image: url('/assets/banner.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      @media (max-width: 768px) {
        background-image: url('/assets/bannerM.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100vw;
        height: 100vw;
      }
    `}
  svg {
    width: 38px;
    height: 38px;
    @media (max-width: 768px) {
      margin-right: 25rem;
    }
  }
  > section {
    display: flex;
    gap: 8rem;
    max-height: 96px;
    ${({ bgContainer }) =>
      bgContainer.length > 0 &&
      css`
        margin-bottom: 50rem;
        @media (max-width: 768px) {
          margin-bottom: 22rem;
        }

        gap: 8rem;
      `}
    &:last-child {
      gap: 1rem;
    }
    > img {
      width: 230px;
      cursor: pointer;
      @media (max-width: 720px) {
        display: none;
      }
    }
    > nav {
      display: flex;
      align-items: center;
      gap: 8rem;
      max-height: 96px;
      a {
        font-size: 20px;
        position: relative;
        color: var(--white);
        &:first-child {
          margin-left: 5rem;
        }
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
    .mobile {
      display: none;
    }
    @media (max-width: 900px) {
      .mobile {
        display: initial;
      }
      img {
        display: none;
      }
      > nav {
        display: none;
      }
    }
  }
  @media (max-width: 700px) {
    padding: 14.5px 16px;
  }
`;
