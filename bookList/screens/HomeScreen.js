import React, {useState} from 'react';
import { ScrollView, StyleSheet, ImageBackground, Button, View, Text } from 'react-native';
import NewBooksScreen from "./NewBooksScreen";
let books = require("../assets/books.json");
let theData = books;

const image = { uri: "https://i.pinimg.com/originals/c1/97/ba/c197ba63b1ff4c94c19243ede3038795.jpg" };


export default function HomeScreen({navigation}) {
    const [selectedData,setSelectedData] = useState(theData);
    return (
        <ScrollView>
        <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
        <View style={{paddingTop:30}}>
            <Text> Welcome to book list!</Text>
            <Button title="Go to Details"
                    onPress={() => navigation.navigate('NewBooksScreen')}
            />
            <Button title="Show my books!"
                    onPress={()=>setSelectedData(theData)}/>
            <View
                style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {books.map(selectedData=>(
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