import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function OnboardingScreen2({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 90,
        }}
      >
        <Image
          style={{
            width: 400,
            height: 400,
          }}
          source={require("../../assets/images/Onboarding2.png")}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 260,
            height: 113,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              lineHeight: 35,
              fontWeight: "700",
              color: "#000000",
              textAlign: "center",
            }}
          >
            Foodie is Where Your Comfort Food Resides
          </Text>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 16,
              fontWeight: "400",
              color: "#646464",
              textAlign: "center",
              paddingTop: 15,
            }}
          >
            Enjoy a fast and smooth food delivery at your doorstep
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeNavigator")}
          style={{
            marginTop: 70,
            width: 158,
            height: 50,
            backgroundColor: "#EC2578",
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 17,
              lineHeight: 25,
              textAlign: "center",
              color: "#FFFF",
              fontWeight: "600",
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
