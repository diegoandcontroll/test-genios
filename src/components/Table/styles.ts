import styled from 'styled-components';

export const Container = styled.div`
  margin: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    thead {
      background-color: var(--primary);
      border: 1px solid #1d2527;
    }
    th {
      color: var(--white);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }
    td {
      padding: 1rem 2rem;
      border: 0;
      color: var(--primary);
      border-radius: 0.25rem;
    }
    svg {
      cursor: pointer;
    }
  }
`;
