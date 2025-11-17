import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import "./global.css";

import Header from "@/components/Header";
import LoginButton from "@/components/LoginButton";
import MovieCard from "@/components/MovieCard";
import MovieTypes from "@/components/MovieTypes";
import RegisterButton from "@/components/RegisterButton";
import SearchBar from "@/components/SearchBar";

import LoginModal from "@/components/LoginModal";
import MovieDetails from "@/components/MovieDetails";
import RegisterModal from "@/components/RegisterModal";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";

export default function Index() {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
  const [isMovieDetailsOpen, setIsMovieDetailsOpen] = useState(false);
  const [movie, setMovie] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: movies,
    loading,
    error,
    refetch: loadMovies,
    reset,
  } = useFetch(() => fetchMovies({ query: searchQuery }), true);

  useEffect(() => {
    const timeoutID = setTimeout(async () => {
      if (searchQuery.trim()) {
        loadMovies();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeoutID);
  }, [searchQuery]);

  return (
    <View className="flex-1 bg-one">
      <Header setisSideBarOpen={setisSideBarOpen} />
      <ScrollView className="w-full">
        {isLogin ? (
          <></>
        ) : (
          <View className="w-full h-96 relative">
            <Image
              source={require("@/assets/images/bg.png")}
              className="w-full h-full absolute"
              resizeMode="cover"
            />
            <View className="z-10 absolute inset-0 bg-black/75 justify-center">
              <Text className=" text-white text-xl font-semibold">
                Discover Your Next Favorite Movie
              </Text>
              <Text className="text-five w-[90%]">
                Explore thousand of movies across all genres. From blockbuster
                hits to hidden gems, find what to watch tonight.
              </Text>
              <LoginButton setIsOpen={setIsModalLoginOpen}></LoginButton>
              <RegisterButton
                setIsOpen={setIsModalRegisterOpen}
              ></RegisterButton>
            </View>
          </View>
        )}
        <LoginModal isOpen={isModalLoginOpen} setIsOpen={setIsModalLoginOpen} />
        <RegisterModal
          isOpen={isModalRegisterOpen}
          setIsOpen={setIsModalRegisterOpen}
        />
        <View className="flex-1 bg-two py-3 gap-2">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          {/* <MovieTypes /> */}
        </View>
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : error ? (
          <Text>Error: {error?.message}</Text>
        ) : (
          <View className="mt-6">
            <Text className="text-white ml-3 text-xl">Movies</Text>
            <Text className="text-five ml-3 py-1">
              {movies ? movies.length : "0"} movies found
            </Text>
            <FlatList
              data={movies}
              renderItem={({ item }) => (
                <MovieCard
                  item={item}
                  setMovie={setMovie}
                  setIsOpen={setIsMovieDetailsOpen}
                />
              )}
              keyExtractor={(movie) => movie.id}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: "center",
                gap: 10,
                marginBottom: 10,
              }}
              scrollEnabled={false}
              className="mt-2"
            />
          </View>
        )}
        {isMovieDetailsOpen ? (
          <MovieDetails
            movie={movie}
            isOpen={isMovieDetailsOpen}
            setIsOpen={setIsMovieDetailsOpen}
          />
        ) : (
          <></>
        )}
      </ScrollView>
    </View>
  );
}
