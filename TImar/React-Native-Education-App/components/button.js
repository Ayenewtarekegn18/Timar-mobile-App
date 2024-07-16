import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Button = ({
  onPrimaryBtnPress,
  primaryBtnText,
  showSecondaryBtn = true,
  showPrimaryBtn = false,
  secondaryBtnText1,
  secondaryBtnText2,
  onSecondaryBtnPress,
  

}) => {
  return (
    <View className="flex flex-col items-center gap-8">
      {/** ====================== Main Button ============================= */}
      {showPrimaryBtn && ( // Use the prop to conditionally render the primary button
        <Pressable
          onPress={onPrimaryBtnPress}
          className="py-3 bg-bgPurple px-7 rounded-xl w-[180px] max-h-[61px] flex items-center justify-center"
        >
          <Text className="text-xl font-exoSemibold text-center text-bgWhite">
            {primaryBtnText}
          </Text>
        </Pressable>
        )}
      {/** ====================== Secondary pressable ============================= */}
      {showSecondaryBtn ? (
        <View className="flex-row justify-center">
          <Text className="text-darkGrayText font-exo text-lg">
            {secondaryBtnText1}{' '}
          </Text>
          <Pressable onPress={onSecondaryBtnPress}>
            <Text className="font-exo text-bgPurple text-lg">
              {secondaryBtnText2}
            </Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};

export default Button;
