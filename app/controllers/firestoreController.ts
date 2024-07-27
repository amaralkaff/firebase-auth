import { FIREBASE_DB } from '../../FirebaseConfig';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const itemsCollection = collection(FIREBASE_DB, 'items');

export const addItem = async (item: { title: string; description: string }) => {
  try {
    const docRef = await addDoc(itemsCollection, item);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const getItems = async () => {
  try {
    const querySnapshot = await getDocs(itemsCollection);
    const items: any[] = [];
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    return items;
  } catch (e) {
    console.error('Error getting documents: ', e);
  }
};

export const updateItem = async (id: string, item: { title: string; description: string }) => {
  try {
    const itemDoc = doc(FIREBASE_DB, 'items', id);
    await updateDoc(itemDoc, item);
  } catch (e) {
    console.error('Error updating document: ', e);
  }
};

export const deleteItem = async (id: string) => {
  try {
    const itemDoc = doc(FIREBASE_DB, 'items', id);
    await deleteDoc(itemDoc);
  } catch (e) {
    console.error('Error deleting document: ', e);
  }
};
