import React, { useState } from 'react';
import Styles from '../assets/styles'
import { Text, View, TextInput, Button } from 'react-native'

const People = ({ navigation }) => {
    const [name, setName] = useState('')
    const [people, setPeople] = useState([]);

    const renderPeople = () => {
        const renderObject = people.map((el, idx) => (<View key={idx}><Text>{el}</Text></View>))
        return renderObject;
    }

    return (
        <View style={Styles.container}>
            <View>
                <View>{renderPeople()}</View>
                <Text>Who is eating with you?</Text>
                <TextInput
                    onChangeText={(text) => {
                        setName(text)
                    }}
                    value={name}
                    style={Styles.input}
                />
                <Button title='More People?' onPress={() => {
                    setPeople((prevState) => ([...prevState, name]));
                    setName('');
                }} />
            </View>
            <Button title='To Items!' onPress={() => {
                navigation.navigate('Items', { people })
            }} />
            <View style={Styles.homeButton}>
                <Button title='Back to top' onPress={() => {
                    navigation.popToTop();
                }} />
            </View>
        </View>
    )
}

export default People;