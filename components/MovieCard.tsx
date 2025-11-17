import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Movie  from "../interfaces/interfaces"

interface MovieProps {
  item: Movie,
  setMovie: (item: Movie) => void,
  setIsOpen: (isOpen: boolean) => void;
}

const MovieCard = ({ item, setMovie, setIsOpen }: MovieProps) => {
  return (
    <TouchableOpacity
      className="w-[46%] border-four border-[1px] rounded-xl pb-3"
      onPress={() => {
        setMovie(item);
        setIsOpen(true);
      }}
    >
      <Image
        source={{
          uri: item.poster_path
            ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
            : "https://placeholder.co/600x400/1a1a1a/ffffff.png",
        }}
        className="w-full h-64 rounded-t-xl mb-3"
        resizeMode="cover"
      />
      <Text className="text-white ml-3 text-sm" numberOfLines={1}>
        {item.title}
      </Text>
      <View className="mx-3 mt-1 flex-row items-center justify-between">
        <Text className="text-four text-sm" numberOfLines={1}>
          {item.release_date?.split("-")[0]}
        </Text>
        <View className="flex-row gap-1 items-center">
          <AntDesign name="star" size={11} color="yellow" />
          <Text className="text-white text-sm">{item.vote_average?.toFixed(1)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
