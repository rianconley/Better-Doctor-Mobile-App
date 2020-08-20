import React, {Component} from "react";
import {StyleSheet, Picker, View, Button, Text} from "react-native";

class DoctorsSearchPicker extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: undefined,
    };
  }
  render () {
    let val;
    const placeholder = {
      label: "Select a Filter",
      value: "",
      color: "#9EA0A4",
    };
    if (!this.state.selected) {
      val = "";
    }

    return (
      <View style={styles.container}>
        <Picker
          style={styles.picker}
          value={val}
          placeholder={placeholder}
          onValueChange={value => {
            this.setState({
              selected: value,
            });

          }}
        >
          <Picker.Item label="Select a Filter" value="" />
          <Picker.Item label="Gender" value="gender" />
          <Picker.Item label="Insurance" value="insurance" />
          <Picker.Item label="Name" value="name" />
          <Picker.Item label="Location" value="location" />
          {/* <Picker.Item label="Practice" value="practices" /> */}
          <Picker.Item label="Specialty" value="specialty" />

        </Picker>
        <Button title="ADD" onPress={() => {
          this.props.onSelect(this.state.selected);
        }} />
      </View>
    );
  }
}
export default DoctorsSearchPicker;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
  },
  picker: {
    width: "80%",
  },
  button: {
    width: "20%",
  },
});
