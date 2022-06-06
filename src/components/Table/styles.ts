import styled from 'styled-components';

export const Container = styled.div`
  margin: 4rem;
  @media (max-width: 768px) {
    overflow-x: auto;
    margin: 0;
    margin-top: 1rem;
  }
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    @media (max-width: 768px) {
      overflow-x: hidden;
    }
    thead {
      background-color: var(--primary);
      border-radius: 6px !important;
      @media (max-width: 768px) {
        overflow-x: auto;
      }
    }
    th {
      color: var(--white);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
      @media (max-width: 768px) {
        overflow-x: auto;
      }
    }
    td {
      padding: 1rem 2rem;
      border: 0;
      color: var(--primary);
      border-radius: 0.25rem;
      @media (max-width: 768px) {
        overflow-x: auto;
      }
    }
    svg {
      cursor: pointer;
    }
  }
`;
