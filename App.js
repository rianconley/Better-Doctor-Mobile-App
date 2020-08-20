import {View} from "react-native";
import React from "react";
import AppNavigator from "./App/Navigation/AppNavigator";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/es/integration/react";
import { persistor, store } from "./App/Redux/configureStore";


export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <View style={{flex: 1}}>
        <AppNavigator />
      </View>
    </PersistGate>
  </Provider>
);
