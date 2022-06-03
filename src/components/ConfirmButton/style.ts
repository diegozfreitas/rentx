import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

interface ButtonProps {
  color?: string;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  width: 80px;
  height: 56px;

  align-items: center;
  justify-content: center;
  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.shape_dark};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary500};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(15)}px;
  text-transform: uppercase;
`;
