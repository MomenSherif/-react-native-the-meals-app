import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MealItem from './MealItem';

const MealList = props => {
  const favouriteMeals = useSelector(state => state.meals.favouriteMeals);
  const isFavourite = (item) => favouriteMeals.some(meal => meal.id === item.id);

  const renderMealItem = ({ item }) =>
    <MealItem
      {...item}
      onSelect={() => props.navigation.navigate('MealDetail',
        {
          mealId: item.id,
          mealTitle: item.title,
          isFavourite: isFavourite(item),
        })}
    />

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15
  }
});

export default MealList;