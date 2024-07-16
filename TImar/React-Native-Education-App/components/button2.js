import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Button2 = ({
  
  onbigBtnPress,
  bigBtnText,

}) => {
  return (
    <View className="flex flex-col items-center gap-8">
    
      {/** ====================== Big Button ============================= */}

      <Pressable
        onPress={onbigBtnPress}
        className="py-3 bg-bgPurple px-7 rounded-xl w-[330px] max-h-[61px] flex items-center justify-center"
      >
        <Text className="text-2xl font-exoSemibold text-center text-bgWhite">
          {bigBtnText}
        </Text>
      </Pressable>
      
        
    </View>
  );
};

export default Button2;
