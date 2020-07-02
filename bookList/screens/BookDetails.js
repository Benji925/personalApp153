import React, {useState} from 'react';
import { ScrollView, StyleSheet, ImageBackground, Button, View, Text } from 'react-native';

const image = { uri: "https://jooinn.com/images/blank-parchment-texture-3.jpg" };

export default function BookDetails({navigation, route}) {
    const {name}=route.params;
    const {author}=route.params;
    const {review}=route.params;

    return (
        <View>
            <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
                <View style={{paddingTop:30}}>
                    <Text style={{padding: 10, paddingVertical: 30 ,color: 'maroon', fontSize:50, textAlign: 'center'}}> {name}</Text>
                    <Text style={{padding: 10, paddingVertical: 30 ,color: 'maroon', fontSize:30, textAlign: 'center'}}>{author}</Text>
                    <Text style={{padding: 10, paddingVertical: 30 , paddingLeft: 30, paddingRight: 20,color: 'maroon', fontSize: 15, textAlign: 'left'}}>{review}</Text>
                </View>
            </ImageBackground>
        </View>

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