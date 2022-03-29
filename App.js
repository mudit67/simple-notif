import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("Muddy");
  const [age, setAge] = useState(17);
  const clickHandler = () => {
    setName(name === "Muddy" ? "Shang-chii" : "Muddy");
  };
  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        multiline
        value={name}
        style={styles.input}
        placeholder="eg. Hitman"
        onChangeText={(e) => {
          setName(e);
        }}
      />
      <Text>Enter age:</Text>
      <TextInput
        value={age.toString()}
        style={styles.input}
        keyboardType="numeric"
        placeholder="eg. 47"
        onChangeText={(e) => {
          setAge(e);
        }}
      />
      <Text>
        my name is {name}! and my age is {age}.
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Update name" onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  // header: {
  //   backgroundColor: "pink",
  //   padding: 20,
  // },
  // boldText: {
  //   fontWeight: "bold",
  // },
  // body: {
  //   backgroundColor: "yellow",
  //   padding: 20,
  //   fontWeight: "bold",
  // },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
