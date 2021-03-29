import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    // containers
    container: {
        flex: 1,
        position: 'absolute',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
    },

    titleCard: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    pageCard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    pageDisplay: {
        flex: 3,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        zIndex: 0,
    },

    inputCard: {
        flex: 1,
        backgroundColor: 'white',
        zIndex: 1,
    },

    // contents

    title: {
        position: 'absolute',
        color: 'black',
        fontWeight: '800',
        fontSize: 25,
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        textAlignVertical: 'center',
        borderColor: 'grey',
        borderRadius: 20,
    },

    item: {
        flex: 1,
        alignItems: 'center'
    },

    // buttons

    buttonView: {
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-between',
        bottom: 25,
    },

    add: {
        flex: 1,
        zIndex: 900,
    },

    homeButton: {
        flex: 1,
        zIndex: 900,
    },

    next: {
        flex: 1,
    },

    back: {
        zIndex: 900,
    },

    // assets and other

    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    personIcon: {
        height: 50,
        width: 50,
        alignSelf: 'center'
    },

    people: {
        flexDirection: 'column'
    },

    peopleText: {
        position: 'relative',
        justifyContent: 'flex-end',
        alignSelf: 'center',
        fontWeight: "bold"
    },
});

export default styles;