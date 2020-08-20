
import React, {Component} from "react";
import {store} from "./Redux/configureStore";
// import GeoService from "./Services/Geolocation";
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  Button,
} from "react-native";
const {width} = Dimensions.get("window");

// const Separator = () => {
//   return <View style={styles.separator} />;
// };
class HomeScreen extends Component {
  constructor (props) {
    super(props);
    this.state = {
      nextScreen:"LocationForm",
    };
  }
  static navigationOptions = {
    header: null,
  };

  setNavigation= ()=>{
    if (store.getState().locationReducer.location != null){
      this.props.navigation.navigate("DocsForm");
    } else {
      this.props.navigation.navigate("LocationForm");
    }

  }
  render () {
    return (
      <ScrollView contentContainerStyle={styles.container}>

        <Image
          source={require("./assets/images/Building-Doctor-Patient-Trust.jpg")}
          style={{width: width, height: 200}}
        />
        <View style={styles.vbutton}>
          <Button
            title="Find a Doctor"
            onPress={() =>this.setNavigation() }
          />
        </View>

      </ScrollView>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  vbutton: {
    marginVertical: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
