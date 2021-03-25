import React, { useState, useEffect } from 'react';
import Styles from '../assets/styles'
import { Text, View, TextInput, Button } from 'react-native'

const List = ({ navigation, route }) => {

    const renderItems = () => {
        const renderObject = route.params.item.map((el, idx) => (<View key={idx}><Text>{el.item}</Text><Text>{el.cost}</Text></View>))
        return renderObject;
    }

    return (
        <View style={Styles.container}>
            <View>{renderItems()}</View>
            <Button title='Back to top' onPress={() => {
                navigation.popToTop();
            }} />
            <Button title='Back' onPress={() => {
                navigation.goBack();
            }} />
        </View>
    )
};

export default List;