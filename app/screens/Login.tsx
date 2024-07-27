// app/screens/Login.tsx
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Div, Input, Button, Text } from 'react-native-magnus';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const validateInputs = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Validation Error', 'Email and password fields cannot be empty.');
      return false;
    }
    return true;
  };

  const signIn = async () => {
    if (!validateInputs()) return;

    try {
      setLoading(true);
      await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
      Alert.alert('Success', 'User signed in');
      navigation.navigate('Tabs' as never);  // Navigate to Tabs screen
    } catch (e) {
      console.log(e);
      Alert.alert('Error', 'User not found');
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    if (!validateInputs()) return;

    try {
      setLoading(true);
      await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      Alert.alert('Success', 'User created');
      navigation.navigate('Tabs' as never);
    } catch (e) {
      console.log(e);
      Alert.alert('Error', 'User not created');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Div flex={1} justifyContent="center" alignItems="center" p="lg" bg="white">
      <Text fontSize="4xl" fontWeight="bold" mb="xl" color="black">Login</Text>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoComplete="email"
        mb="md"
        borderColor="gray200"
        rounded="lg"
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}  
        secureTextEntry
        autoComplete="password"
        mb="lg"
        borderColor="gray200"
        rounded="lg"
      />
      <Button block loading={loading} onPress={signIn} mb="md">Sign In</Button>
      <Text color="gray500" mb="md">or</Text>
      <Button block loading={loading} onPress={signUp}>Sign Up</Button>
      {error ? <Text color="red500" mt="md">{error}</Text> : null}
    </Div>
  );
};

export default LoginScreen;
