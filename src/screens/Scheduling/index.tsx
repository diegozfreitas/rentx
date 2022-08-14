import React, { useState } from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import ArrowSvg from "../../assets/arrow.svg";

import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";
import {
  Calendar,
  DayProps,
  generateInterval,
  MarketDateProps,
} from "../../components/Calendar";

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from "./style";

export const Scheduling = () => {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );
  const [markedDates, setMarkedDates] = useState<MarketDateProps>(
    {} as MarketDateProps
  );
  const theme = useTheme();
  const navigation = useNavigation();

  const handleConfirmRental = () => {
    navigation.navigate("SchedulingDetails");
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleChangeDate = (date: DayProps) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);

    const interval = generateInterval(start, end);
    setMarkedDates(interval);
  };

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle={"light-content"}
          translucent
          backgroundColor={"transparent"}
        />
        <BackButton onPress={handleBack} color={theme.colors.shape} />

        <Title>
          Escolha uma {"\n"}data de inicio e {"\n"}fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={true}>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <Button title="CONFIRMAR" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
};
