import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FDE9E1",
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
        textTransform: 'capitalize',
        marginLeft: 98
    },
    mainContainer:{
        backgroundColor: "#4B0E0E",
        alignItems: 'center',
        marginTop: 150,
        justifyContent: 'center',
        width: '100%',
        height: '50%',
    },
});