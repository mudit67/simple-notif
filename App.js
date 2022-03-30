import { useState } from "react";
import Header from "./components/header";
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);
  const pressHandler = (id) => {
    setTodos((prevTodos) => prevTodos.filter(({ key }) => id !== key));
  };
  const submitHandler = (text) => {
    if (text.length >= 4) {
      setTodos((prevTodos) => {
        let lastKey = prevTodos.length
          ? Number(prevTodos[prevTodos.length - 1]["key"])
          : 0;
        return [{ text, key: (lastKey + 1).toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS!", "Todos must be over 3 characters long.", [
        {
          text: "Understood",
          onPress: () => {
            // console.log("alert closed");
          },
        },
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('keyboard dismissed!');
    }}>
      <View style={styles.container}>
        {/* Header */}
        <Header />
        <View style={styles.content}>
          {/* to do form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => {
                return <TodoItem item={item} pressHandler={pressHandler} />;
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
