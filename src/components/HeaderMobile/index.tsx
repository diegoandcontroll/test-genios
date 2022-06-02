/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-pattern */
import { IoClose } from 'react-icons/io5';
import { Container } from './styles';

interface HeaderMobileProps {
  menuIsVisible: boolean;
  setMenuIsVisible: ({}: boolean) => void;
}
export function HeaderMobile({
  menuIsVisible,
  setMenuIsVisible,
}: HeaderMobileProps) {
  return (
    <Container isVisible={menuIsVisible}>
      <IoClose
        size={45}
        onClick={() => setMenuIsVisible(false)}
        color="#ffffff"
      />
      <nav>
        <a href="#">Home</a>
        <a href="#">Sobre</a>
        <a href="#">Tabela</a>
        <a href="#">Fale conosco</a>
        <a href="#">Entrar</a>
      </nav>
    </Container>
  );
}
