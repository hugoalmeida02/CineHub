import Fontisto from "@expo/vector-icons/Fontisto";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import MenuButton from "./MenuButton";
import Logo from "./Logo";

interface HeaderProps {
  setisSideBarOpen: (state: boolean) => void
}

const Header = ({setisSideBarOpen}: HeaderProps) => {

  return (
    <View className="bg-one z-10 w-full h-[45px] mt-11 flex-row border-four border-b-[0.5px] items-center justify-between pl-1 pr-6">
      <Logo></Logo>
      <View className="flex-row items-center gap-6">
        <Fontisto name="day-sunny" size={15} color="white" />
        <MenuButton onPress={() => setisSideBarOpen(true)}/>
      </View>
    </View>
  );
};

export default Header;
