import styled from 'styled-components';

interface MenuProps {
  isOpen: boolean;
}
export const Nav = styled.div`
  position: absolute;
  padding: 0 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  color: var(--white);
  width: 100%;
  height: 20vh;
`;
export const Banner = styled.img`
  width: 1350px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Logo = styled.a`
  padding: 1rem 0;
  color: var(--white);
`;

export const Hamburger = styled.div`
  margin-left: 4rem;
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding-right: 10em;
  span {
    height: 2px;
    width: 25px;
    background: #fff;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
    margin-top: 1rem;
  }
`;

export const Menu = styled.div<MenuProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '100vh' : '0')};
  }
`;

export const MenuLink = styled.a`
  margin-left: 6rem;
  padding: 0rem 2rem;
  color: var(--white);
  font-weight: 500;
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
  @media (max-width: 768px) {
    color: var(--primary);
  }
`;
