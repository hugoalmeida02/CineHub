import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { TextInput, View } from "react-native";

interface Props {
  searchQuery: string,
  setSearchQuery: (query: string) => void;
}

const SearchBar = ({searchQuery, setSearchQuery }: Props) => {
  return (
    <View className="flex-row bg-two mx-4 items-center px-3 gap-2 rounded-2xl border-three border-[0.7px]">
      <Feather name="search" size={16} color="#595959" />
      <TextInput
        className="flex-1 text-white"
        placeholder={"Search movies..."}
        placeholderTextColor="#595959"
        value={searchQuery}
        onChangeText={(text: string) => setSearchQuery(text)}
      ></TextInput>
    </View>
  );
};

export default SearchBar;
