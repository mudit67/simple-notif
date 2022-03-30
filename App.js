import { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "muddy", sup: "1" },
    { name: "unni", sup: "2" },
    { name: "tachyon", sup: "3" },
    { name: "chini", sup: "4" },
    { name: "bat", sup: "5" },
    { name: "inert", sup: "6" },
    { name: "ghost", sup: "7" },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.sup}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.person}>{item.name}</Text>
        )}
      />
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {people.map((person) => (
          <View key={person.key}>
            <Text style={styles.person}>{person.name}</Text>
          </View>
        ))}
      </ScrollView> */}
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
    marginHorizontal: 10,
    marginTop: 40,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
