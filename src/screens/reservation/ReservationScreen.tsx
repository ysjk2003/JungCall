import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { Calendar, DateData } from "react-native-calendars";
import CustomButton from "../../components/CustomButton";
import { FlatList } from "react-native-gesture-handler";
import { colors, mainNavigations } from "../../constants";
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParamList } from "../../navigation/stack/MainStackNavigator";
import Toast from "react-native-toast-message";

type ReservationScreenProps = StackScreenProps<
  MainStackParamList,
  typeof mainNavigations.RESERVATION
>;

function ReservationScreen({ navigation }: ReservationScreenProps) {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const data = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30"];
  const reservedTime = ["10:00"];

  const handleButtonPress = (day: DateData) => {
    setSelectedDate(day.dateString);
  };

  const handlePressTime = (time: string) => {
    setSelectedTime(time);
  };

  const handleReservation = () => {
    Alert.alert(
      "예약하기",
      `${selectedDate} ${selectedTime}에 예약하시겠습니까?`,
      [
        {
          text: "예약하기",
          onPress: () => {
            navigation.navigate(mainNavigations.COMPANY_LIST);
            Toast.show({
              type: "success",
              text1: "예약되었습니다.",
            });
          },
        },
        {
          text: "취소",
          style: "cancel",
        },
      ]
    );
  };

  const isDateSelected = selectedDate.length !== 0;

  return (
    <View style={styles.container}>
      <Calendar
        markedDates={{
          [selectedDate]: {
            selected: true,
            disableTouchEvent: true,
          },
        }}
        theme={{
          selectedDayBackgroundColor: colors.ORANGE_500,
          todayTextColor: colors.GRAY_700,
          arrowColor: colors.ORANGE_500,
        }}
        onDayPress={handleButtonPress}
      />
      <View style={styles.buttonContainer}>
        <FlatList
          data={data}
          renderItem={(info) => {
            const isSelectedTime = selectedTime === info.item;
            const isReserved = reservedTime.includes(info.item);

            return (
              <Pressable
                style={[
                  styles.timeButton,
                  (!isDateSelected || isReserved) && styles.disabledButton,
                  isSelectedTime && styles.selectedButton,
                ]}
                onPress={() => handlePressTime(info.item)}
                disabled={!isDateSelected || isReserved}
              >
                <Text
                  style={[
                    styles.timeText,
                    isSelectedTime && styles.selectedTime,
                  ]}
                >
                  {info.item}
                </Text>
              </Pressable>
            );
          }}
          keyExtractor={(item) => item}
          numColumns={4}
          columnWrapperStyle={styles.columnWrapper}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
      <CustomButton
        inValid={selectedTime === null}
        label="예약하기"
        onPress={handleReservation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15 },
  buttonContainer: { alignItems: "center" },
  timeButton: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    borderColor: colors.ORANGE_700,
  },
  disabledButton: { opacity: 0.5 },
  selectedButton: { backgroundColor: colors.ORANGE_700 },
  timeText: { color: colors.ORANGE_700 },
  selectedTime: { color: colors.WHITE },
  columnWrapper: { gap: 15, flex: 1 },
  contentContainer: {
    padding: 15,
    gap: 15,
  },
});

export default ReservationScreen;
