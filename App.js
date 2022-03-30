import { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "muddy", key: "1" },
    { name: "unni", key: "2" },
    { name: "tachyon", key: "3" },
    { name: "chini", key: "4" },
    { name: "bat", key: "5" },
    { name: "inert", key: "6" },
    { name: "ghost", key: "7" },
  ]);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {people.map((person) => (
          <View key={person.key}>
            <Text style={styles.person}>{person.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  person: {
    marginTop: 40,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
