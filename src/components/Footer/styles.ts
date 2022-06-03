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
  @media (max-width: 768px) {
    background-image: url('/assets/footer-mobile.png');
  }

  .container__content {
    height: 638px;
    flex-basis: 56.8%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    backdrop-filter: blur(3px);
    background: linear-gradient(
      270deg,
      rgba(29, 37, 39, 0.6) 0%,
      rgba(29, 37, 39, 0.6) 24.79%,
      rgba(29, 37, 39, 0.534) 54.48%,
      rgba(29, 37, 39, 0.006) 78.67%,
      rgba(29, 37, 39, 0) 100%
    );

    @media (max-width: 768px) {
      flex-basis: 100%;
      justify-content: flex-start;
      align-items: flex-end;
      height: 90vw;
      margin-bottom: 19rem;
      background: linear-gradient(
        270deg,
        rgba(29, 37, 39, 0.6) 15.42%,
        rgba(29, 37, 39, 0.552) 35.73%,
        rgba(29, 37, 39, 0.156) 78.67%,
        rgba(29, 37, 39, 0) 100%
      );
      backdrop-filter: blur(10.6679px);
    }

    button {
      width: 273px;
      height: 48px;
      background-color: transparent;
      border: 1px solid #ebeff2;
      border-radius: 4px;
      color: #ffffff;
      margin-top: 1rem;
      transition: filter 0.2s;
      margin-right: 15rem;
      &:hover {
        filter: brightness(0.8);
      }
      @media (max-width: 768px) {
        margin-right: 3rem;
        width: 193px;
        height: 40px;
        border: 0.627523px solid #ffffff;
        border-radius: 2.51009px;
        margin-top: 3.3rem;
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
      @media (max-width: 768px) {
        margin-right: 3rem;
        display: none;
      }
    }

    .title_mobile {
      display: none;
      text-align: right;
      font-weight: 400;
      font-size: 56px;
      line-height: 84px;
      color: #ffffff;
      @media (max-width: 768px) {
        display: block;
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 150%;
        text-align: right;
        color: #ffffff;
        padding: 0 3rem;
        padding-top: 4rem;
      }
    }
    .title_desktop {
      padding: 0 15rem;
      text-align: right;
      font-weight: 400;
      font-size: 56px;
      line-height: 84px;
      color: #ffffff;
      @media (max-width: 768px) {
        display: none;
        padding: 0 3rem;
      }
    }
    .paragraph_mobile {
      display: none;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      text-align: right;
      color: #ffffff;
      text-align: right;
      @media (max-width: 768px) {
        margin-right: 3rem;
        display: block;
        font-weight: 300;
        font-size: 16px;
        line-height: 32px;
        margin-top: 0.3rem;
      }
    }
  }
`;
