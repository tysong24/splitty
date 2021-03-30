import React, { useState, useEffect } from 'react';
import Styles from '../assets/styles'
import { Text, View, TextInput, Button } from 'react-native'

const List = ({ navigation, route }) => {
    const [cost, setCost] = useState([]);
    const item = route.params.item;

    useEffect(() => {
        calcCostPerPerson();
        renderItems();
    }, [])

    let costPerPerson = {};
    const calcCostPerPerson = () => {
        let costPerItem = {};
        let itemPerPerson = {};
        item.forEach(itm => {
            costPerItem[itm.item] = (itm.cost / itm.sharing.length)
            for (let i = 0; i < itm.sharing.length; i++) {
                if (!(itm.sharing[i] in itemPerPerson)) {
                    itemPerPerson[itm.sharing[i]] = [];
                }
                itemPerPerson[itm.sharing[i]].push(itm.item)
            }
        })
        for (let person in itemPerPerson) {
            costPerPerson[person] = 0;
            itemPerPerson[person].forEach(el => costPerPerson[person] += costPerItem[el]);
        }
    }

    const renderItems = () => {
        let renderObject = []
        let idx = 1
        for (let person in costPerPerson) {
            console.log('person', person, 'cost', costPerPerson[person])
            renderObject.push(<Text key={idx}>{person} needs to pay: {costPerPerson[person]}</Text>)
            idx++;
        }
        setCost(renderObject);
    }

    return (
        <View style={Styles.container}>
            <View>{cost}</View>
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