import React from 'react';
import {SafeAreaView, FlatList, View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Home(){

    const ids = [0, 1, 2, 3, 4, 5];

    const DATA = [
        {
            name: 'escola',
            description: 'objetos da escola'
        },
        {
            name: 'casa',
            description: 'objetos da casa'
        },
        {
            name: 'aula',
            description: 'objetos da aula'
        },
        {
            name: 'planta',
            description: 'objetos da planta'
        },
        {
            name: 'musica',
            description: 'objetos da musica'
        },
        {
            name: 'construção',
            description: 'objetos da construção'
        }
    ]

    function renderContext(item){
        return (
                <View style={styles.context}>
                    <View style={styles.imageContext}>
                        <Text>{ item.description }</Text>
                    </View>
                    <View style={styles.description} >
                        <Text style={styles.contextName}>{ item.name }</Text>
                        <TouchableOpacity style={styles.buttonIr} onPress={() => {}}>
                            <Text style={styles.textButton}> ->  </Text>
                        </TouchableOpacity>
                    </View>
                </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                style={styles.listContexts}
                data={DATA}
                keyExtractor={() => {}}
                showsVerticalScrollIndicator={false}
                renderItem = {({ item }) => renderContext(item)} 
            /> 
        </SafeAreaView>
    );
}

