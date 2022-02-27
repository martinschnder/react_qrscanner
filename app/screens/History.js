import React, { useContext } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

import AppContext from "./AppContext";

function History(props) {
  const myContext = useContext(AppContext);
  const url1 = myContext.firstUrl;
  const url2 = myContext.secondUrl;
  const url3 = myContext.thirdUrl;

  console.log("url1 : ", url1);
  console.log("url2 : ", url2);
  console.log("url3 : ", url3);
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.bottomBox}></View>
    </View>
  );
}

export default History;

const styles = StyleSheet.create({
  bottomBox: {
    backgroundColor: "green",
  },
});

/* <View style={styles.urls}>
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
      </View> */
