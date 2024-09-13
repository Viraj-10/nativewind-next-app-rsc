"use client";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

const AboutPage = () => {
  const [counter, setCounter] = useState(1);
  return (
    <View className="flex-1 justify-center items-center">
      <Pressable
        className="rounded-lg px-4 py-2 bg-primary-500"
        onPress={() => {
          setCounter(counter + 1);
        }}
      >
        <Text className="text-typography-500">Press Me</Text>
      </Pressable>
    </View>
  );
};

export default AboutPage;
