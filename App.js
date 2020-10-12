import React from 'react';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo';
import { Provider } from 'react-redux'

import MealsNavigator from './navigation/MealsNavigator';
import store from './redux/store';

export default function App() {
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded)
    return <AppLoading />;


  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  )
}

const styles = StyleSheet.create({

});
