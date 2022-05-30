import React from "react";
import { StatusBar, FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";

import { Container, Header, HeaderContent, TotalCars } from "./styles";

import { Car } from "../../components/Car";

export const Home = () => {
  const data = {
    brand: "Audi",
    name: "RCCoupé",
    rent: {
      period: "Ao dia",
      price: 140.0,
    },
    thumbnail:
      "https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2022/202203/20220302/AUDI-A5-1.8-TFSI-SPORTBACK-AMBIENTE-16V-GASOLINA-4P-MULTITRONIC-wmimagem15222229826.jpg",
  };
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />

          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Car data={data} />}
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
