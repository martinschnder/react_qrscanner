import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Linking,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import AppContext from "./AppContext";

function scanner({ navigation }) {
  const myContext = useContext(AppContext);
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  // const handleBarCodeScanned = ({ type, data }) => {
  //   setScanned(true);
  //   alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  // };
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    myContext.addUrl(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.mainContainer}>
      <View
        style={
          scanned ? styles.scannerContainerScanned : styles.scannerContainer
        }
      >
        <View style={styles.messageContainer}>
          <Text style={{ textAlign: "center" }}>
            Please move the camera over the QR code
          </Text>
        </View>
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={styles.scanner}
        />
        <TouchableOpacity style={styles.importContainer}>
          <Text style={{ textAlign: "center" }}>Import QR code</Text>
        </TouchableOpacity>
        {scanned && (
          <View style={styles.scannedMessage}>
            <Text onPress={() => Linking.openURL(myContext.firstUrl)}>
              {myContext.firstUrl}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

export default scanner;

const styles = StyleSheet.create({
  importContainer: {
    width: 130,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "orange",
    position: "absolute",
    bottom: 45,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
  messageContainer: {
    width: "60%",
    alignItems: "center",
    position: "absolute",
    top: 28,
  },
  scannedMessage: {
    width: 250,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f7",
    borderRadius: 10,
    position: "absolute",
    bottom: 110,
  },
  scanner: {
    width: "90%",
    height: "90%",
    borderRadius: 20,
    position: "absolute",
    top: 0,
  },
  scannerContainer: {
    width: "80%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#fff",
    position: "absolute",
    top: 150,
  },
  scannerContainerScanned: {
    width: "80%",
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#fff",
    position: "absolute",
    top: 150,
  },
});
