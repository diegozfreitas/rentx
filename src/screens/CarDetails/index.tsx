import React from "react";
import { View, Text } from "react-native";

import { BackButton } from "../../components/BackButton";

import { Container, Header } from "./style";

export const CarDetails = () => {
  return (
    <Container>
      <Header>
        <Text>Oi</Text>
        <BackButton
          onPress={() => {
            console.log("oi");
          }}
        />
      </Header>
    </Container>
  );
};
