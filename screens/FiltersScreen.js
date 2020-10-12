import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
import { setFilters } from '../redux/actions/meals';

const FilterSwitch = props => (
  <View style={styles.filterContainer}>
    <DefaultText>{props.label}</DefaultText>
    <Switch
      trackColor={{ true: Colors.primaryColor, false: '#ccc' }}
      thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
      value={props.state}
      onValueChange={props.onChange}
    />
  </View>
)

const FiltersScreen = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactosFree: isLactoseFree,
      vegan: isVegan,
      vegetaraian: isVegetarian,
    };
    dispatch(setFilters(appliedFilters))
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  useEffect(() => {
    navigation.setParams({
      save: saveFilters
    })
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label='Gluten-free'
        state={isGlutenFree}
        onChange={(newValue => setIsGlutenFree(newValue))}
      />
      <FilterSwitch
        label='Lactose-free'
        state={isLactoseFree}
        onChange={(newValue => setIsLactoseFree(newValue))}
      />
      <FilterSwitch
        label='Vegan'
        state={isVegan}
        onChange={(newValue => setIsVegan(newValue))}
      />
      <FilterSwitch
        label='Vegetarian'
        state={isVegetarian}
        onChange={(newValue => setIsVegetarian(newValue))}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Filter meals',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='drawer' iconName='ios-menu' onPress={navData.navigation.toggleDrawer} />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='drawer' iconName='ios-save' onPress={navData.navigation.getParam('save')} />
      </HeaderButtons>
    ),
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
});

export default FiltersScreen;