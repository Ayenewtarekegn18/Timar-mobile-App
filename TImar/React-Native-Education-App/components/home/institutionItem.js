import { View, Text, Image } from 'react-native';
import React from 'react';
import Rating from './rating';

const InstitutionItem = ({ institution }) => {
  return (
    <View className="bg-white rounded-xl flex flex-col w-[50%] h-[250px] items-center justify-start shadow mt-4" >
      {/**============== Institution Image ================ */}


      <View className="rounded-xl w-full h-[50%] mb-1">
        <Image source={institution.image} style={{ width: '100%', height: '100%' }} // Adjust the width and height
          resizeMode="cover"  />
      </View>

     { /**============== Institution information ================ */}
      <View className="flex flex-row items-center justify-start w-full mb-2">
        <Text className="font-bold text-darkGrayText text-xs capitalize mr-5">
          {institution.name}
        </Text>

        {/**============== Rating and reviews ================ */}
          <Rating rating={institution.rating} />
          
        </View>
        <View className="flex flex-col">
          <Text className="font-robotoBold text-darkGrayText text-sm capitalize">
            {institution.field}
          </Text>
          <Text className="font-roboto text-xs">{institution.description}</Text>
        </View>
      </View>
    
  );
};

export default InstitutionItem;
