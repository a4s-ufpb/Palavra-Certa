import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FDE9E1",
        alignItems: 'center',
        justifyContent: 'center'
    },
    form:{
        backgroundColor: "#4B0E0E",
        alignSelf: 'stretch',
        borderWidth: 3,
        borderColor: '#000',
        height: 422,
        margin: 14,
        padding: 14,
        paddingHorizontal: 15,
        elevation: 25,
        borderRadius: 12,
        shadowOffset: {
            width: -100,
            height: -210
          },
          shadowOpacity: 1,
          shadowRadius: 10,
    },
    logoMain: {
        alignSelf: 'center',
        width: 350,
        height: 255,
        marginBottom: 8,
        borderRadius: 5
    },
    textInput: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        fontSize: 16,
        height: 44,
        color: '#444',
        marginBottom: 20,
        marginTop: 14,
        borderRadius: 25
    },
    button: {
        height: 42,
        backgroundColor: "#CE9692",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    textButton: {
        color: '#EBF5DF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    showPopup: { 
        width: '100%', 
        height: '88%',
        position: 'absolute',
        backgroundColor: '#000'
    },
    centeredView: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 240
    },
    modalView: {
        width: 250,
        height: 250,
        margin: 2,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        alignSelf: 'center',
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
    textStyle: {
        color: '#fff',
		fontWeight: 'bold'
    },
    textAcert: {
        fontWeight: 'bold',
        fontSize: 25,
    }
});