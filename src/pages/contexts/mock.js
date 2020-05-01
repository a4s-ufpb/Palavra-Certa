import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, FlatList, Image,Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import api from '../../service/api';

import styles from './styles';


export default function Home(){

    const [contexts, setContexts] = useState([]);
    const [loading, setLoading] = useState(false);

    const DATA = [
        {
            id: 1,
            name: 'escola',
            description: 'objetos da escola'
        },
        {
            id: 2,
            name: 'casa',
            description: 'objetos da casa'
        },
        {
            id: 3,
            name: 'aula',
            description: 'objetos da aula'
        },
        {
            id: 4,
            name: 'planta',
            description: 'objetos da planta'
        },
        {
            id: 5,
            name: 'musica',
            description: 'objetos da musica'
        },
        {
            id: 6,
            name: 'construção',
            description: 'objetos da construção'
        },
        {
            id: 7,
            name: 'construção',
            description: 'objetos da construção'
        },
        {
            id: 8,
            name: 'construção',
            description: 'objetos da construção'
        }
    ]

    const navigation = useNavigation();

    async function loadContexts(){

        if(loading) return;
        setLoading(true);

        const response = await api.get('contexts');

        setContexts([...response.data]);
    }

    useEffect(() => loadContexts(), [contexts]);

    function navigationToChallenge(idContext){
       navigation.navigate('Challenge', {idContext});
    }

    function renderContext(item){
        return (
            <View style={styles.containerContext}>
                <Image style={styles.imageContext} source={{uri: item.imageUrl}} />
                <View style={styles.description} >
                    <Text style={styles.contextName}>{item.name}</Text>
                    <TouchableOpacity style={styles.buttonIr} onPress={ () => navigationToChallenge(item.id)}>
                        <Text style={styles.textButton} > Icon seta para direita  </Text>
                    </TouchableOpacity>
                </View>    
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                style={styles.listContexts}
                data={contexts}
                keyExtractor={context => String(context.id)}
                showsVerticalScrollIndicator={false}
                renderItem = {({item: context}) => renderContext(context)} 
            /> 
        </SafeAreaView>
    );
}

