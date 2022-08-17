import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  AppointmentsContent,
  AppointmentsTitle,
  AppointmentsQuantity,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
} from "./style";

import { BackButton } from "../../components/BackButton";
import { Car } from "../../components/Car";
import { Load } from "../../components/Load";

import { CarDto } from "../../dtos/carDtos";
import { api } from "../../services/api";

interface CarProps {
  id: string;
  car: CarDto[];
  user_id: string;
  startDate: string;
  endDate: string;
}

export const MyCars = () => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setLoading(true);

    (async () => {
      try {
        const response = await api.get("schedules_byuser?user_id=1");
        setCars(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle={"light-content"}
          translucent
          backgroundColor={"transparent"}
        />
        <BackButton onPress={handleBack} color={theme.colors.shape} />

        <Title>Seus agendamentos {"\n"}estão aqui.</Title>

        <SubTitle>Conforto, segurança e praticidade</SubTitle>
      </Header>

      {loading ? (
        <Load />
      ) : (
        <Content>
          <AppointmentsContent>
            <AppointmentsTitle>
              {cars.length === 1 ? "Agendamento feito" : "Agendamentos feitos"}{" "}
            </AppointmentsTitle>
            <AppointmentsQuantity>0{cars.length}</AppointmentsQuantity>
          </AppointmentsContent>

          <FlatList
            data={cars}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>

                    <AntDesign
                      name="arrowright"
                      size={RFValue(16)}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />

                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
          />
        </Content>
      )}
    </Container>
  );
};
