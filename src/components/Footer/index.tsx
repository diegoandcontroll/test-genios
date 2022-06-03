/* eslint-disable react/no-unescaped-entities */
import { Container } from './styles';

export function Footer() {
  return (
    <Container bg="/assets/footer.png">
      <div className="container__content">
        <h2>Mustang</h2>
        <p>
          O Ford Mustang é um automóvel desportivo produzido pela Ford Motor
          Company. O carro foi apresentado ao público em 17 de abril de 1964
          durante a New York World's Fair. O Mustang, apesar de ter sofrido
          grandes alterações ao longo dos anos é a mais antiga linha de
          automóveis da Ford.
        </p>

        <div>
          <button type="button">Ver Carro</button>
        </div>
      </div>
    </Container>
  );
}
