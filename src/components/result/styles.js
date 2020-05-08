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
    inutil: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
    resul: {
        width: '100%',
        height: '15%',
        backgroundColor: '#4B0E0E',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start'
    },
    textResul: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 35
    },
    hints:{    
        justifyContent: 'center',
        alignItems: 'center'
    },
    failures:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHints:{
        fontWeight: 'bold',
        fontSize: 50
    },
    textFailures:{
        fontWeight: 'bold',
        fontSize: 50
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