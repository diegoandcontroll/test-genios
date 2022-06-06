import { Container, ContainerCard, ContainerImage } from './styles';
import Carousel from 'react-elastic-carousel';
import { useCars } from '../../hooks/useCars';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 3 },
];
export function Cards() {
  const { cars } = useCars();
  return (
    <>
      <Container>
        <Carousel breakPoints={breakPoints}>
          {cars.map(item => (
            <div key={item.id}>
              <ContainerImage>
                <div>
                  <img
                    src={
                      item.image
                        ? item.image
                        : `/assets/cars/car${Math.floor(
                            Math.random() * 12
                          )}.png`
                    }
                    alt=""
                  />
                </div>
              </ContainerImage>
              <ContainerCard imageAdjust={item?.image}>
                <h2>{item.name}</h2>
                <div className="icons">
                  <img
                    src="/assets/calendar.svg"
                    alt=""
                    width={22}
                    height={35}
                  />
                  <span>{` ${item.age}`}</span>
                </div>

                <div className="icons">
                  <img src="/assets/max.svg" alt="" />
                  <span>{` ${item.vlMax}`}</span>
                </div>

                <div className="icons">
                  <img src="/assets/raio.svg" alt="" />
                  <span style={{ marginLeft: '5px' }}>
                    {` ${item.noteEco}`}
                  </span>
                </div>

                <div className="icons">
                  <img src="/assets/users.svg" alt="" />
                  <span style={{ marginLeft: '3px' }}>
                    {` ${item.noteUser}`}
                  </span>
                </div>
                <div className="button">
                  <button type="button">
                    <span>Ver carro</span>
                  </button>
                </div>
              </ContainerCard>
            </div>
          ))}
        </Carousel>
      </Container>
    </>
  );
}
