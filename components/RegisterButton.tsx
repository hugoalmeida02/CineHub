import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface Props {
  setIsOpen: (isOpen: boolean) => void;
}

const RegisterButton = ({ setIsOpen }: Props) => {
  return (
    <TouchableOpacity className="border-four border-[0.7px] p-2 rounded-xl items-center mt-3 " onPress={() => setIsOpen(true)}>
      <Text className="text-white">Create Account</Text>
    </TouchableOpacity>
  );
};

export default RegisterButton;
