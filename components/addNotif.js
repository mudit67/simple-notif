import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function addNotif({ submitHandler }) {
  const [text, setText] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        value={text}
        placeholder="new notif..."
        onChangeText={(e) => {
          setText(e);
        }}
      />
      <View style={styles.timeContainer}>
        <View 
          // style={{ width: "45%" }}
          style={{flex:1}}
        >
          <TextInput
            style={styles.timeInput}
            keyboardType="numeric"
            value={hours}
            placeholder="Enter hours e.g. 23"
            onChangeText={(e) => {
              setHours(e.toString());
            }}
          />
        </View>
        <View 
          // style={{ width: "10%" }}
          style={{marginHorizontal:4}}
        >
          <Text>:</Text>
        </View>
        <View 
          // style={{ width: "45%" }}
          style={{flex:1}}
        >
          <TextInput
            style={styles.timeInput}
            keyboardType="numeric"
            value={minutes}
            placeholder="Enter hours e.g. 15"
            onChangeText={(e) => {
              setMinutes(e.toString());
            }}
          />
        </View>
      </View>
      <Button
        onPress={() => {
          submitHandler(text, hours, minutes);
        }}
        title="Add Notif"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  timeContainer: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems:"center"
  },
  timeInput: {
    paddingVertical:4,
    paddingHorizontal:8,
    borderWidth:1,
    borderRadius:10,
    borderStyle: 'dashed'
  },
});
