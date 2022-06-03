import styled from 'styled-components';

export const Container = styled.form`
  background-color: var(--white);
  h2 {
    color: var(--primary);
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 2rem;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 5rem;

  span {
    font-size: 16px;
    line-height: 32px;
    color: #000000;
    cursor: pointer;
  }
  button[type='submit'] {
    margin-left: 1rem;
    width: 193px;
    padding: 0 1.5rem;
    height: 32px;
    background: var(--primary);
    color: var(--white);
    border-radius: 21px;
    border: 0;
    font-size: 16px;
    margin-top: 1.5rem;
    transition: filter 0.2s;
    font-weight: 500;
    line-height: 32px;
    &:hover {
      filter: brightness(0.9);
    }
  }
  .formcontrol {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    input {
      width: 323px;
      padding: 0 1.5rem;
      height: 40px;
      border: 1px solid #afafaf;
      border-radius: 6px;
      background: transparent;
      &::placeholder {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: var(--primary);
      }
      &:focus {
      }
    }
    label {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #808080;
    }
  }
`;
