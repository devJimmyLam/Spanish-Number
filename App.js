
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Audio } from 'expo-av';


const listBackgroundColors = {
  1: "#AE1438",
  2: "#AE1438",
  3: "#AE1438",
  4: "#AE1438",
  5: "#AE1438",
  6: "#AE1438",
  7: "#AE1438",
  8: "#AE1438",
  9: "#AE1438",
  10: "#AE1438",

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

    <ScrollView style={styles.container}>
      <View style={styles.gridContainer}>
        <Image
          style={styles.logo}
          source={require('./assets/logo.png')}
        />
        <Text style={styles.textHeader}>Press buttons to hear Spanish Numbers</Text>
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
            <Text style={styles.itemTxt}>- uno -</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              {
                backgroundColor: listBackgroundColors[2]
              },
              styles.item
            ]}
            onPress={() => {
              this.playSound("two")
            }}
          >
            <Text style={styles.itemText}>Two
            </Text>
            <Text style={styles.itemTxt}>- dos -</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer} >
          <TouchableOpacity
            style={[
              {
                backgroundColor: listBackgroundColors[3]
              },
              styles.item
            ]}
            onPress={() => {
              this.playSound("three")
            }}
          >
            <Text style={styles.itemText}>Three
            </Text>
            <Text style={styles.itemTxt}>- tres -</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              {
                backgroundColor: listBackgroundColors[4]
              },
              styles.item
            ]}
            onPress={() => {
              this.playSound("four")
            }}
          >
            <Text style={styles.itemText}>Four
            </Text>
            <Text style={styles.itemTxt}>- cuatro -</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer} >
          <TouchableOpacity
            style={[
              {
                backgroundColor: listBackgroundColors[5]
              },
              styles.item
            ]}
            onPress={() => {
              this.playSound("five")
            }}
          >
            <Text style={styles.itemText}>Five
            </Text>
            <Text style={styles.itemTxt}>- cinco -</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              {
                backgroundColor: listBackgroundColors[6]
              },
              styles.item
            ]}
            onPress={() => {
              this.playSound("six")
            }}
          >
            <Text style={styles.itemText}>Six
            </Text>
            <Text style={styles.itemTxt}>- seis -</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer} >
          <TouchableOpacity
            style={[
              {
                backgroundColor: listBackgroundColors[7]
              },
              styles.item
            ]}
            onPress={() => {
              this.playSound("seven")
            }}
          >
            <Text style={styles.itemText}>Seven
            </Text>
            <Text style={styles.itemTxt}>- siete -</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              {
                backgroundColor: listBackgroundColors[8]
              },
              styles.item
            ]}
            onPress={() => {
              this.playSound("eight")
            }}
          >
            <Text style={styles.itemText}>Eight
            </Text>
            <Text style={styles.itemTxt}>- ocho -</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer} >
          <TouchableOpacity
            style={[
              {
                backgroundColor: listBackgroundColors[9]
              },
              styles.item
            ]}
            onPress={() => {
              this.playSound("nine")
            }}
          >
            <Text style={styles.itemText}>Nine
            </Text>
            <Text style={styles.itemTxt}>- nueve -</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              {
                backgroundColor: listBackgroundColors[10]
              },
              styles.item
            ]}
            onPress={() => {
              this.playSound("ten")
            }}
          >
            <Text style={styles.itemText}>Ten
            </Text>
            <Text style={styles.itemTxt}>- diez -</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F363F',
  },
  gridContainer: {
    flex: 1,
    margin: 5
  },
  logo: {
    alignSelf: "center",
    marginTop: 25,
    height: 150,
    width: 150,
  },
  textHeader: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
    margin: 5,
  },
  rowContainer: {
    flexDirection: "row"
  },
  item: {
    flex: 1,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
    borderRadius: 10,
  },
  itemText: {
    color: "white",
    fontSize: 30,
  },
  itemTxt: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  }
});