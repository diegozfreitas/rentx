import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./style";

interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
  disabled?: boolean;
}

export const Button = ({ title, color, disabled = false, ...rest }: Props) => {
  return (
    <Container
      {...rest}
      color={color}
      disabled={disabled}
      style={{ opacity: disabled ? .5 : 1 }}
    >
      <Title>{title}</Title>
    </Container>
  );
};
