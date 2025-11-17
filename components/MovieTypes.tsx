import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const Types = [
  "All",
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
];

const MovieTypes = () => {
  return (
    <View className="bg-three px-3 mx-4 py-2">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {Types.map((genre) => {
          return (
            <TouchableOpacity key={genre} onPress={() => {}} className="mr-3">
              <Text className="text-five">{genre}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MovieTypes;
