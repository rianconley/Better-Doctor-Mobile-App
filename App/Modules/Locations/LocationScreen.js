/* eslint-disable no-console */
import React, {Component} from "react";
import {ScrollView, StyleSheet, Text, Button, TextInput} from "react-native";
import LocationForm from "./LocationForm";
import Geocoder from "react-native-geocoding";
import {Config} from "../../Config/Config";
import { connect } from "react-redux";
import { setLocation } from "../../Redux/Actions/location";

Geocoder.init(Config.GOOGLE_API_KEY); // use a valid API key


class LocScreen extends Component {
  constructor(props){
    super(props);

    this.state = {
      locationInput: "",

    };
  }
  submit = () => {
    // print the form values to the console
    Geocoder.from(this.state.locationInput)
		.then(json => {
			var location = json.results[0].geometry.location;
      this.props.reduxSetLocation(location);
      this.props.navigation.navigate("DocsForm", {
        params: location });
		})
		.catch(error => console.warn(error));

  };
  render () {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Submit your Location</Text>
        <form >
      <div>
        <label htmlFor="location">Location</label>
        <TextInput
          placeholder="Enter Name"
          returnKeyLabel = {"next"}
          onChangeText={(text) => this.setState({locationInput:text})}
        />
      </div>

      <Button title="submit" onPress={() => this.submit()}>Submit</Button>

    </form>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {

  return {
      location: state.locationReducer.location,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
    return {
      // Increase Counter
      reduxSetLocation: (l) => dispatch(setLocation(l)),

   };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocScreen);
