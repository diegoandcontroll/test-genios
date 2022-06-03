/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { useCars } from '../../hooks/useCars';
import { Container } from './styles';

export function Table() {
  const { cars } = useCars();
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
          {cars &&
            cars.map(car => (
              <tr key={car.id}>
                <td>{car.name}</td>
                <td>{car.age}</td>
                <td>{car.vlMax}</td>
                <td>{car.noteEco}</td>
                <td>{car.noteUser}</td>
                <td>
                  <FaTrashAlt />
                </td>
                <td>
                  <FaPencilAlt />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
}
