import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#eee",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    header: {
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '100%',
        height: '7%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 16,
        marginBottom: 16,
        padding: 8
    },
    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 116
    },
    context:{
        width: 350,
        height: 125,
        margin: 6,
        borderRadius: 10,
        elevation: 10,
        backgroundColor:'#999',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContext: {
        position: 'absolute',
        alignSelf: 'flex-start',
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
        color: '#222',
        textTransform: 'capitalize',
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