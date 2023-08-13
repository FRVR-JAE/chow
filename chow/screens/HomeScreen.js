import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <Text className="text-red-500">
        {/*Header */}
        <View className="flex-row pb-3 items-center space-x-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View>
            <Text className="font-bold text-gray-400 text-xl">
              Deliver Now !
            </Text>
            <Text className="font-bold text-xl">
              {" "}
              Current Location
              <ChevronDownIcon size={20} color="#594545" />
            </Text>
          </View>
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
