/* eslint-disable react/jsx-no-bind */
/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from 'react';
import { GlobalStyle } from '../../styles/global';
import { NewModal } from '../NewModal';
import { Table } from '../Table';
import { Container } from './styles';

export function TablePage() {
  const [modal, setModal] = useState(false);
  function toggleModal() {
    setModal(!modal);
  }
  return (
    <>
      <Container>
        <div>
          <h2>Lista</h2>
        </div>
        <div />
        <div>
          <button onClick={toggleModal}>
            <span>+ Adicionar novo</span>
          </button>
        </div>
      </Container>
      <Table />
      <NewModal isOpen={modal} onRequestClose={toggleModal} />
      <GlobalStyle />
    </>
  );
}
