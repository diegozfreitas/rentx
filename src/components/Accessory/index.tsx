import React from "react";
import { SvgProps } from "react-native-svg";
import { View, Text } from "react-native";

import { Container, Name } from "./style";

interface Props {
  name: string;
  icon: React.FC<SvgProps>;
}

export const Accessory = ({ name, icon: Icon }: Props) => {
  return (
    <Container>
      <Icon width={32} height={32} />
      <Name>{name}</Name>
    </Container>
  );
};
