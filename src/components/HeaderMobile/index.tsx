import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
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
        color="#1D2527"
      />
      <nav>
        <a href="#">
          <img src="/assets/logo2.svg" alt="Logo" width={49} height={49} />
        </a>
        <Link to="/">Home</Link>
        <a href="#">Sobre</a>
        <Link to="/table">Tabela</Link>
        <a href="#">Fale conosco</a>
        <a href="#">Entrar</a>
      </nav>
    </Container>
  );
}
