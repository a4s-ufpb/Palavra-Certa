import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#4B0E0E',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    information: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      width: '75%',
      height: '22%',
    },
    textInformation: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        fontSize: 25
    },
    imgSad: {
        width: 200,
        height: 200,
        backgroundColor: '#EDB458',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginBottom: 12,
    },
    textImgSad: {
        color: '#fff',
        fontSize: 15
    },
    option: {
        height: 55,
        width: 55,
        backgroundColor: "#CE9692",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 35,
        marginBottom: 8
    },
    textOption: {
        color: '#fff'
    },
});