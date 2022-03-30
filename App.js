import { useState } from "react";
import Header from "./components/header";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import TodoItem from "./components/todoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);
  const pressHandler = (id) => {
    setTodos(prevTodos => (prevTodos.filter(({key}) => id!==key)));
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      <View style={styles.content}>
        {/* to do form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => {
              return <TodoItem item={item} pressHandler={pressHandler} />;
              // return <Text>{item.text}</Text>;
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
