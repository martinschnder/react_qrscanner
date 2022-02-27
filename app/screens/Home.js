import React, { useContext } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import AppContext from "./AppContext";

function Home({ navigation }) {
  const myContext = useContext(AppContext);
  const url1 = myContext.firstUrl;
  const url2 = myContext.secondUrl;
  const url3 = myContext.thirdUrl;

  console.log("url1 : ", url1);
  console.log("url2 : ", url2);
  console.log("url3 : ", url3);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Scan QR Code</Text>
      </View>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => {
          navigation.navigate("Scanner");
        }}
      >
        <Image style={styles.image} source={require("../assets/QRcode.png")} />
      </TouchableOpacity>
      <View style={styles.historyContainer}>
        <Text style={styles.historyTitle}>Scanning History :</Text>
        <View style={styles.urls}>
          {url1 && (
            <View style={styles.urlContainer}>
              <Text onPress={() => Linking.openURL(url1)} numberOfLines={1}>
                {url1}
              </Text>
            </View>
          )}
          {url2 && (
            <View style={styles.urlContainer}>
              <Text onPress={() => Linking.openURL(url2)} numberOfLines={1}>
                {url2}
              </Text>
            </View>
          )}
          {url3 && (
            <View style={styles.urlContainer}>
              <Text onPress={() => Linking.openURL(url3)} numberOfLines={1}>
                {url3}
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 250,
    height: 250,
    resizeMode: "contain",
    borderRadius: 20,
  },
  imageContainer: {
    width: 270,
    height: 270,
    backgroundColor: "orange",
    alignItems: "center",
    borderRadius: 20,
  },
  historyContainer: {
    alignItems: "center",
  },
  historyTitle: {
    fontSize: 15,
    position: "absolute",
    top: 50,
  },
  mainContainer: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  titleContainer: {
    margin: 80,
  },
  urls: {
    position: "absolute",
    top: 80,
  },
  urlContainer: {
    width: 250,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f7",
    borderRadius: 10,
    margin: 10,
  },
});
