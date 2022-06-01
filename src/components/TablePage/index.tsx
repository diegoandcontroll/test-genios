/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-useless-fragment */
import { GlobalStyle } from '../../styles/global';
import { Table } from '../Table';
import { Container } from './styles';

export function TablePage() {
  return (
    <>
      <Container>
        <div>
          <h2>Lista</h2>
        </div>
        <div />
        <div>
          <button>
            <span>+ Adicionar novo</span>
          </button>
        </div>
      </Container>
      <Table />
      <GlobalStyle />
    </>
  );
}
