import React from "react";
import { useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { ConfirmButton } from "../../components/ConfirmButton";

import { Container, Content, Title, Message, Footer } from "./style";

export const SchedulingComplete = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <Container>
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} />

        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir{"\n"}a concessionária da RENTX{"\n"}
          pegar seu automóvel
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="ok" onPress={() => navigation.navigate("Home")} />
      </Footer>
    </Container>
  );
};
