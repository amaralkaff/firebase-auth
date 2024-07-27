import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './Home';
import ListScreen from './List';
import CustomHeader from '../components/CustomHeader';

const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
  return (
    <>
      <CustomHeader title="App Tabs" />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: 'blue500' },
          tabBarLabelStyle: { color: 'white', fontWeight: 'bold' },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="List" component={ListScreen} />
      </Tab.Navigator>
    </>
  );
};

export default Tabs;
  