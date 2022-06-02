/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container, ContainerInputs } from './styles';

Modal.setAppElement('#root');
interface TransActionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewModal({ isOpen, onRequestClose }: TransActionModalProps) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [vlMaxKm, setVlMaxKm] = useState('');
  const [noteEco, setNoteEco] = useState('');
  const [noteUser, setNoteUser] = useState('');
  const [link, setLink] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    setName('');
    setAge('');
    setVlMaxKm('');
    setNoteEco('');
    setNoteUser('');
    setLink('');
    onRequestClose();
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button">
        <img
          src="/assets/close.svg"
          alt=""
          onClick={onRequestClose}
          className="react-modal-close"
        />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Adicionar Novo</h2>
        <ContainerInputs>
          <div>
            <img src="/assets/upload.png" alt="" />
            <span style={{ marginTop: '50px' }}>Selecione imagem</span>
          </div>
          <div className="formcontrol">
            <label htmlFor="">Nome</label>
            <input
              type="text"
              placeholder="Lorem impsum"
              value={name}
              onChange={event => setName(event.target.value)}
            />
            <label htmlFor="">Ano</label>
            <input
              type="text"
              placeholder="Lorem impsum"
              value={age}
              onChange={event => setAge(event.target.value)}
            />
            <label htmlFor="">Velocidade Máxima Km/h</label>
            <input
              type="text"
              placeholder="Lorem impsum"
              value={vlMaxKm}
              onChange={event => setVlMaxKm(event.target.value)}
            />
            <label htmlFor="">Nota economia</label>
            <input
              type="text"
              placeholder="Lorem impsum"
              value={noteEco}
              onChange={event => setNoteEco(event.target.value)}
            />
            <label htmlFor="">Nota usuários</label>
            <input
              type="text"
              placeholder="Lorem impsum"
              value={noteUser}
              onChange={event => setNoteUser(event.target.value)}
            />
            <label htmlFor="">Link produto</label>
            <input
              type="text"
              placeholder="Lorem impsum"
              value={link}
              onChange={event => setLink(event.target.value)}
            />
            <div className="buttons">
              <span onClick={onRequestClose}>Cancelar</span>
              <button type="submit">Cadastrar</button>
            </div>
          </div>
        </ContainerInputs>
      </Container>
    </Modal>
  );
}