import React, { useState } from 'react';
import Styles from '../assets/styles'
import { Text, View, Button, ImageBackground, Image } from 'react-native'

const Welcome = ({ navigation }) => {

    return (
        <View style={Styles.container} >
            <View style={Styles.titleCard}>
                <Text style={Styles.title}>Welcome to Splitty!</Text>
            </View>
            <View>
                <Button style={Styles.homeButton} title='Start Splitting!' onPress={() => {
                    navigation.navigate('People')
                }} />
            </View>
        </View>
    )
}

export default Welcome;