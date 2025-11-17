import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import Modal from "react-native-modal";
import Movie from "../interfaces/interfaces";
import Feather from '@expo/vector-icons/Feather';

interface Props {
  movie: Movie;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MovieDetails = ({ movie, isOpen, setIsOpen }: Props) => {
  return (
    <Modal
      isVisible={isOpen}
      onBackdropPress={() => setIsOpen(false)}
      useNativeDriver
      style={{ margin: 0, justifyContent: "flex-end" }}
    >
      <View className="flex-1 bg-transparent" />
      <ScrollView className="h-[60%] w-full bg-black p-6 border-t-[1px] border-four">
        <Image
          source={{
            uri: movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://placeholder.co/600x400/1a1a1a/ffffff.png",
          }}
          className="w-full rounded-t-xl mb-7"
          style={{ aspectRatio: 2 / 3 }}
          resizeMode="cover"
        />
        <Text className="text-white text-2xl">
          {movie.title}
        </Text>

        <View className="flex-row items-center mt-2">
          <AntDesign name="star" size={20} color="yellow" />
          <Text className="text-white text-lg ml-2 mr-5">
            {movie.vote_average?.toFixed(1)}/10
          </Text>
          <Feather name="calendar" size={20} color="#595959" />
          <Text className="text-four text-lg ml-2 mr-5">
            {movie.release_date?.split("-")[0]}
          </Text>
          
          {/* <Text className="text-four text-lg">
            {movie.genre_ids}
          </Text> */}
        </View>
        <Text className="text-four text-xl  mt-3 mb-2">Overview</Text>
          <Text className="text-four text-lg pb-10">
            {movie.overview}
          </Text>
      </ScrollView>
    </Modal>
  );
};

export default MovieDetails;
