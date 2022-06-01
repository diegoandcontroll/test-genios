/* eslint-disable import/order */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-parens */
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { FaCalendar } from 'react-icons/fa';
import { Container, ContainerCard, ContainerImage } from './styles';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaCalendar } from 'react-icons/fa';

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
            <img src={item.image} alt="" />
          </ContainerImage>
          <ContainerCard imageAdjust={item.image}>
            <h2>{item.title}</h2>
            <div className="icons">
              <FaCalendar /> <span>{` ${item.age}`}</span>
            </div>

            <div className="icons">
              <FaCalendar /> <span>{` ${item.totalKm}`}</span>
            </div>

            <div className="icons">
              <FaCalendar /> <span>{` ${item.economicNote}`}</span>
            </div>

            <div className="icons">
              <FaCalendar /> <span>{` ${item.userNote}`}</span>
            </div>
            <button type="button">
              <span>Ver carro</span>
            </button>
          </ContainerCard>
        </div>
      ))}
    </Container>
  );
}
