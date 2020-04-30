import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center'
    },
    form:{
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    },
    titleMain: {
        fontWeight: 'bold',
        color: "#444",
        marginBottom: 4
    },
    subscribeMain: {
        color: "#ddd",
        marginTop: 4,
        marginBottom: 8,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        height: 44,
        color: '#444',
        marginBottom: 20,
        borderRadius: 10
    },
    button: {
        height: 42,
        backgroundColor: "#ddd",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 160,
    }
});