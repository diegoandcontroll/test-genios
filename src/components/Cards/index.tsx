import { Container, ContainerCard, ContainerImage } from './styles';

const data = [
  {
    id: 1,
    image: '/assets/car.png',
    title: 'Mustang',
    age: '2015',
    totalKm: '180 KM/h',
    economicNote: '9/10',
    userNote: '8/10',
  },

  {
    id: 2,
    image: '/assets/car2.png',
    title: 'Mustang',
    age: '2015',
    totalKm: '180 KM/h',
    economicNote: '9/10',
    userNote: '8/10',
  },

  {
    id: 3,
    image: '/assets/car3.png',
    title: 'Mustang',
    age: '2015',
    totalKm: '180 KM/h',
    economicNote: '9/10',
    userNote: '8/10',
  },
];
export function Cards() {
  return (
    <Container>
      {data.map(item => (
        <div key={item.id}>
          <ContainerImage>
            <div>
              <img src={item.image} alt="" />
            </div>
          </ContainerImage>
          <ContainerCard imageAdjust={item.image}>
            <h2>{item.title}</h2>
            <div className="icons">
              <img src="/assets/calendar.svg" alt="" width={22} height={35} />
              <span>{` ${item.age}`}</span>
            </div>

            <div className="icons">
              <img src="/assets/max.svg" alt="" />
              <span>{` ${item.totalKm}`}</span>
            </div>

            <div className="icons">
              <img src="/assets/raio.svg" alt="" />
              <span>{` ${item.economicNote}`}</span>
            </div>

            <div className="icons">
              <img src="/assets/users.svg" alt="" />
              <span>{` ${item.userNote}`}</span>
            </div>
            <div className="button">
              <button type="button">
                <span>Ver carro</span>
              </button>
            </div>
          </ContainerCard>
        </div>
      ))}
    </Container>
  );
}
