import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

import styles from './styles';

import sad from '../../assets/imgSad.jpg';

export default class Result extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: 0
        }
    }

    loadTalk(){
        const message = "Não existe nenhum desafio com esse tema. Por favor tente outro!";
        this.setState({text: message});
    }

    async speaking(){
        await this.loadTalk();
        Speech.speak(this.state.text, {
            language: 'pt-BR'
        });
    }
    render() {
       return (
            <View style={styles.container}>
                <View style={styles.information}>
                    <Text style={styles.textInformation} > Não existe nenhum desafio com esse tema. Por favor tente outro! </Text>
                </View>

                <Image source={sad} style={styles.imgSad} />
               
                <TouchableOpacity style={styles.option} onPress={() => this.speaking()} >
                    <Feather name="volume-2" size={25} style={styles.textOption} /> 
                </TouchableOpacity>
                <View />
            </View>
        );
    };
}