import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Div, Text } from 'react-native-magnus';

type YourItemType = {
  id: string;
  title: string;
  description: string;
};

const DetailScreen = () => {
  const route = useRoute();
  const { item } = route.params as { item: YourItemType };

  return (
    <Div flex={1} justifyContent="center" alignItems="center" p="lg" bg="white">
      <Text fontSize="4xl" fontWeight="bold" mb="xl" color="black">{item.title}</Text>
      <Text fontSize="lg" color="gray500">{item.description}</Text>
    </Div>
  );
};

export default DetailScreen;
