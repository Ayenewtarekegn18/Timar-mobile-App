import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { images } from '../assets';
import Button from '../components/button';
import Button2 from '../components/button2';

import Input from '../components/input';
import { EyeIcon } from 'react-native-heroicons/solid';

const { signup } = images;

export default function SignUpScreen() {
  const navigation = useNavigation();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (key, value) => {
    setUserData({ ...userData, [key]: value });
  };

  const handleSubmit = () => {
    // Navigate to the next screen with user data
    console.log('user data --> ', userData);
    navigation.navigate('SelectGrade', { userData });
  };

  return (
    <SafeAreaView className="flex-1 bg-bgWhite px-8">
      <View className="mt-10 flex justify-around">
      <Text className="text-blackText text-3xl text-center font-exoSemibold mb-3">
              Sign Up
            </Text>
        {/** ====================== Sign Up inputs ============================= */}
        <View className="flex flex-col w-full items-center justify-center mb-5" >
          <Input
            label={'First Name'}
            placeholder={'First name'}
            value={userData.name}
            onChange={(text) => handleInputChange('name', text)}
          />
          <Input
            label={'Last Name'}
            placeholder={'Last name'}
            value={userData.name}
            onChange={(text) => handleInputChange('name', text)}
          />
          <Input
            label={'Phone Number'}
            placeholder={'+251******'}
            onChange={(text) => handleInputChange('email', text)}
          />
          <Input
            label={'Password'}
            placeholder={'********'}
            Icon={EyeIcon}
            onChange={(text) => handleInputChange('password', text)}
            last
          />
          <Input
            label={'Confirm Password'}
            placeholder={'********'}
            Icon={EyeIcon}
            onChange={(text) => handleInputChange('password', text)}
            last
          />
        </View>

        {/** ====== Action button -> Navigation to grade selection screen ======= */}
        <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', gap: 30 }}>

        <Button2
        bigBtnText={'Sign Up'}
        onbigBtnPress={handleSubmit}
        />
        <Button
          secondaryBtnText1={'Already have an account?'}
          secondaryBtnText2={'Sign In'}
          onSecondaryBtnPress={() => navigation.navigate('SignIn')}
        />
        </View>
      </View>
    </SafeAreaView>
  );
}
