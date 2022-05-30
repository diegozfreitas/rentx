import React from "react";
import { View, Text } from "react-native";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import { Container, Header, CarImages } from "./style";

export const CarDetails = () => {
  return (
    <Container>
      <Header>
        <BackButton
          onPress={() => {
            console.log("oi");
          }}
        />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2022/202203/20220302/AUDI-A5-1.8-TFSI-SPORTBACK-AMBIENTE-16V-GASOLINA-4P-MULTITRONIC-wmimagem15222229826.jpg",
          ]}
        />
      </CarImages>
    </Container>
  );
};
