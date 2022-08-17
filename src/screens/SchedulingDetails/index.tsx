import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { format } from "date-fns";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";

import { CarDto } from "../../dtos/carDtos";
import { api } from "../../services/api";

import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { getPlatformDate } from "../../utils/getPlatformDate";

import * as S from "./style";

interface Params {
  car: CarDto;
  dates: string[];
}

interface RentalPeriod {
  start: string;
  end: string;
}

export const SchedulingDetails = () => {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );
  const theme = useTheme();
  const navigation = useNavigation();

  const route = useRoute();
  const { car, dates } = route.params as Params;

  const handleBack = () => {
    navigation.goBack();
  };

  const rentTotal = Number(dates.length * car.rent.price)
    .toFixed(2)
    .replace(".", ",");

  const handleConfirmRental = async () => {
    const scheduleByCar = await api.get(`/schedules_bycars/${car.id}`);

    const unavailable_dates = [
      ...scheduleByCar.data.unavailable_dates,
      ...dates,
    ];

    api.post("/schedules_byuser", {
      user_id: 1,
      car,
      startDate: format(getPlatformDate(new Date(dates[0])), "dd/MM/yyyy"),
      endDate: format(
        getPlatformDate(new Date(dates[dates.length - 1])),
        "dd/MM/yyyy"
      ),
    });

    api
      .put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates,
      })
      .then(() => navigation.navigate("SchedulingComplete"))
      .catch(() => {
        Alert.alert("Não foi possível confirmar o agendamento.");
      });
  };

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), "dd/MM/yyyy"),
      end: format(
        getPlatformDate(new Date(dates[dates.length - 1])),
        "dd/MM/yyyy"
      ),
    });
  }, []);

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={handleBack} />
      </S.Header>

      <S.CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </S.CarImages>

      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>{car.brand}</S.Brand>
            <S.Name>{car.name}</S.Name>
          </S.Description>

          <S.Rent>
            <S.Period>{car.rent.period}</S.Period>
            <S.Price>R$ {car.rent.price}</S.Price>
          </S.Rent>
        </S.Details>

        <S.Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </S.Accessories>

        <S.RentalPeriod>
          <S.CalendarIcon>
            <Feather
              name="calendar"
              color={theme.colors.shape}
              size={RFValue(24)}
            />
          </S.CalendarIcon>

          <S.DataInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue>{rentalPeriod.start}</S.DateValue>
          </S.DataInfo>

          <Feather
            name="chevron-left"
            color={theme.colors.title}
            size={RFValue(10)}
          />

          <S.DataInfo>
            <S.DateTitle>ATE</S.DateTitle>
            <S.DateValue>{rentalPeriod.end}</S.DateValue>
          </S.DataInfo>
        </S.RentalPeriod>

        <S.RentalPrice>
          <S.RentalPriceLabel>TOTAL</S.RentalPriceLabel>

          <S.RentalPriceDetails>
            <S.RentalPriceQuota>
              {`R$ ${car.rent.price.toFixed(2).replace(".", ",")} x ${
                dates.length
              } ${dates.length === 1 ? "diária" : "diárias"}`}
            </S.RentalPriceQuota>
            <S.RentalPriceTotal>R$ {rentTotal}</S.RentalPriceTotal>
          </S.RentalPriceDetails>
        </S.RentalPrice>
      </S.Content>

      <S.Footer>
        <Button
          title="ALUGAR AGORA"
          color={theme.colors.success}
          onPress={handleConfirmRental}
        />
      </S.Footer>
    </S.Container>
  );
};
