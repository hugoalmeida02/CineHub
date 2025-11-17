import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import EvilIcons from "@expo/vector-icons/EvilIcons";

interface MenuButtonProps {
  onPress: () => void;
}

const MenuButton = ({ onPress } : MenuButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <EvilIcons name="navicon" size={24} color="white" />
    </TouchableOpacity>
  )
}

export default MenuButton