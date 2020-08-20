/* eslint-disable no-console */
import React, {Component} from "react";
import {StyleSheet, View, TouchableHighlight} from "react-native";
import DoctorsSearch from "./DoctorsSearchPicker";
import DoctorsForm from "./DoctorsForm";
import {store} from "../../Redux/configureStore";

class DocsScreen extends Component {
  constructor (props) {
    super(props);
  }
  state = {
    showName: false,
    showGender: false,
    showLocation: false,
    showSpecialty: false,
    showInsurance: false,
    showPractices: false,
    limit:10,

  };
  static navigationOptions = {
    title: "Find a Doctor",
  };
  submit = values => {
    let paramObj = {...values,location:`${store.getState().locationReducer.location.lat },${store.getState().locationReducer.location.lng},${this.state.limit}`};
    console.log(paramObj);
    this.props.navigation.navigate("DocsList", {
         params: paramObj });
  };
  showFilters = v => {
    switch (v) {
      case "name":
        this.setState({showName: true});
        break;
      case "gender":
        this.setState({showGender: true});
        break;
      case "location":
        this.setState({showLocation: true});
        break;
      case "specialty":
        this.setState({showSpecialty: true});
        break;
      case "insurance":
        this.setState({showInsurance: true});
        break;
      case "practices":
        this.setState({showPractices: true});
        break;
    }
  };
  render () {
    return (
      <View contentContainerStyle={styles.container}>
        <DoctorsSearch onSelect={this.showFilters} />
        <DoctorsForm {...this.state} onSubmit={this.submit} />

      </View>
    );
  }
}

export default DocsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
