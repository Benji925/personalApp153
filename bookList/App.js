import * as React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NewBooksScreen from "./screens/NewBooksScreen";

const Stack = createStackNavigator();

// function HomeScreen({navigation}) {
//     return (
//         <View>
//             <Text> Welcome to book list!</Text>
//
//             <Button title="Go to Details"
//                     onPress={() => navigation.navigate('NewBooksScreen')}
//             />
//         </View>
//
//     );
// }


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
