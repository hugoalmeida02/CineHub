import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface Props {
  setIsOpen: (isOpen: boolean) => void;
}

const LoginButton = ({ setIsOpen }: Props) => {
  return (
    <TouchableOpacity className="border-four border-[0.7px] p-2 rounded-xl items-center mt-3 bg-white" onPress={() => setIsOpen(true)}>
      <Text className="text-black">Login</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
