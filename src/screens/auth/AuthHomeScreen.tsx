import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {AuthStackParamList} from '../../navigation/stack/AuthStackNavigator';
import {authNaviagtions} from '../../constants/navigations';
import CustomButton from '../../components/CustomButton';
import {colors} from '../../constants';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNaviagtions.AUTH_HOME
>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.appName}>중장비 콜</Text>
        {/* <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../assets/matzip.png')}
        /> */}
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          label="로그인하기"
          onPress={() => navigation.navigate(authNaviagtions.LOGIN)}
        />
        <CustomButton
          label="회원가입하기"
          variant="outlined"
          onPress={() => navigation.navigate(authNaviagtions.SIGNUP)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 30,
  },
  imageContainer: {
    flex: 1.5,
    width: Dimensions.get('screen').width / 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  appName: {
    fontSize: 54,
    color: colors.ORANGE_700,
    marginTop: 100,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 10,
  },
});

export default AuthHomeScreen;
