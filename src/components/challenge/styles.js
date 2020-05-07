import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 0.7,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%'
    },
    pointers: {
        width: '100%',
        height: '12%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#aaa'
    },
    textPointers: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    imageChallenge:{
        width: '95%',
        height: '50%',
        borderWidth: 2,
        borderColor: "#000000",
        maxHeight: 500,
        maxWidth: 500,
        margin: 8,
        borderRadius: 15
    },
    submit: {
        width: '95%',
        flex: 0.9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    submitLeft: {
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    submitRight: {
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    option: {
        height: 50,
        width: 150,
        backgroundColor: "rgba(238, 173, 45, 1)",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    textOption: {
        fontSize: 15,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: '#fff'
    }
});