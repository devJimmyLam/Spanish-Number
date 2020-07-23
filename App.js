
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';


const listBackgroundColors = {
  1: "#3498DB",
  2: "#E8290B",
  3: "#AE1438",
  4: "#2475B0",
  5: "#30336B",
  6: "#0A3D62",
  7: "#26ae60",
  8: "#10A881",
  9: "#218F76",
  10: "#DFAF2B"
};

const soundList = {
  one: require("./assets/one.wav"),
  two: require("./assets/two.wav"),
  three: require("./assets/three.wav"),
  four: require("./assets/four.wav"),
  five: require("./assets/five.wav"),
  six: require("./assets/six.wav"),
  seven: require("./assets/seven.wav"),
  eight: require("./assets/eight.wav"),
  nine: require("./assets/nine.wav"),
  ten: require("./assets/ten.wav")
};

export default function App() {
  playSound = async number => {
    const soundObject = new Audio.Sound();
    try {
      let path = soundList[number];
      await soundObject.loadAsync(path);
      await soundObject
        .playAsync()
        .then(async playbackStatus => {
          setTimeout(() => {
            soundObject.unloadAsync();
          }, playbackStatus.playableDurationMillis);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        <Image
          style={styles.logo}
          source={require('./assets/logo.png')}
        />
        <View style={styles.rowContainer} >
          <TouchableOpacity
            style={[
              {
                backgroundColor: listBackgroundColors[1]
              },
              styles.item
            ]}
            onPress={() => {
              this.playSound("one")
            }}
          >
            <Text style={styles.itemText}>One
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gridContainer: {
    flex: 1,
    margin: 5
  },
  logo: {
    alignSelf: "center",
    marginTop: 25,
    height: 100,
    width: 100,
  },
  rowContainer: {
    flexDirection: "row"
  },
  item: {
    flex: 1,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
  },
  itemText: {
    color: "white",
    fontSize: 20,
  }
});