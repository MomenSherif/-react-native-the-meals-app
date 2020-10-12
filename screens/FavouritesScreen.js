import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MealList from '../components/MealList';
import CustomHeaderButton from '../components/CustomHeaderButton';
import DefaultText from '../components/DefaultText';

const FavouritesScreen = (props) => {
  const favouriteMeals = useSelector(state => state.meals.favouriteMeals);

  if (!favouriteMeals.length)
    return (
      <View style={styles.content}>
        <DefaultText>No Favourite meals found. Start adding some!</DefaultText>
      </View>
    );

  return <MealList listData={favouriteMeals} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Favourites',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='drawer' iconName='ios-menu' onPress={navData.navigation.toggleDrawer} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default FavouritesScreen;