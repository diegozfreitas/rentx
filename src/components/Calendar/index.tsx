import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import {
  Calendar as CustomCalendar,
  LocaleConfig,
  DateCallbackHandler,
} from "react-native-calendars";

import { Container } from "./style";

import { ptBR } from "./localeConfig";

import { generateInterval } from "./generateInterval";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

interface MarketDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disabledTouchEvent?: boolean;
  };
}

interface DayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

interface CalendarProps {
  markedDates: MarketDateProps;
  onDayPress: DateCallbackHandler;
}

const Calendar = ({ markedDates, onDayPress }: CalendarProps) => {
  const theme = useTheme();

  return (
    <Container>
      <CustomCalendar
        renderArrow={(direction) => (
          //ts-ignore
          <Feather
            size={24}
            color={theme.colors.text}
            name={direction == "right" ? "chevron-right" : "chevron-left"}
          />
        )}
        headerStyle={{
          backgroundColor: theme.colors.background_secondary,
          borderBottomWidth: 0.5,
          borderBottomColor: theme.colors.text_details,
          paddingBottom: 10,
          marginBottom: 10,
        }}
        theme={{
          textDayFontFamily: theme.fonts.primary400,
          textDayHeaderFontFamily: theme.fonts.primary500,
          textDayHeaderFontSize: 10,
          textMonthFontFamily: theme.fonts.secondary600,
          textMonthFontSize: 20,
          monthTextColor: theme.colors.title,
          arrowStyle: {
            marginHorizontal: -15,
          },
        }}
        firstDay={1}
        minDate={String(new Date())}
        markingType="period"
        markedDates={markedDates}
        onDayPress={onDayPress}
      />
    </Container>
  );
};

export { Calendar, MarketDateProps, DayProps, generateInterval };
