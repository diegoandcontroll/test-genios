import { Container } from './styles';

export function Footer() {
  return (
    <Container bg="/assets/footer.png">
      <div className="container__content">
        <h2 className="title_desktop">Mustang</h2>
        <h2 className="title_mobile">O que são</h2>
        <p className="paragraph_mobile">
          A sigla SUV significa Sport Utility Vehicle -- ou seja, veículo
          utilitário esportivo. As SUVs costumam ter porte avantajado, além de
          interior espaçoso e possibilidade de trafegar dentro e fora da cidade.
        </p>
        <p>
          O Ford Mustang é um automóvel desportivo produzido pela Ford Motor
          Company. O carro foi apresentado ao público em 17 de abril de 1964
          durante a New York World's Fair. O Mustang, apesar de ter sofrido
          grandes alterações ao longo dos anos é a mais antiga linha de
          automóveis da Ford.
        </p>

        <div>
          <button type="button">Ver Carros</button>
        </div>
      </div>
    </Container>
  );
}
