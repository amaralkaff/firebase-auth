import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'react-native-magnus';
import Tabs from './app/screens/Tabs';
import Login from './app/screens/Login';
import Detail from './app/screens/Detail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
