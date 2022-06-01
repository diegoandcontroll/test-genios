/* eslint-disable jsx-a11y/control-has-associated-label */
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { Container } from './styles';

export function Table() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Ano</th>
            <th>Velocidade máx Km/h</th>
            <th>Nota Economia</th>
            <th>Nota usuários</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nome</td>
            <td>Ano</td>
            <td>Velocidade máx Km/h</td>
            <td>Nota Economia</td>
            <td>Nota usuários</td>
            <td>
              <FaTrashAlt />
            </td>
            <td>
              <FaPencilAlt />
            </td>
          </tr>

          <tr>
            <td>Nome</td>
            <td>Ano</td>
            <td>Velocidade máx Km/h</td>
            <td>Nota Economia</td>
            <td>Nota usuários</td>
            <td>
              <FaTrashAlt />
            </td>
            <td>
              <FaPencilAlt />
            </td>
          </tr>

          <tr>
            <td>Nome</td>
            <td>Ano</td>
            <td>Velocidade máx Km/h</td>
            <td>Nota Economia</td>
            <td>Nota usuários</td>
            <td>
              <FaTrashAlt />
            </td>
            <td>
              <FaPencilAlt />
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
