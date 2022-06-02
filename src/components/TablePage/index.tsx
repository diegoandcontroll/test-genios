import { useState } from 'react';
import { GlobalStyle } from '../../styles/global';
import { Header } from '../Header';
import { HeaderMobile } from '../HeaderMobile';
import { NewModal } from '../NewModal';
import { Table } from '../Table';
import { Container } from './styles';

export function TablePage() {
  const [modal, setModal] = useState(false);
  const [menuIsVisible, setMenuIsVisable] = useState(false);
  function toggleModal() {
    setModal(!modal);
  }
  return (
    <>
      <HeaderMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisable}
      />
      <Header setMenuIsVisible={setMenuIsVisable} bg="" />
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
