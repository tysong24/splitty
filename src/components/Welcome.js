import React, { useState } from 'react';
import Styles from '../assets/styles'
import { Text, View, Button, ImageBackground, Image } from 'react-native'

const Welcome = ({ navigation }) => {

    return (
        <ImageBackground source={require('../../assets/F1.large.jpg')} style={Styles.image}>
            <View style={Styles.container} >
                <Text style={Styles.title}>Welcome to Splitty!</Text>
                <Button title='Start Splitting!' onPress={() => {
                    navigation.navigate('People')
                }} />
            </View>
        </ImageBackground>
    )
}

export default Welcome;