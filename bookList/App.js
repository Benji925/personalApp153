import * as React from 'react';
import {useEffect} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NewBooksScreen from "./screens/NewBooksScreen";
import BookDetails from "./screens/BookDetails";
import {useAsyncStorage} from '@react-native-community/async-storage'


const Stack = createStackNavigator();


export default function App({navigation}) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen"
                              component={HomeScreen}
                              options={{ title: 'My Books' }}/>
                <Stack.Screen name="NewBooksScreen"
                              component={NewBooksScreen}
                              options={{ title: 'New Books' }}/>
                <Stack.Screen name="BookDetails"
                              component={BookDetails}
                              options={{title: 'Book Details'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
