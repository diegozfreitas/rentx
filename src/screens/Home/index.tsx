import React, { useEffect, useState } from "react";
import { StatusBar, FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

import Logo from "../../assets/logo.svg";
import { api } from "../../services/api";

import { Container, Header, HeaderContent, TotalCars } from "./styles";

import { Car } from "../../components/Car";
import { Load } from "../../components/Load";

import { CarDto } from "../../dtos/carDtos";

export const Home = ({}) => {
  const [cars, setCars] = useState<CarDto[]>([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleCarDetails = (car: CarDto) => {
    navigation.navigate("CarDetails", { car });
  };

  useEffect(() => {
    async function featCars() {
      setLoading(true);
      try {
        const { data } = await api.get("/cars");

        setCars(data);

        console.log(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    featCars();
  }, []);

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

      {loading ? (
        <Load />
      ) : (
        <FlatList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
          contentContainerStyle={{ padding: 16 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
};
