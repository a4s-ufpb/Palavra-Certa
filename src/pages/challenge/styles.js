import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FDE9E1",
        alignItems: 'center',
        justifyContent: 'center'
    },
    challengeContainer:{
        backgroundColor: "#EDB458",
        alignItems: 'center',
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
        textTransform: 'capitalize',
        marginLeft: 116
    },
    challenge: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

    pointers: {
        width: '100%',
        height: '12%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4B0E0E'
    },
    textPointers: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FBDFD6'
    },
    imageChallenge:{
        width: '90%',
        height: '75%',
        borderWidth: 2,
        borderColor: "#000000",
        alignSelf: 'center',
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
        backgroundColor: "#CE9692",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    textOption: {
        fontSize: 15,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: '#fff'
    },
    btnSpeak:{
        height: 30,
        width: 30,
        backgroundColor: "#833636",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        borderRadius: 35,
        marginBottom: 8,
        borderColor: 'green'
    },
    textBtnSpeak:{
        color: '#fff'
    },
    information: {
        width: '99%',
        height: '62%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
});