import React, { useState } from 'react';
import Styles from '../assets/styles'
import { Text, View, TextInput, Button, Image } from 'react-native'

const People = ({ navigation }) => {
    const [name, setName] = useState('')
    const [people, setPeople] = useState([]);

    const renderPeople = () => {
        const renderObject = people.map((el, idx) => (<View key={idx} style={Styles.people}><Image style={Styles.personIcon} source={require('../../assets/person-icon.png')} /><Text>{el}</Text></View>))
        return renderObject;
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.pageCard}>
                <Text style={Styles.title}>People</Text>
            </View>
            <View style={Styles.peopleCard}>{renderPeople()}</View>
            <View style={Styles.inputCard}>
                <TextInput
                    onChangeText={(text) => {
                        setName(text)
                    }}
                    value={name}
                    style={Styles.input}
                />
                <Button style={Styles.add} title='Add People' onPress={() => {
                    setPeople((prevState) => ([...prevState, name]));
                    setName('');
                }} />
            </View>
            <View style={Styles.buttonView} >
                <Button style={Styles.homeButton} title='Home' onPress={() => {
                    navigation.popToTop();
                }} />
                <Button style={Styles.next} title='Next!' onPress={() => {
                    navigation.navigate('Items', { people })
                }} />
            </View>
        </View>
    )
}

export default People;