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
