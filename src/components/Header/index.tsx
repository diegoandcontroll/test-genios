/* eslint-disable */
import { useState } from 'react';
import { FaUser, FaUserAlt } from 'react-icons/fa';
import { Nav, Logo, Hamburger, MenuLink, Menu, Banner } from './styles';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Nav>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <Logo>
            <img src="/assets/logo.svg" width="49" height="49" />
          </Logo>
          <MenuLink href="#">Home</MenuLink>
          <MenuLink href="#">Sobre</MenuLink>
          <MenuLink href="#">Tabela</MenuLink>
          <MenuLink href="#">Fale conosco</MenuLink>
          <MenuLink href="#">
            Entrar <FaUserAlt color={isOpen ? '#1D2527' : '#fff'} />
          </MenuLink>
        </Menu>
      </Nav>
      <Banner src="/assets/banner.png" />
    </>
  );
}
