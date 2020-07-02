import React, {useState} from 'react';
import {Button, View, Text, ScrollView, ImageBackground, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./HomeScreen";
let wanted = require("../assets/wanted.json");
let theData = wanted;

const image = { uri: "https://i.pinimg.com/originals/c1/97/ba/c197ba63b1ff4c94c19243ede3038795.jpg" };


export default function NewBooksScreen({navigation}) {
    return (
        <ScrollView>
            <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
                <View style={{paddingTop:30}}>
                    <View
                        style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {wanted.map(selectedData=>(
                            <View  key={selectedData.id}
                                   style={{alignItems: 'flex-start',
                                       backgroundColor: 'red',
                                       borderWidth: 3,
                                       borderColor: 'black',
                                       marginTop:15
                                   }}>
                                <View style={{flexDirection: 'row', alignItems: 'flex-start', width:150,wrap:'yes'}}>
                                    <View>
                                        <Text style={{padding: 10, paddingVertical: 30 ,color: 'gold', size: '', justifyContent: 'center'}}>
                                            {selectedData.name}
                                        </Text>
                                        <Text style={{justifyContent:'center', padding:15}}>{selectedData.author}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    imageWrapper: {
        height: 900,
        width: '100',
        overflow : "visible",
        padding: 20
    },
    theImage: {
        height:200,
        resizeMode: "contain",
    }
})