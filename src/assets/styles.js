import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
    },

    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    titleCard: {
        flex: 9,
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

    peopleCard: {
        flex: 3,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    personIcon: {
        height: 50,
        width: 50,
    },

    people: {
        flexDirection: 'column'
    },

    inputCard: {
        flex: 1,
        backgroundColor: 'paleblue'
    },

    title: {
        position: 'absolute',
        color: 'black',
        fontWeight: '800',
        fontSize: 25,
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 0,
        textAlignVertical: 'center',
    },

    item: {
        flex: 1,
        alignItems: 'center'
    },

    buttonView: {
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-between'
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
        zIndex: 900,
    },

    back: {
        zIndex: 900,
    },
});

export default styles;