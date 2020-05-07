import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#eee",
        alignItems: 'center',
        justifyContent: 'center'
    },
    challengeContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'red',
        justifyContent: 'flex-start',
        width: '100%',
        height: '50%',
        position: 'absolute',
    },
    header: {
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '100%',
        height: '7%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 38,
        padding: 8
    },
    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 116
    },
    challenge: {
        flex: 1,
        borderWidth: 4,
        borderColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

    pointers: {
        width: '100%',
        height: '12%',
        borderWidth: 1,
        borderColor: 'yellow',
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
        height: 40,
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