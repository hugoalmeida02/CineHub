import React from "react";
import { Image, Text, View } from "react-native";

const Logo = () => {
  return (
    <View className="flex-row items-center">
      <Image
        source={require("../assets/icons/logo2.png")}
        className="w-10 h-10"
      />
      <Text className="text-white font-medium">CineHub</Text>
    </View>
  );
};

export default Logo;
