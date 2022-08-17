import React from "react";
import { TouchableOpacityProps, ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

import { Container, Title } from "./style";

interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
  disabled?: boolean;
  loading?: boolean;
}

export const Button = ({
  title,
  color,
  disabled = false,
  loading = false,
  ...rest
}: Props) => {
  const theme = useTheme();
  return (
    <Container
      {...rest}
      color={color}
      disabled={disabled || loading}
      style={{ opacity: disabled === true ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} size={23} />
      ) : (
        <Title>{title} </Title>
      )}
    </Container>
  );
};
