import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: "#EDB458",
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '50%',
        position: 'absolute',
    },
    imgSad: {
        width: '100%',
        height: '15%',
        backgroundColor: '#4B0E0E',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start'
    },
    textImgSad: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 35
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
    imgAcert: {
        width: 100,
        height: 100,
        borderRadius: 100

    },
    imgErro: {
        width: 100,
        height: 100,
        borderRadius: 100
    }
});