import { useState } from "react";
import Header from "./components/header";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import NotifItem from "./components/notifItem";
import AddNotif from "./components/addNotif";

export default function App() {
  const [notifs, setNotifs] = useState([
    { text: "buy coffee", time: "12:15", key: "3" },
    { text: "create an app", time: "15:20", key: "2" },
    { text: "play on the switch", time: "23:30", key: "1" },
  ]);
  const pressHandler = (id) => {
    setNotifs((prevNotifs) => prevNotifs.filter(({ key }) => id !== key));
  };
  const submitHandler = (text, hours, minutes) => {
    if (text.length >= 4) {
      hours = Number(hours) || "00" ;
      minutes = Number(minutes) || "00";
      if (hours <= 23 && hours >= 0) {
        if (minutes <= 59 && minutes >= 0) {
          setNotifs((prevNotifs) => {
            let lastKey = prevNotifs.length
              ? Number(prevNotifs[0]["key"])
              : 0;
            console.log(lastKey, notifs);
            return [
              {
                text,
                key: (lastKey + 1).toString(),
                time: hours.toString() + ":" + minutes.toString(),
              },
              ...prevNotifs,
            ];
          });
        } else {
          Alert.alert("OOPS!", "Invalid Minutes", [
            {
              text: "Understood",
              onPress: () => {
                // console.log("alert closed");
              },
            },
          ]);
        }
      } else {
        Alert.alert("OOPS!", "Invalid Hours", [
          {
            text: "Understood",
            onPress: () => {
              // console.log("alert closed");
            },
          },
        ]);
      }
    } else {
      Alert.alert("OOPS!", "Notifs must be over 3 characters long.", [
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
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("keyboard dismissed!");
      }}
    >
      <View style={styles.container}>
        {/* Header */}
        <Header />
        <View style={styles.content}>
          {/* to do form */}
          <AddNotif submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={notifs}
              renderItem={({ item }) => {
                return <NotifItem item={item} pressHandler={pressHandler} />;
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
