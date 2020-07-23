
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
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

  //[ x ] TODO: method to play sound
  playSound = number => {
    //creating object 
    const soundObject = new Audio.Sound();
    try {
      let path = soundList[number]
      await soundObject.loadAsync(path)
      await soundObject
        .playAsync()
        //after sound is played, then we want to get a playback status.
        //giving us a playbackStatus
        //playbackDuration is how much is played back
        .then(async playbackStatus => {
          setTimeout(() => {
            //once played it is unloaded
            soundObject.unloadAsync();
          }, playbackStatus.playableDurationMillis);
        })
        .catch(error => {
          console.log(error)
        })
    } catch (error) {
      console.log(error)
    }
  };



  return (
    <View style={styles.container}>
      <Text>Spanish Number App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
