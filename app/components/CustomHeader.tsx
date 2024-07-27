import React from 'react';
import { Div, Text } from 'react-native-magnus';

const CustomHeader = ({ title }: { title: string }) => {
  return (
    <Div bg="blue500" p="lg" justifyContent="center">
      <Text color="white" fontSize="2xl" fontWeight="bold">{title}</Text>
    </Div>
  );
};

export default CustomHeader;
