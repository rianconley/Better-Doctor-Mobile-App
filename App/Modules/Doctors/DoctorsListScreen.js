import React, {Component} from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Button
} from "react-native";
import DoctorsService from "../../Services/BetterDoctor";

class DoctorsList extends Component {
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
    title: "Your Doctor List",
  };
  componentDidMount () {
    DoctorsService.fetchDoctors(this.state.params).then(response => {
      // eslint-disable-next-line no-console
      console.log(response.data);
      this.setState({loading: false, dataSource: response.data});
    });
  }
  renderItem = data => (
    <TouchableOpacity style={styles.list}>
      <Text style={styles.lightText}>
        {data.item.profile.first_name}
        {" "}
        {data.item.profile.middle_name}
        {" "}
        {data.item.profile.last_name}
      </Text>
      <Text>{data.item.profile.bio}</Text>
      <Button
            title="View Profile"
            onPress={() =>this.props.navigation.navigate("DocProfile", {
              params: data.item.npi })}
          />
    </TouchableOpacity>
  );
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
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={item => this.renderItem(item)}
        />
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

export default DoctorsList;
