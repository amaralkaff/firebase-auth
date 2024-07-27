import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Div, Text, Button } from 'react-native-magnus';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signOut } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getItems, deleteItem } from '../controllers/firestoreController';

type ItemType = {
  id: string;
  title: string;
  description: string;
};

type RootStackParamList = {
  List: undefined;
  Detail: { item: ItemType };
  Login: undefined;
};

const ListScreen = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const fetchedItems = await getItems();
    if (fetchedItems) {
      setItems(fetchedItems);
    }
  };

  const handleDelete = async (id: string) => {
    await deleteItem(id);
    fetchItems();
  };

  const renderItem = ({ item }: { item: ItemType }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', { item })}>
      <Div p="lg" borderBottomWidth={1} borderBottomColor="gray200">
        <Text fontSize="xl" fontWeight="bold" color="black">{item.title}</Text>
        <Text color="gray500">{item.description}</Text>
        <Button mt="md" onPress={() => handleDelete(item.id)}>Delete</Button>
      </Div>
    </TouchableOpacity>
  );

  const handleSignOut = async () => {
    try {
      await signOut(FIREBASE_AUTH);
      await AsyncStorage.clear();
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'Failed to sign out');
    }
  };

  return (
    <Div flex={1} bg="white">
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <Button block mt="lg" onPress={handleSignOut}>
        Sign Out
      </Button>
    </Div>
  );
};

export default ListScreen;
