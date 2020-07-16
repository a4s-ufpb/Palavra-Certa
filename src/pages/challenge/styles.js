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
        elevation: 1,
        justifyContent: 'flex-start',
        width: '100%',
        height: '67%',
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
        width: '100%',
        
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
        color: '#fff'
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
        height: 42,
        width: 150,
        backgroundColor: "#CE9692",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 6,
        borderWidth: 0.8,
        elevation: 1
    },
    textOption: {
        fontSize: 14,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },
    btnSpeak:{
        height: 30,
        width: 30,
        backgroundColor: "#833636",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        borderRadius: 35,
        marginRight: 19,
        borderColor: 'green',
        
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
    },
    imgOption: {
        flex: 1, 
        width: '100%',
        height: '100%', 
        position: 'absolute', 
        alignSelf: 'center', 
        zIndex: 100
    },
    centeredView: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 240
    },
    modalView: {
        width: 241,
        margin: 2,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        shadowColor: '#000',
        elevation: 5
    },
    openButton: {
        borderRadius: 50,
		height: 40,
		width: 130,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20
    },
    textOpenButton: {
        color: '#555',
		fontWeight: 'bold'
    },
    textAcert: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center'
    },
    barProgress: {
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#000',
        borderWidth: 1,
        height: 4
    }
});