import React, { useState, useEffect, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./app/screens/Home";
import Scanner from "./app/screens/Scanner";
import History from "./app/screens/History";
import AppContext from "./app/screens/AppContext";

const Stack = createNativeStackNavigator();

export default function App() {
  const [url1, setUrl1] = useState(null);
  const [url2, setUrl2] = useState(null);
  const [url3, setUrl3] = useState(null);

  const addUrl = (url) => {
    setUrl3(url2);
    setUrl2(url1);
    setUrl1(url);
  };

  const urls = {
    firstUrl: url1,
    secondUrl: url2,
    thirdUrl: url3,
    setUrl1,
    setUrl2,
    setUrl3,
    addUrl,
  };

  return (
    <AppContext.Provider value={urls}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="History"
            component={History}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="Scanner"
            component={Scanner}
            options={{ header: () => null }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
