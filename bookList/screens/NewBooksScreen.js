import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./HomeScreen";

export default function NewBooksScreen({navigation}) {
    return (
        <View>
            <Text> Want any New Books? Put 'em here!!</Text>
            {/*<Button title="Go to Details"*/}
            {/*        onPress={() => navigation.navigate('HomeScreen')}*/}
            {/*/>*/}
    </View>
    );
}