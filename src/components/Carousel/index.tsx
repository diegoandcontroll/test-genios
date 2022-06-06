/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode } from 'react';
import { ReactElasticCarouselProps } from 'react-elastic-carousel';

interface CarouselProps extends ReactElasticCarouselProps {
  children: ReactNode;
}
export function Carousel({ children, ...rest }: CarouselProps) {
  return <Carousel {...rest}>{children}</Carousel>;
}
