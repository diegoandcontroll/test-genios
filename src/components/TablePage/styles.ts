import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  h2 {
    font-weight: 400;
    font-size: 56px;
    line-height: 84px;
  }

  button {
    width: 302px;
    height: 48px;
    border: 1px solid #1d2527;
    border-radius: 21px;
    padding: 8px, 72px, 8px, 72px;
    gap: 10px;
    background: transparent;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
