import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useCars } from '../../hooks/useCars';
import { Container, ContainerInputs } from './styles';

Modal.setAppElement('#root');
interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewModal({ isOpen, onRequestClose }: ModalProps) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [vlMax, setVlMax] = useState('');
  const [noteEco, setNoteEco] = useState('');
  const [noteUser, setNoteUser] = useState('');
  const [link, setLink] = useState('');
  const { createCars } = useCars();
  async function handleCreateNewCars(event: FormEvent) {
    event.preventDefault();
    await createCars({
      name,
      age,
      vlMax,
      noteEco,
      noteUser,
      image: link,
    });
    setName('');
    setAge('');
    setVlMax('');
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
      <Container onSubmit={handleCreateNewCars}>
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
              value={vlMax}
              onChange={event => setVlMax(event.target.value)}
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
