/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-pattern */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { RiMenu3Fill } from 'react-icons/ri';

interface HeaderProps {
  setMenuIsVisible: ({}: boolean) => void;
  bg: string;
}
export function Header({ setMenuIsVisible, bg }: HeaderProps) {
  const backgroung = bg;
  return (
    <>
      <Container bgContainer={backgroung}>
        <section>
          <Link to="/" className="logo">
            <img src="/assets/logo.svg" alt="Logo" width={49} height={49} />
          </Link>

          <nav>
            <Link to="/">Home</Link>
            <a href="#">Sobre</a>
            <Link to="/table">Tabela</Link>
            <a href="#">Fale conosco</a>
            <a href="#" className="sign">
              <span>
                Entrar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src="/assets/user.svg" alt="" width={20} height={20} />
              </span>
            </a>
          </nav>
        </section>
        <section>
          <RiMenu3Fill
            className="mobile"
            color="#fff"
            onClick={() => setMenuIsVisible(true)}
          />
        </section>
      </Container>
    </>
  );
}
