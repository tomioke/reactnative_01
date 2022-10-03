import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Switch,
  TextInput,
  ScrollView,
  StyleSheet,
  Alert,
  BackHandler,
} from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Welcome Home",
      value: true,
      username: "",
    };
  }

  jikaKembali = () => {
    Alert.alert("Warning", "Apakah Mau Keluar Aplikasi?", [
      {
        text: "Tidak",
        onPress: () => null,
        style: "cancel",
      },
      {
        text: "Iya",
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };

  componentDidMount() {
    this.BackHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.jikaKembali
    );
  }

  componentWillUnmount() {
    this.BackHandler.remove();
  }

  render() {
    return (
      <ScrollView style={tampilan.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#8B9A46" />
        <View style={tampilan.headcop}>
          <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 18 }}>
            {this.state.header}
          </Text>
        </View>
        <TouchableOpacity
          style={tampilan.kontainergambar}
          onPress={() => console.log("Hello")}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1664369210144-90e51ddbbc30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
            }}
            style={tampilan.gambar}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={tampilan.kontainergambar}
          onPress={() =>
            Alert.alert("Gambar", "Gambar Mobil", [
              {
                text: "Batal",
                onPress: () => console.log("Batalkan"),
                style: "cancel",
              },
              {
                text: "OK",
                onPress: () => console.log("OKOK"),
              },
            ])
          }
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1640682567682-472e5e9eb889?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1953&q=80",
            }}
            style={tampilan.gambar}
          />
        </TouchableOpacity>
        <View style={tampilan.switch}>
          <Switch
            value={this.state.value}
            onValueChange={() => this.setState({ value: !this.state.value })}
          />
        </View>
        <TextInput
          value={this.state.username}
          style={tampilan.inputtext}
          onChangeText={(value) => this.setState({ username: value })}
        />

        <TouchableOpacity style={tampilan.button}>
          <Text>Boleh diklik</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const tampilan = StyleSheet.create({
  button: {
    backgroundColor: "#7900FF",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 50,
    elevation: 3,
  },
  inputtext: {
    borderWidth: 1,
    borderColor: "#93FFD8",
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 3,
    marginTop: 10,
    backgroundColor: "#93FFD8",
    color: "#000B49",
  },
  switch: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  gambar: {
    width: 300,
    height: 300,
    marginTop: 10,
    marginHorizontal: 55,
  },
  kontainergambar: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  headcop: {
    backgroundColor: "#FFABE1",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  container: {
    flex: 0.5,
    backgroundColor: "#937DC2",
  },
});
export default App;

