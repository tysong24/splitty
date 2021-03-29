import React, { useState } from 'react';
import Styles from '../assets/styles'
import { Text, View, TextInput, Button } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

const Items = ({ navigation, route }) => {
    const [name, setName] = useState('');
    const [cost, setCost] = useState(0);
    const [sharing, setSharing] = useState([]);
    const [item, setItem] = useState([]);

    const renderItems = () => {
        console.log(item)
        const renderObject = item.map((el, idx) => (<View key={idx}><Text>{el.item}</Text><Text>{el.cost}</Text></View>))
        return renderObject;
    }

    const renderPeople = () => {
        const people = route.params.people;
        console.log(people)
        const renderList = []
        for (let i = 0; i < people.length; i++) {
            const person = people[i];
            renderList.push({
                label: person,
                value: person
            })
        }
        console.log(renderList)
        return renderList;
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.pageCard}>
                <Text style={Styles.title}>Items</Text>
            </View>
            <View style={Styles.inputCard}>
                <Text>Name of Item: </Text>
                <TextInput
                    onChangeText={(text) => {
                        setName(text);
                    }}
                    value={name}
                    style={Styles.input}
                />
                <Text>Enter cost of item:</Text>
                <TextInput
                    onChangeText={(text) => {
                        setCost(text);
                    }}
                    value={cost}
                    keyboardType='numeric'
                    style={Styles.input}
                />
                <Text>Who's sharing this item:</Text>
                <DropDownPicker
                    items={renderPeople()}
                    multiple={true}
                    multipleText="%d items have been selected."
                    min={0}
                    max={10}
                    defaultValue='Who ate'
                    containerStyle={{ height: 40 }}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    onChangeItem={item => {
                        setSharing((prevState) => ([...prevState, item]))
                    }}
                />
                <Button title='Store Item' onPress={() => {
                    let hold = {
                        item: name,
                        cost: cost,
                        sharing: sharing,
                    }
                    setItem((prevState) => [...prevState, hold]);
                    setName('');
                    setCost(0);
                }} />
            </View>
            <View style={Styles.pageDisplay}>{renderItems()}</View>

            <View style={Styles.buttonView}>
                <Button style={Styles.next} title='Next' onPress={() => {
                    navigation.navigate('List', { item });
                }} />
                <Button style={Styles.homeButton} title='Home' onPress={() => {
                    navigation.popToTop();
                }} />
                <Button style={Styles.back} title='Back' onPress={() => {
                    navigation.goBack();
                }} />
            </View>
        </View>
    )
};

export default Items;