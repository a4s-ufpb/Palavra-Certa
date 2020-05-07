import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#eee",
        alignItems: 'center',
        justifyContent: 'center'
    },
    form:{
        backgroundColor: "#999",
        alignSelf: 'stretch',
        margin: 14,
        padding: 10,
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
        width: 135,
        height: 255,
        marginBottom: 8,
        borderRadius: 5
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#aaa',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        fontSize: 16,
        height: 44,
        color: '#444',
        marginBottom: 20,
        borderRadius: 25
    },
    button: {
        height: 42,
        backgroundColor: "rgba(238, 173, 45, 0.8)",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }
});