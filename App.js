import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("Muddy");
  const [person, setPerson] = useState({
    name: "hitman",
    age: 47,
  });
  const clickHandler = () => {
    setName(name === "Muddy" ? "Shang-chii" : "Muddy");
    setPerson(
      person.name === "hitman"
        ? { name: "batman", age: 28 }
        : {
            name: "hitman",
            age: 47,
          }
    );
  };
  return (
    <View style={styles.container}>
      <Text>my name is {name}!</Text>
      <Text>
        Their name is {person.name} and their age is {person.age}{" "}
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
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 20,
  },
});
