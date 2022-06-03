import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./style";

interface Props extends TouchableOpacityProps{
  title: string;
  color?: string;
}

export const ConfirmButton = ({ title, color, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
