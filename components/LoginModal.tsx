import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from "./Logo";
import Modal from "react-native-modal";
interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const LoginModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Modal
      isVisible={isOpen}
      onBackdropPress={() => setIsOpen(false)}
      style={{ margin: 0, alignItems: 'center' }}
    >
        <View className="w-[94%] bg-black rounded-xl p-6 border-four border-[1px]">
          <View className="items-end">
            <TouchableOpacity
              onPress={() => setIsOpen(false)}
              className="w-8 h-8 justify-center items-center"
            >
              <AntDesign name="close" size={14} color="white" />
            </TouchableOpacity>
          </View>
          <View className="items-center mb-10">
            <Logo />
            <Text className="text-white text-xl mt-5">Welcome Back</Text>
            <Text className="text-five">
              Enter your credentials to continue.
            </Text>
          </View>
          <Text className="text-white">Email / Username</Text>
          <TextInput
            className="bg-two border-four border-[1px] rounded-xl mt-1 mb-2 text-white px-2"
            placeholder="Email/Username"
          ></TextInput>
          <Text className="text-white mt-2">Password</Text>
          <TextInput
            className="bg-two border-four border-[1px] rounded-xl mt-1 mb-2 text-white px-2"
            secureTextEntry
            placeholder="Password"
          ></TextInput>
          <TouchableOpacity
            className="border-four border-[0.7px] p-2 rounded-xl items-center mt-6 bg-white"
            onPress={() => setIsOpen(true)}
          >
            <Text className="text-black">Login</Text>
          </TouchableOpacity>
        </View>
    </Modal>
  );
};

export default LoginModal;
