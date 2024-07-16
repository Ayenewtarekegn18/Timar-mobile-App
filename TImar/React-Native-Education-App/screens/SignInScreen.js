import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { images } from '../assets';
import Button from '../components/button';
import Button2 from '../components/button2';

import Input from '../components/input';
import { EyeIcon } from 'react-native-heroicons/solid';

const { signin } = images;

export default function SignInScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-bgWhite px-8 mt-20">
      <View className="flex-1 ">
        <View className="flex flex-col justify-center mb-20 ">
            <Text className="text-blackText text-3xl text-center font-exoSemibold">
                    Sign In
            </Text>
            <Text className="text-blackText text-l text-center font-exoSemibold">
                    Please sign in with your account
                  </Text>
        </View>

        {/** ====================== Sign In inputs ============================= */}
        <View className="flex flex-col w-full items-center justify-center mb-20">
          <Input label={'Email address'} placeholder={'name@example.com'} />
          <Input
            label={'Password'}
            placeholder={'********'}
            Icon={EyeIcon}
            last
          />
        </View>

        {/** ====================== Action button ============================= */}
        <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', gap: 30 }}>
            <Button2
            bigBtnText={'Sign In'}
            onbigBtnPress={() => navigation.navigate('Home')}/> 

            <Button
              secondaryBtnText1={"Don't have an account?"}
              secondaryBtnText2={'Sign Up'}
              onSecondaryBtnPress={() => navigation.navigate('SignUp')}
            />
        </View>
      </View>
    </SafeAreaView>
  );
}
