import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1,
        flexDirection: 'column',
        color: 'white',
        height: '90%',
        width: '90%'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        position: 'absolute',
        right: '20%',
        bottom: '70%',
        flexDirection: 'column',
        opacity: .9,
        color: 'white',
        fontWeight: '800',
        fontSize: 25,
        borderColor: 'black',
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 36
    },
    homeButton: {
        zIndex: 900,
        bottom: 10,
    },
    next: {
        zIndex: 900,
        bottom: 10,
    },
    back: {
        zIndex: 900,
        bottom: 10,
    },
});

export default styles;