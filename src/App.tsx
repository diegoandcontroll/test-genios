import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { Cards } from './components/Cards';
import { Footer } from './components/Footer';
import { useState } from 'react';
import { HeaderMobile } from './components/HeaderMobile';

function App() {
  const [menuIsVisible, setMenuIsVisable] = useState(false);
  return (
    <>
      <HeaderMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisable}
      />
      <Header setMenuIsVisible={setMenuIsVisable} bg="transparent" />
      <Cards />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
