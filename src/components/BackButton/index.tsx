import React from "react";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { Container } from "./style";

interface Props extends TouchableOpacityProps {
  color?: string;
}

export const BackButton = ({ color, ...rest }: Props) => {
  const theme = useTheme();
  return (
    <Container {...rest}>
      <>{/*@ts-ignore */}</>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
};
