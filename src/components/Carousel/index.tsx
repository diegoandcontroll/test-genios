/* eslint-disable no-redeclare */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { ReactNode } from 'react';
import Carousel, { ReactElasticCarouselProps } from 'react-elastic-carousel';

interface CarouselComponent extends ReactElasticCarouselProps {
  children?: ReactNode;
}
export function CarouselComponent({ children, ...rest }: CarouselComponent) {
  return <Carousel {...rest}>{children}</Carousel>;
}
