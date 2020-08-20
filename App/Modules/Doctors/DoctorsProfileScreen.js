import React, {Component} from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Button,
} from "react-native";
import DoctorsService from "../../Services/BetterDoctor";

class DoctorsProfile extends Component {
  constructor (props) {
    super(props);
    // eslint-disable-next-line no-console
    this.state = {
      loading: true,
      dataSource: [],
      params: props.navigation.state.params.params,
    };
  }
  static navigationOptions = {
    title: "",
  };
  componentDidMount () {
    DoctorsService.fetchDoctorsProfile(this.state.params).then(response => {
      // eslint-disable-next-line no-console
      console.log(response.data);
      this.setState({loading: false, dataSource: response.data});
    });
  }
  saveDoctor = () => {};
  render () {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      );
    }
    return (
      <View>

        <Image
          style={{width: 50, height: 50}}
          source={{uri: this.state.dataSource.profile.image_url}}
        />
  <Text style={styles.heading1}>{this.state.dataSource.profile.first_name}{" "}{this.state.dataSource.profile.middle_name}{" "}{ this.state.dataSource.profile.last_name}</Text>
        <Text>{this.state.dataSource.profile.bio}</Text>
        <Button title="Save Doctor" onPress={() => this.saveDoctor()} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff",
  },
});

export default DoctorsProfile;
