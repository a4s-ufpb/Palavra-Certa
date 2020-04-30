import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#eee",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 9,
        marginTop: 15
    },
    context:{
        width: 350,
        height: 125,
        margin: 3,
        backgroundColor:'#999',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContext: {
        position: 'absolute',
        alignSelf: 'flex-start',
        backgroundColor: 'red',
        width: 100,
        height: 100,
        marginLeft: 8,
        borderRadius: 5
    },
    description: {
        alignSelf: 'flex-end',
        justifyContent: 'center',
        width: '80%',
        height: 150,
        paddingLeft: 12,
    },
    contextName: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center'
    },
    buttonIr: {
        height: 32,
        width: 52,
        backgroundColor: "rgba(238, 173, 45, 1)",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginRight: 11,
        borderRadius: 9
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    }
});