import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#eee",
        alignItems: 'center',
        justifyContent: 'flex-start'
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
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
});