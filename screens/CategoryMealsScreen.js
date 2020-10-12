import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';
import MealList from '../components/MealList';
import { CATEGORIES } from '../data/dummy-data';


const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam('categoryId');
  const meals = useSelector((state) => state.meals.filteredMeals);
  const displayedMeals = meals.filter(meal => meal.categoryIds.includes(categoryId));

  if (!displayedMeals.length)
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    )
  return (
    <MealList listData={displayedMeals} navigation={props.navigation} />
  );
};


CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export default CategoryMealsScreen;