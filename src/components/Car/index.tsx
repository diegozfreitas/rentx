import React from "react";
import { TouchableOpacityProps } from "react-native";

import GasolineSvg from "../../assets/gasoline.svg";

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from "./style";

import { CarDto } from "../../dtos/carDtos";

interface Props extends TouchableOpacityProps {
  data: CarDto;
}

export const Car = ({ data, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`RS ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>

      <CarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </Container>
  );
};
