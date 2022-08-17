import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;

  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.header};
  padding: 32px 24px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;

  font-family: ${({ theme }) => theme.fonts.primary400};
  color: ${({ theme }) => theme.colors.text};
`;

export const MyCarsButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;

  justify-content: center;
  align-items: center;

  border-radius: 30;

  background-color: ${({theme})=> theme.colors.main};

  position: absolute;
  right: 22px;
  bottom: 22px;
`;
