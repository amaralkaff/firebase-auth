// app/screens/Home.tsx
import React from 'react';
import { Div, Text } from 'react-native-magnus';

const HomeScreen = () => {
  return (
    <Div flex={1} justifyContent="center" alignItems="center" p="lg" bg="white">
      <Text fontSize="4xl" fontWeight="bold" mb="xl" color="black">Home</Text>
    </Div>
  );
};

export default HomeScreen;
