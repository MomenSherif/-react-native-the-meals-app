import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = (props) => {

  const renderGridItem = ({ item }) =>
    <CategoryGridTile
      title={item.title}
      color={item.color}
      onSelect={() => props.navigation.navigate('CategoryMeals', { categoryId: item.id })}
    />

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
}

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Meal Categories',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='drawer' iconName='ios-menu' onPress={navData.navigation.toggleDrawer} />
      </HeaderButtons>
    )
  };
}

const styles = StyleSheet.create({

});

export default CategoriesScreen;